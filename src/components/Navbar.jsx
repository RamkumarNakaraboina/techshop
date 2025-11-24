import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import productsData from "../data/productsData";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Debounce Search Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFiltered([]);
      } else {
        const results = productsData.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFiltered(results);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <nav className="w-full bg-[#0e0e0e] text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-gray-200">
          Tech-Shop
        </Link>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 text-gray-300">
          {/* SEARCH ICON */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-white"
            >
              <FiSearch size={22} />
            </button>

            {searchOpen && (
              <div
                className="absolute right-0 mt-3 w-64 bg-[#1b1b1b] border border-gray-700 
                          rounded-lg shadow-lg p-3 z-50"
              >
                <input
                  autoFocus
                  type="text"
                  className="w-full bg-[#111] border border-gray-600 text-white px-3 py-2 
                         rounded-md focus:outline-none"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {filtered.length > 0 && (
                  <div className="mt-3 max-h-56 overflow-y-auto space-y-2">
                    {filtered.map((p) => (
                      <Link
                        key={p.id}
                        to={`/product-details/${p.id}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchTerm("");
                        }}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <span className="text-sm text-gray-300">{p.title}</span>
                      </Link>
                    ))}
                  </div>
                )}

                {searchTerm.length > 0 && filtered.length === 0 && (
                  <p className="text-gray-500 text-sm mt-2">
                    No products found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* CART ICON */}
          <Link to="/cart" className="relative hover:text-white">
            <FiShoppingCart size={22} />
            <span
              className="absolute -top-2 -right-3 bg-red-500 text-white text-xs 
                        rounded-full px-1.5 py-0.5"
            >
              0
            </span>
          </Link>

          {/* USER ICON */}
          <Link to="/signup" className="hover:text-white">
            <FiUser size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
