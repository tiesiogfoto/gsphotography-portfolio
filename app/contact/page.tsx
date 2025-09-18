export const metadata = { title: "Kontakt – GSphotography" };

export default function ContactPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="text-white/70 mt-4 leading-7">
        Ta gjerne kontakt for booking eller spørsmål.
      </p>

      <div className="mt-6 space-y-4 text-white/80">
        <p>
          Telefon:{" "}
          <a
            href="tel:46262381"
            className="text-green-500 hover:underline font-medium"
          >
            46 26 23 81
          </a>
        </p>
        <p>
          E-post:{" "}
          <a
            href="mailto:info@gsphotography.no"
            className="text-green-500 hover:underline font-medium"
          >
            info@gsphotography.no
          </a>
        </p>
        <p>Sted: Norge</p>
      </div>
    </section>
  );
}
