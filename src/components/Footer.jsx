function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Tech-Shop</h3>
        <p className="text-sm">
          © {new Date().getFullYear()} Tech-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
