'use client';
import { useRef } from 'react';
import Rex from '/assets/img/holder (1).png';
import { TimelineContent } from '@/core/timeline.anim';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Timeline = () => {
  AOS.init();
  // const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <>
      <section
        className='sm:grid grid-cols-2 gap-10 h-auto py-10 pt-10 px-4'
        ref={heroRef}
      >
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <img
            data-aos="fade-right"
            src={Rex}
            className='w-full h-96  object-cover rounded-md '
            alt=''
          />
        </TimelineContent>
        <div data-aos="fade-left" className='space-y-2'>
          {' '}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className=' text-2xl lg:text-5xl font-bold tracking-tight text-gray-950]'>
              Why you need to start it?
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className='text-xl leading-[110%]'>
              There's no valid reason, I just need more star in my repo, please
              do it guys 
            </p>
          </TimelineContent>
        </div>
      </section>
    
    </>
  );
}

export default Timeline ;
