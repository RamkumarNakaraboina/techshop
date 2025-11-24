import Services from "../components/Services";
function Cart() {
  return (
    <div className="pt-20 text-white bg-black min-h-screen">
      <CartItems />

      <section className="mt-12">
        <Services />
      </section>

      {/* <Footer /> */}
    </div>
  );
}
export default Cart;
