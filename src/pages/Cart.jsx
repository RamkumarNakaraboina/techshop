import { useCart } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();

  const originalPrice = cartItems.reduce(
    (acc, item) => acc + item.originalPrice * item.qty,
    0
  );

  const discountedPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const discount = originalPrice - discountedPrice;

  return (
    <div className="w-full min-h-screen bg-[#0e0e0e] text-white pt-28 px-8 flex gap-10">
      {/* LEFT — CART ITEMS */}
      <div className="w-2/3 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#111] p-5 rounded-xl flex gap-5 items-center"
          >
            <img src={item.images[0]} className="w-28 h-28 object-cover" />

            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-red-400 text-lg font-bold">
                ₹{item.price.toLocaleString()}
              </p>
            </div>

            {/* Qty Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-700 text-lg rounded"
              >
                -
              </button>

              <span className="text-lg">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-700 text-lg rounded"
              >
                +
              </button>
            </div>

            {/* Delete */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-400"
            >
              <FiTrash2 size={22} />
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT — ORDER SUMMARY */}
      <div className="w-1/3 bg-[#111] p-6 rounded-xl h-fit">
        <h2 className="text-xl font-bold mb-4">
          Order Summary ({cartItems.length} items)
        </h2>

        <div className="space-y-3">
          <p className="flex justify-between">
            <span>Original Price</span>
            <span>₹{originalPrice.toLocaleString()}</span>
          </p>

          <p className="flex justify-between text-green-400">
            <span>Discount</span>
            <span>-₹{discount.toLocaleString()}</span>
          </p>

          <p className="flex justify-between">
            <span>Delivery</span>
            <span className="text-green-500">Free</span>
          </p>
        </div>

        <hr className="my-5 border-gray-700" />

        <p className="flex justify-between text-xl font-bold">
          <span>Total Price</span>
          <span>₹{discountedPrice.toLocaleString()}</span>
        </p>

        <button className="w-full mt-6 bg-red-600 py-3 rounded-lg text-lg font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
