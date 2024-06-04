const reviews = [
  { reviewer: 'Clay B.', rating: 5, review: 'My transfers look like they were silkscreened onto our shirts. I really like the flexibility of applying transfers the way we want.' },
  { reviewer: 'Clay B.', rating: 5, review: 'My transfers look like they were silkscreened onto our shirts. I really like the flexibility of applying transfers the way we want.' },
  { reviewer: 'Clay B.', rating: 5, review: 'My transfers look like they were silkscreened onto our shirts. I really like the flexibility of applying transfers the way we want.' },
];

const StarIcon = () => (
  <svg className="w-5 h-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.515 4.684a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.515 4.684c.3.921-.755 1.688-1.54 1.118l-3.977-2.89a1 1 0 00-1.175 0l-3.977 2.89c-.784.57-1.838-.197-1.54-1.118l1.515-4.684a1 1 0 00-.364-1.118l-3.977-2.89c-.784-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.515-4.684z" />
  </svg>
);


const ReviewCard = ({ reviewer, rating, review }) => {
  return (
    <div className="bg-slate-200 p-8 rounded-lg shadow-md w-full max-w-xs">
      <div className="font-bold mb-1">{reviewer}</div>
      <div className="flex items-center mb-5">
        {Array(rating).fill().map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div className="text-black text-semibold text-left">{review}</div>
    </div>
  );
};


export default function Template() {
  return (
    <>
   <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8">
        Customer Reviews
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} reviewer={review.reviewer} rating={review.rating} review={review.review} />
        ))}
      </div>
    </div>
  </>
  );
}
