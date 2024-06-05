import Image from 'next/image';

export default function Template() {
  return (
    <div className="bg-[#EBF1F7] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-24">
        <div className="md:w-1/2 flex flex-col items-start space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Sell on Etsy with print-on-demand
          </h1>
          <p className="text-lg md:text-xl text-gray-700 my-8">
            Create your own designs and sell on one of the most popular creative online marketplaces
          </p>
          <div className="flex flex-wrap gap-4 mt-4 w-full">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-lg">High Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-lg">No Minimums</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-lg">Fast shipping</span>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-6 w-full">
            <button className="bg-[#0176C3] text-white py-3 rounded-full text-center hover:opacity-85 transition duration-200">
              Get Started
            </button>
            
          </div>
        </div>
        <div className="relative w-full md:w-4/12 h-[300px] md:h-[450px] lg:h-[500px]">
          <Image src='../../bunny.png' alt='Custom DTF Transfers' layout='fill' className='object-cover rounded-lg' />
        </div>
      </div>
    </div>
  );
}
