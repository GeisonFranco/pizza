

const CrustSelection = ({ crust, setCrust}) => {
  return (
    <div className='flex justify-center items-center lg:justify-start'>
      {/* crust  */}
      <div className='flex gap-x-12 mb-8 font-medium'>
        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input
          className='appearance-none w-4 h-4 border border-[#b9b6b0] rounded-full
          checked:bg-gradient-to-r checked:from-[#ff0202] checked:to-[#f91010]
          checked:border-[#ff0b0b] cursor-pointer'
          type='radio'
          name='crust'
          value='traditional'
          checked={crust === 'traditional'}
          onChange={(e) => setCrust(e.target.value)} />
          Tradicional
        </label>

        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input 
          className='appearance-none w-4 h-4 border border-[#b9b6b0] rounded-full
          checked:bg-gradient-to-r checked:from-[#ff0202] checked:to-[#f91010]
          checked:border-[#ff0b0b] cursor-pointer'
          type='radio'
          name='crust'
          value='thin'
          checked={crust === 'thin'}
          onChange={(e) => setCrust(e.target.value)} />
          Massa fina
        </label>

      
      </div>
    </div>
  )
};

export default CrustSelection;
