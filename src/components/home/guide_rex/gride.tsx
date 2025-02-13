'use client';
import { useRef } from 'react';
import Rex from '/assets/img/JCK_7159.jpg';
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
            className='w-full h-[550px]  object-cover rounded-md '
            alt=''
          />
        </TimelineContent>
        <div data-aos="fade-left" className='space-y-2'>
          {' '}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className=' text-2xl lg:text-5xl font-bold tracking-tight pb-6 text-gray-950]'>
              Rex Chaponda
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
            <p className='text-lg leading-[130%] pr-20'>
            As the Executive Director of the National Youth Council of Malawi, I am proud to present the NYCOM Strategic Plan for 2024-2030, a blueprint that aligns with the National Youth Policy and the broader government development agenda, particularly the youth-focused Malawi 2063 Vision. This plan is built on seven key pillars: youth economic empowerment, entrepreneurship, and innovation; youth participation, representation, and inclusion; youth health, gender, and social inclusion; transparent, inclusive, and responsive governance and management; resource mobilization, diversification, and sustainability; affiliate and stakeholder coordination and engagement; and monitoring, evaluation, accountability, and learning (MEAL). Through these strategic focus areas, we are committed to empowering young people, fostering innovation, and ensuring meaningful youth participation in national development. By strengthening partnerships, enhancing governance, and creating sustainable opportunities, we aim to build a future where young people are at the forefront of driving progress and achieving Malawi’s long-term vision.
            </p>
          </TimelineContent>
        </div>
      </section>
    
    </>
  );
}

export default Timeline ;
