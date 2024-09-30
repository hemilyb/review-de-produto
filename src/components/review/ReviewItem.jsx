export default function ReviewItem({ data }) {

  return (
    <div className="space-y-8 mt-8">
      {data.map((review, index) => {

        const startsArray = Array(5).fill(false).map((_, i) => i < review.stars)
        
        return (
          <div key={index}
            className="space-y-3">
            <h3 className="font-semibold text-lg">
              {review.name}
            </h3>
            <p className="font-light">
              {review.review}
            </p>

            <div>
              {startsArray.map((filled, i) => (
                <span key={i}
                  className={`material-symbols-outlined text-purple-600 ${filled ? 'fill-1' : ''}`}>
                  kid_star
                </span>
              ))}
            </div>
            <div className="mt-6 h-[1px] bg-[#525252] w-full" />
          </div>
        )
      })}
    </div>
  )
}