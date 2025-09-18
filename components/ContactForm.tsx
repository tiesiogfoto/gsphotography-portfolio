// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const res = await fetch("https://formspree.io/f/mblaenkb", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("Takk, meldingen din er sendt!");
      form.reset();
    } else {
      setStatus("Noe gikk galt. Prøv igjen senere.");
    }
  }

  return (
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
          rows={4}
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Skriv meldingen din her..."
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
      >
        Send melding
      </button>

      {status && <p className="mt-4 text-green-500">{status}</p>}
    </form>
  );
}
