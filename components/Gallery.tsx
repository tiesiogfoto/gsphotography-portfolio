export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">Galleri</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-square bg-gray-200" />
        <div className="aspect-square bg-gray-200" />
        <div className="aspect-square bg-gray-200" />
        <div className="aspect-square bg-gray-200" />
        <div className="aspect-square bg-gray-200" />
        <div className="aspect-square bg-gray-200" />
      </div>
    </section>
  );
}
