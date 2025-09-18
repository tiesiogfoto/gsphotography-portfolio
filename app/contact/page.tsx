// app/contact/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Kontaktai | GSphotography",
  description: "Susisiekite dėl fotosesijų ir projektų.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Kontaktai
      </h1>

      <p className="mt-4 text-gray-600">
        Turite klausimų ar norite rezervuoti fotosesiją? Parašykite arba
        paskambinkite – atsakau greitai.
      </p>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* Kortelė: Telefonas */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-medium">Telefonas</h2>
          <p className="mt-2 text-gray-600">Darbo dienomis 09:00–18:00</p>

          <a
            href="tel:+4746262381"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-900 px-4 py-2 text-base font-medium hover:bg-gray-900 hover:text-white transition"
          >
            Skambinti: 46 26 23 81
          </a>

          <div className="mt-3 text-sm text-gray-500">
            <p>„Tap to call“ – spustelėkite numerį ir pradėkite skambutį.</p>
          </div>
        </div>

        {/* Kortelė: El. paštas */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-medium">El. paštas</h2>
          <p className="mt-2 text-gray-600">
            Atsakau tą pačią arba kitą darbo dieną.
          </p>

          <a
            href="mailto:hello@gsphotography.no"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-900 px-4 py-2 text-base font-medium hover:bg-gray-900 hover:text-white transition"
          >
            Rašyti: hello@gsphotography.no
          </a>

          <div className="mt-3 text-sm text-gray-500">
            <p>Atidaromas jūsų numatytasis el. pašto klientas.</p>
          </div>
        </div>
      </section>

      {/* Papildoma informacija */}
      <div className="mt-10 rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-medium">Kita informacija</h3>
        <ul className="mt-3 list-disc pl-5 text-gray-600 space-y-1">
          <li>Vieta: Oslo, Norvegija (dirbu visoje NO/EU pagal susitarimą)</li>
          <li>Užsakymai verslui ir privatiems klientams</li>
        </ul>
      </div>

      {/* Grįžti */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          ← Grįžti į pradžią
        </Link>
      </div>
    </main>
  );
}

