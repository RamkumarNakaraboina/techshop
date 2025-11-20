import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-xl fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        Tech-Shop
      </Link>

      {/* Menu */}
      <div className="hidden md:flex gap-8 text-gray-300">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/products" className="hover:text-white">
          Products
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-gray-300">
        <Link to="/cart" className="relative hover:text-white">
          <FiShoppingCart size={22} />
          {/* Cart Count Badge will come later */}
        </Link>

        <button className="hover:text-white">
          <FiUser size={22} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
