'use client';
import { useRef } from 'react';
 
import { TimelineContent } from '@/core/timeline.anim';
import Projects from './project';

function Project_Render() {
  // const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <>
      <section className='sm:grid grid-cols-1 gap-10 h-auto py-10 pt-10 px-4' ref={heroRef}  >
      <TimelineContent animationNum={1} timelineRef={heroRef}>         
          <h5 className="mb-2 text-3xl lg:text-5xl font-bold tracking-tight   lg:px-52  text-center ">Our Project</h5>
          </TimelineContent>
        {/* <div className='space-y-2'>
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
              </div> */}
              {/*  */}
              <TimelineContent animationNum={2} timelineRef={heroRef}>
        < Projects/>
        </TimelineContent>
      </section>
    
    </>
  );
}

export default Project_Render ;
