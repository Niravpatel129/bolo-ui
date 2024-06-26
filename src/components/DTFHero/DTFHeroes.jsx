import Image from 'next/image';

export default function Template() {
  return (
    <>
      <div className='bg-[#EBF1F7]'>
        <div className='flex justify-between p-8 gap-28 w-full items-center flex-col md:flex-row'>
          <div className='w-full flex flex-col justify-between items-center'>
            <div className='text-5xl font-bold mb-2'>
              Custom DTF Transfers straight to your door
            </div>
            <div className='text-xl my-8'>
              Print your design on any product, material, or color with incredible durability and
              vibrancy
            </div>
            <div className='flex mt-4 gap-6 w-full'>
              <div className='flex gap-2 justify-center items-center'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                  </svg>
                </div>
                <div className='text-lg text-nowrap'>High Quality</div>
              </div>
              <div className='flex gap-2 justify-center items-center'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                  </svg>
                </div>
                <div className='text-lg text-nowrap'>High Quality</div>
              </div>
              <div className='flex gap-2 justify-center items-center'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                  </svg>
                </div>
                <div className='text-lg text-nowrap'>High Quality</div>
              </div>
            </div>
            <div className='mt-8 w-full flex flex-col gap-4'>
              <div className='w-full text-center bg-[#0176C3] rounded-full py-3 text-white cursor-pointer hover:opacity-85'>
                Button 1
              </div>
              <div className='w-full text-center  rounded-full py-3 text-black cursor-pointer border-[1px] border-[#000000] hover:bg-[#0176C3] hover:text-white'>
                Button 1
              </div>
            </div>
          </div>
          <div className='relative w-full h-[500px]'>
            <Image src='../../bunny.png' alt='' fill className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </>
  );
}
