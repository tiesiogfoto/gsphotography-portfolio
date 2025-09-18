export const metadata = { title: "Om oss – GSphotography" };

export default function AboutPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Om oss</h1>
      <p className="text-white/70 mt-4 leading-7">
        Hei, jeg er Giedrė — en fotograf basert i Norge med fokus på rene
        produktbilder, portretter og arkitekturfotografi. Jeg har et skarpt øye
        for detaljer og lys, og skaper tidløse og profesjonelle uttrykk.
      </p>
      <ul className="mt-6 space-y-2 text-white/80">
        <li>• Produkt- og e-handel</li>
        <li>• Portretter & profilbilder</li>
        <li>• Arkitektur & interiør</li>
      </ul>
    </section>
  );
}
