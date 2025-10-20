export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sarthak Rahate. Engineering the future.
        </p>
      </div>
    </footer>
  );
}
