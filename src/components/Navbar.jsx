import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          TechShop
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white"
            }
          >
            Products
          </NavLink>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-300">
          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-white">
            <FiShoppingCart size={22} />
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
      rounded-full px-1.5 py-0.5"
            >
              0
            </span>
          </Link>

          {/* Account Icon */}
          <Link to="/signup" className="hover:text-white">
            <FiUser size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
