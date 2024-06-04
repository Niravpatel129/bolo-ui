
const FeatureCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 bg-white ">
      <div
        className="w-full h-48 bg-cover bg-center rounded-md mb-5"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="text-left">
      <h3 className="text-xl font-semibold mb-5">{title}</h3>
      <p className="text-black font-normal text-base">{description}</p>
      </div>
    </div>
  );
};
export default function Template() {
  return (
    <>
  <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8">
        We've tested it all so you don’t have to.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <FeatureCard
          imageUrl="/bunny.png"
          title="Beautiful Color Contrast"
          description="Colors will show vividly on your garments across any color combination. It will surprise you time and time again how bright and beautiful your DTF transfer designs will look on your products."
        />
        <FeatureCard
          imageUrl="/bunny.png"
          title="Any Design on Lights or Darks"
          description="No matter what color blanks you use, our DTF will give you vibrant results. Our transfers are easier, cleaner, brighter, more durable, and more flexible than any transfer you’ve worked with before."
        />
        <FeatureCard
          imageUrl="/bunny.png"
          title="Stretchability means Durability"
          description="The stretch test demonstrates durability. You will see no cracking when you stretch our DTF transfers (when applied correctly). We also tested for 50+ washes with very little degradation made possible by our combination of film, ink, powder, and pressing process."
        />
      </div>
    </div>
  </>
  );
}

