"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mblaenkb";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" } // svarbu, kad Formspree grąžintų JSON ir neperadresuotų
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(json?.error || "Noe gikk galt. Prøv igjen.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Nettverksfeil. Prøv igjen.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      {/* Honeypot anti-spam: palikta paslėpta */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block mb-1 text-white/80">Din e-post</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="navn@eksempel.no"
        />
      </div>

      <div>
        <label className="block mb-1 text-white/80">Melding</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="Skriv meldingen din her…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sender…" : "Send melding"}
      </button>

      {status === "success" && (
        <p className="text-green-400 mt-2">Takk, meldingen din er sendt!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-2">Kunne ikke sende. {errorMsg}</p>
      )}
    </form>
  );
}
