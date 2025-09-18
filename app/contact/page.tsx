// app/contact/page.tsx
export const metadata = {
  title: "Kontakt – GSphotography",
};

import ContactForm from "../../components/ContactForm";


export default function ContactPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Kontakt</h1>
      <p className="text-white/70 mt-4 leading-7">
        Ta gjerne kontakt for booking eller spørsmål.
      </p>

      {/* Forma */}
      <ContactForm />

      {/* Papildoma kontaktinė informacija (be telefono, kaip prašei) */}
      <div className="mt-8 space-y-2 text-white/80">
        <p>
          E-post:{" "}
          <a href="mailto:info@gsphotography.no" className="text-green-500">
            info@gsphotography.no
          </a>
        </p>
        <p>Sted: Aust-Torpa, Norge</p>
      </div>
    </section>
  );
}
