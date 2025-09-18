export default function Footer() {
  return (
    <footer className="p-6 border-t mt-12 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto">
        © {new Date().getFullYear()} GSphotography. All rights reserved.
      </div>
    </footer>
  );
}
