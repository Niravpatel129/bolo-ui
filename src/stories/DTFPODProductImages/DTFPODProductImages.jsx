export default function Template() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Here are some of our most popular products
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-full h-48 sm:h-64 bg-gray-200 mb-4 flex items-center justify-center"></div>
            <p className="text-black">T-Shirt</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-48 sm:h-64 bg-gray-200 mb-4 flex items-center justify-center"></div>
            <p className="text-black">Tote Bags</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-48 sm:h-64 bg-gray-200 mb-4 flex items-center justify-center"></div>
            <p className="text-black">Canvas Posters</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-48 sm:h-64 bg-gray-200 mb-4 flex items-center justify-center"></div>
            <p className="text-black">Hoodies</p>
          </div>
        </div>
        <button className="mt-8 bg-gray-800 text-white py-2 px-4 md:px-6 rounded-full hover:bg-gray-700 transition duration-200">
          View All Products
        </button>
      </div>
    </div>
  );
}
