export default function Template() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Setup your store and start selling today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-left">
            <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">Connect with Bolo Print</h3>
              <p className="text-black">
                Connect your existing Etsy store to Gelato, and continue to sell your existing products, or create new ones.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-left">
            <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">Design your products</h3>
              <p className="text-black">
                Your customer browses your amazing Etsy store of locally produced products and places an order.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-left">
            <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">Start selling worldwide</h3>
              <p className="text-black">
                We handle the entire fulfillment process and ship directly to your customer.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-left">
            <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">We’ll take care of the rest</h3>
              <p className="text-black">
                The order is shipped directly to your customer. We deliver your products quickly and reliably, with shorter distances and reduced carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
