import React from 'react';

// import icons
import PhoneIcon from '../assets/img/phone.png';

const Program = () => {
  return (
    <div>
      <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
        <img
          className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
          src={PhoneIcon}
          alt=''
        />
        <div className='lg:text-[23px] text-blue font-extrabold'>
          0722222222
        </div>
      </div>
      <div className='text-sm'>
        <div className='hidden lg:flex'>
          Opening Hours: Mon - Fri: 10am - 6pm
        </div>
        <div className='lg:hidden text-right'>Sat - Sun: 10am - 4pm</div>
      </div>
    </div>
  );
};

export default Program;