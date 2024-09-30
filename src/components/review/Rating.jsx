import { useState } from "react";

export default function Rating({ setForm, stars }) {
  const [hover, setHover] = useState(0);

  const handleMouseEnter = (star) => setHover(star);
  const handleMouseLeave = () => setHover(0);

  const handleStarClick = (star) => {
    setForm((prev) => ({ ...prev, stars: star }));
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-outlined cursor-pointer text-purple-600 ${(hover >= star || stars >= star) ? 'fill-1' : ''
            }`}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleStarClick(star)}>
          kid_star
        </span>
      ))}
    </div>
  );
}