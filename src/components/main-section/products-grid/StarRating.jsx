//component for star-ratings
export function StarRating({ rating }) {
  const fullStarColor = "#002766"; // Lighter blue (Tailwind's blue-500)
  const emptyStarColor = "#e5e7eb"; // Light gray (Tailwind's gray-200)

  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        let star;

        if (rating >= ratingValue) {
          // Full star
          star = (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill={fullStarColor}
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
          );
        } else if (rating >= ratingValue - 0.5) {
          // Half star
          star = (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`half_gradient_${i}`}>
                  <stop offset="50%" stopColor={fullStarColor} />
                  <stop offset="50%" stopColor={emptyStarColor} />
                </linearGradient>
              </defs>
              <path
                d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                fill={`url(#half_gradient_${i})`}
              />
            </svg>
          );
        } else {
          // Empty star
          star = (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill={emptyStarColor}
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
          );
        }

        return (
          <div key={i} className="mr-1">
            {star}
          </div>
        ); // Adds spacing between stars
      })}
    </div>
  );
}
