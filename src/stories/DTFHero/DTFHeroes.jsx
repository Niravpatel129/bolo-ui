export default function Template() {
  return (
    <div className='bg-[#EBF1F7]'>
      <div className='flex justify-between p-8 gap-28 w-full items-center flex-col md:flex-row'>
        <div className='w-full flex flex-col justify-between items-center max-w-[600px]'>
          <div className='text-4xl font-bold mb-2'>Custom DTF Transfers straight to your door</div>
          <div className='text-md my-8'>
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
              <div className='text-sm text-nowrap'>High Quality</div>
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
              <div className='text-sm text-nowrap'>High Quality</div>
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
              <div className='text-sm text-nowrap'>High Quality</div>
            </div>
          </div>
          <div className='mt-8 w-full flex flex-col gap-4'>
            <div className='w-full text-center bg-[#0176C3] rounded-full py-3 text-white cursor-pointer'>
              Button 1
            </div>
            <div className='w-full text-center bg-[#FFFFFF] rounded-full py-3 text-black cursor-pointer border-[1px] border-[#000000]'>
              Button 1
            </div>
          </div>
        </div>
        <div className='max-w-[600px]'>
          <img
            src='https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
            alt=''
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
}
