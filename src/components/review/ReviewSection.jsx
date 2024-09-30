import { useEffect, useState } from "react"
import reviewsData from "../../reviews.json";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

export default function ReviewSection() {

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: '',
    review: '',
    stars: 0,
  });

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    setData([...reviewsData, ...savedReviews]);
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = { ...form };

    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.push(newReview);

    localStorage.setItem("reviews", JSON.stringify(savedReviews));

    setForm({ name: '', review: '', stars: 0 })
    setData([...reviewsData, ...savedReviews]);
  }

  return (
    <section className="lg:w-1/2">
      <div className="sm:mt-40">
        <p className="font-semibold border-b-2 border-b-purple-600 w-80 text-2xl">O que nossos clientes dizem:</p>
        <ReviewItem data={data} />
        <ReviewForm setForm={setForm} form={form} handleSubmit={handleSubmit} />
      </div>
    </section>
  )
}