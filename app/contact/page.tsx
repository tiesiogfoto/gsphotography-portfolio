export const metadata = { title: 'Kontakt – GSphotography' };

export default function ContactPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="text-white/70 mt-4 leading-7">
        Ta gjerne kontakt for booking eller spørsmål.
      </p>
      <ul className="mt-6 space-y-2 text-white/80">
        <li>
          Telefon:{' '}
          <a href="tel:46262381" className="text-green-500">
            46 26 23 81
          </a>
        </li>
        <li>
          E-post:{' '}
          <a href="mailto:info@gsphotography.no" className="text-green-500">
            info@gsphotography.no
          </a>
        </li>
        <li>Sted: Aust-Torpa, Norge</li>
      </ul>
    </section>
  );
}
