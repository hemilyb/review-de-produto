import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ReviewSection from "./review/ReviewSection";

export default function ProductPage() {
  return (
    <section className="bg-[#1E1E1E] text-white overflow-x-hidden">
      <div className="lg:w-11/12 px-4 sm:flex justify-between py-10">
        <div className="lg:w-5/6">
          <Header />
          <ProductDetails />
        </div>
        <ReviewSection />
      </div>
    </section>
  )
}