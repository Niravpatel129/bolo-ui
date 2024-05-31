const Banner = () => {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/bannerimage.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative inset-0 flex flex-col justify-center items-start text-left text-white px-4 sm:px-8 md:px-16 h-full">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-3">We Understand Service, Quality, and Speed Matter Most</p>
        <h1 className="text-lg md:text-2xl lg:text-4xl font-extrabold">An Unrivaled Fleet of 40+ DTF Printers</h1>
      </div>
    </div>
  );
};

export default function Template() {
  return (
    <>
   <Banner/>
      {/* Other components and content */}
  </>
  );
}

