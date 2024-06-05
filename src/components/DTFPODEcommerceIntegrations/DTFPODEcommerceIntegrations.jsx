export default function EcommerceIntegrations() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>
            Ecommerce platform integrations
          </h2>
          <p className="text-lg leading-7 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
            Designed for creators and entrepreneurs, scaled for enterprises. Thousands of businesses use Bolo Print’s software and APIs to produce and deliver custom printed products anywhere in the world.
          </p>
          <p className="text-lg leading-7 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
            Connect your store to Bolo Print’s API directly or via our easy-to-use ecommerce integrations.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition duration-200" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
              Connect your store
            </button>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-200" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
              Read docs
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <img src="../../bunny.png" alt="Integrations Diagram" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
