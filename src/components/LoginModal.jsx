import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

function LoginModal({ onClose }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="overlay"
      onClick={(e) => e.target.id === "overlay" && onClose()}
    >
      <div className="bg-[#141414] w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-700 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          <FiX />
        </button>

        <h2 className="text-2xl font-semibold mb-2">Login</h2>

        <p className="text-gray-400 mb-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white underline">
            Signup
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md"
          />

          <button className="w-full bg-red-600 py-2 rounded-md hover:bg-red-700">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <span className="flex-1 h-px bg-gray-600"></span>
          <span className="px-3 text-gray-400 text-sm">or login with</span>
          <span className="flex-1 h-px bg-gray-600"></span>
        </div>

        {/* Social Login */}
        <div className="flex gap-3 justify-center">
          <button className="px-4 py-2 bg-blue-700 rounded-md">Facebook</button>
          <button className="px-4 py-2 bg-red-600 rounded-md">Google</button>
          <button className="px-4 py-2 bg-sky-500 rounded-md">Twitter</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
