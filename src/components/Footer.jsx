import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0d] text-gray-300 mt-20">
      {/* MAIN FOOTER */}
      <div className="border-t border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* NEWSLETTER */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tech-Shop</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our Email alerts to receive early discount offers,
              new products and more.
            </p>

            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded text-sm mb-3 focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 text-sm rounded text-white hover:bg-red-700">
              Subscribe
            </button>
          </div>

          {/* HELP */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>FAQs</li>
              <li>Track Order</li>
              <li>Cancel Order</li>
              <li>Return Order</li>
              <li>Warranty Info</li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Return Policy</li>
              <li>Security</li>
              <li>Sitemap</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Service Centres</li>
              <li>Careers</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT + SOCIAL */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 | All Rights Reserved ®
          </p>

          <div className="flex items-center gap-6 text-gray-400">
            <FiFacebook className="hover:text-white cursor-pointer" size={18} />
            <FiTwitter className="hover:text-white cursor-pointer" size={18} />
            <FiInstagram
              className="hover:text-white cursor-pointer"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-red-600 p-3 rounded-full shadow-xl hover:bg-red-700"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
