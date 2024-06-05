export default function DesignBuilderSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="w-full h-64 bg-gray-800 mb-4 flex items-center justify-center"></div>
        </div>
        <div className="w-full md:w-1/2 text-left md:pl-8">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>
            Build the next best seller with our design builder
          </h2>
          <p className="text-gray-700 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'regular' }}>
            No more hours spent crafting designs—our innovative tool helps create design files based on your vision.
          </p>
          <p className="text-gray-700 mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'regular' }}>
            Try it today and watch your productivity soar!
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-200" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'semi-bold' }}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
