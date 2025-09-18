export const metadata = { title: 'Om oss – GSphotography' };

export default function AboutPage() {
  return (
    <section className="container-padded mt-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Om meg</h1>
      <p className="text-white/70 mt-4 leading-7">
        Hei, jeg er Giedre — en fotograf basert i Norge som fokuserer på rene
        produkt-, portrett- og arkitekturbilder. Jeg har et skarpt blikk for
        detaljer og lyssetting, og holder uttrykket tidløst og profesjonelt.
      </p>
      <ul className="mt-6 space-y-2 text-white/80">
        <li>• Produkt- og e-handel</li>
        <li>• Portretter & headshots</li>
        <li>• Arkitektur & interiør</li>
      </ul>
    </section>
  );
}

