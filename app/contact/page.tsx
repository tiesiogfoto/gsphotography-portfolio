export const metadata = {
  title: "Kontakt – GSphotography",
};

export default function ContactPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="text-white/70 mt-4 leading-7">
        Ta gjerne kontakt for booking eller spørsmål.
      </p>

      <form
        action="https://formspree.io/f/mblaenkb"
        method="POST"
        className="mt-6 space-y-4"
      >
        <div>
          <label className="block mb-1 text-white/80">Din e-post:</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-1 text-white/80">Melding:</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Send melding
        </button>
      </form>

      <div className="mt-6 text-white/80 space-y-2">
        <p>Telefon: <a href="tel:46262381" className="text-green-400">46 26 23 81</a></p>
        <p>E-post: <a href="mailto:info@gsphotography.no" className="text-green-400">info@gsphotography.no</a></p>
        <p>Sted: Aust-Torpa, Norge</p>
      </div>
    </section>
  );
}

