import ContactForm from "@/components/ContactForm";

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

      <ContactForm />

      <div className="mt-8 text-white/80 space-y-2">
        <p>
          Telefon:{" "}
          <a href="tel:46262381" className="underline decoration-white/40 hover:decoration-white">
            46 26 23 81
          </a>
        </p>
        <p>
          E-post:{" "}
          <a
            href="mailto:info@gsphotography.no"
            className="underline decoration-white/40 hover:decoration-white"
          >
            info@gsphotography.no
          </a>
        </p>
        <p>Sted: Aust-Torpa, Norge</p>
      </div>
    </section>
  );
}
