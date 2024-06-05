import { useState } from 'react';
import Image from 'next/image';
import productImage from '../../../public/product.png';


const countries = [
  { name: 'Canada', flag: '🇨🇦', productCost: 17.12, shippingCost: 8.14 },
  { name: 'USA', flag: '🇺🇸', productCost: 16.00, shippingCost: 6.50 },
  { name: 'UK', flag: '🇬🇧', productCost: 15.50, shippingCost: 7.00 },
  { name: 'Australia', flag: '🇦🇺', productCost: 18.00, shippingCost: 8.50 },
  // Add more countries as needed
];

export default function EarningsCalculator() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [sellingPrice, setSellingPrice] = useState(50.52);
  const [monthlySales, setMonthlySales] = useState(30);

  const productShippingCost = selectedCountry.productCost + selectedCountry.shippingCost;
  const profitPerMonth = (sellingPrice - productShippingCost) * monthlySales;
  const profitMargin = ((sellingPrice - productShippingCost) / sellingPrice) * 100;

  const handleCountryChange = (event) => {
    const country = countries.find((c) => c.name === event.target.value);
    setSelectedCountry(country);
  };

  const handleSellingPriceChange = (event) => {
    setSellingPrice(parseFloat(event.target.value));
  };

  const handleMonthlySalesChange = (event) => {
    setMonthlySales(parseInt(event.target.value, 10));
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>
          Potential earnings with your print on demand business
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex flex-col space-y-4">
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="T-shirt">👕</span> <span className="ml-2">T-shirt</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Hoodie">👚</span> <span className="ml-2">Hoodie</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Framed Poster">🖼️</span> <span className="ml-2">Framed Poster</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Canvas">🖼️</span> <span className="ml-2">Canvas</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Poster">📜</span> <span className="ml-2">Poster</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Mug">☕</span> <span className="ml-2">Mug</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Phone case">📱</span> <span className="ml-2">Phone case</span>
              </button>
              <button className="bg-white py-2 px-4 rounded-lg text-left text-sm md:text-base flex items-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <span role="img" aria-label="Tote Bag">👜</span> <span className="ml-2">Tote Bag</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/4 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
              <h3 className="text-xl md:text-xl font-semibold mb-4 text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                Premium Unisex Crewneck T-shirt
              </h3>
              <div className="bg-white h-96 w-80 flex items-center justify-center">
                <Image src={productImage} alt="Product" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-white p-4 rounded-lg space-y-4 ">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>Shipping Destination</label>
                <select
                  className="border bg-white py-2 px-4 rounded-lg text-sm md:text-base"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
                  onChange={handleCountryChange}
                  value={selectedCountry.name}
                >
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  You pay for product + shipping
                </label>
                <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  {productShippingCost.toFixed(2)} CAD
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                <div>Product costs exclude taxes</div>
                <div>Product: {selectedCountry.productCost} CAD</div>
              </div>
              <div className="text-xs text-gray-500 mb-4 text-right" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  Shipping: {selectedCountry.shippingCost} CAD
                </div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  Your selling price
                </label>
                <input
                  type="number"
                  className="border bg-white py-2 px-4 rounded-lg text-sm md:text-base w-24"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
                  value={sellingPrice}
                  onChange={handleSellingPriceChange}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  Your monthly sales
                </label>
                <input
                  type="number"
                  className="border bg-white py-2 px-4 rounded-lg text-sm md:text-base w-24"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
                  value={monthlySales}
                  onChange={handleMonthlySalesChange}
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  Your profits per month
                </label>
                <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  {profitPerMonth.toFixed(2)} CAD
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  Profit margin
                </label>
                <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}>
                  {profitMargin.toFixed(2)}%
                </div>
              </div>
              <button className="bg-black text-white py-2 px-4 rounded-full w-full text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>
                Start selling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
