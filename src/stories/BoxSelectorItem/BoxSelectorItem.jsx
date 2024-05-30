const BoxSelectorItem = () => {
  return (
    <div className='border border-gray-300 rounded-lg p-4 flex justify-between items-center max-w-sm mx-auto'>
      <div className='text-2xl font-medium'>
        128<span className='text-xs align-super'>GB²</span>
      </div>
      <div className='text-right text-sm'>
        <div>From $999</div>
        <div>or $41.62/mo.</div>
        <div>for 24 mo. *</div>
      </div>
    </div>
  );
};

export default BoxSelectorItem;
