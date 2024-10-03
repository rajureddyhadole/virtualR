import React from 'react';
import { testimonials } from '../constants';

const Testimonials = () => {
  return (
    <div className='mt-10 tracking-wide'>
      <h2 className='my-10 text-3xl text-center sm:text-5xl lg:text-6xl lg:my-20'>What people are saying</h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-full px-4 py-2 sm:w-1/2 lg:w-1/3'>
            <div className='p-6 font-light border rounded-md text-neutral-500 bg-neutral text-md border-neutral-800'>
              <p>{testimonial.text}</p>
            </div>
            <div className='flex items-center mt-8'>
              <img className='w-12 h-12 mr-6 border rounded-full border-neutral-300 ' src={testimonial.image} alt={testimonial.user} />
              <div>
                <h6 className='text-neutral-400'>{testimonial.user}</h6>
                <span className='text-sm italic font-normal text-neutral-600'>{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials