import React from 'react';

const Display = () => {
  return (
    <div className='grid grid-cols-3 items-center'>
      <div className='col-span-2'>
        <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className='text-xl space-y-1'>
        <h1 className='text-3xl font-bold'>Hi, I am john.</h1>
        <p className='text-pink-700 italic '>I am full stack web developer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nihil velit culpa corporis consectetur vel temporibus ipsa fugiat quidem possimus omnis, hic aspernatur ut dignissimos quam, molestias placeat ducimus obcaecati.</p>
      </div>



    </div>
  );
}

export default Display;
