export const metadata = {
  title: "Kontakt – GSphotography",
};

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const response = await fetch("https://formspree.io/f/mblaenkb", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Takk, meldingen din er sendt!");
      form.reset();
    } else {
      setStatus("Noe gikk galt. Prøv igjen senere.");
    }
  }

  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="text-white/70 mt-4 leading-7">
        Ta gjerne kontakt for booking eller spørsmål.
      </p>

      {/* Kontakt form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block mb-1">Din e-post</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
            placeholder="navn@eksempel.no"
          />
        </div>
        <div>
          <label className="block mb-1">Melding</label>
          <textarea
            name="message"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
            rows={4}
            placeholder="Skriv meldingen din her..."
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Send melding
        </button>
      </form>

      {/* Žinutė po išsiuntimo */}
      {status && <p classNam
