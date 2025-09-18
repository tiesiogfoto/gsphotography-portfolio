export const metadata = { title: 'Galleri – GSphotography' };

export default function PortfolioPage() {
  return (
    <section className="container-padded mt-12 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-semibold">Galleri</h1>
      <p className="text-white/70 mt-4 leading-7">
        Et bredere utvalg av prosjekter og personlige arbeider.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <div className="aspect-square bg-gray-200 rounded">Galleri 1</div>
        <div className="aspect-square bg-gray-200 rounded">Galleri 2</div>
        <div className="aspect-square bg-gray-200 rounded">Galleri 3</div>
        <div className="aspect-square bg-gray-200 rounded">Galleri 4</div>
        <div className="aspect-square bg-gray-200 rounded">Galleri 5</div>
        <div className="aspect-square bg-gray-200 rounded">Galleri 6</div>
      </div>
    </section>
  );
}
