// eslint-disable-next-line react/prop-types
function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`w-4 h-4 fill-${index < rating ? "orange-300" : "gray-300"}`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
    >
      <path d="M15.765,2.434l2.875,8.512l8.983,0.104c0.773,0.009,1.093,0.994,0.473,1.455l-7.207,5.364l2.677,8.576 c0.23,0.738-0.607,1.346-1.238,0.899L15,22.147l-7.329,5.196c-0.63,0.447-1.468-0.162-1.238-0.899l2.677-8.576l-7.207-5.364 c-0.62-0.461-0.3-1.446,0.473-1.455l8.983-0.104l2.875-8.512C14.482,1.701,15.518,1.701,15.765,2.434z"></path>
    </svg>
  ));

  return <div className="flex gap-2">{stars}</div>;
}

export default StarRating;
