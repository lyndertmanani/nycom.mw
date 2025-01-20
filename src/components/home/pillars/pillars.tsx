'use client';
import { useRef } from 'react';
import { TimelineContent } from '@/core/timeline.anim';
 

const Pillars = () => {
    // const aboutRef = useRef(null);
    const heroRef = useRef(null);
  return (
    <>
      <section className="bg-[url('/wing.xpng')] text-black  bg-opacity-20 lg:py-20 p-10 lg:px-24 relative">
      <div className= "bg-white w-full h-full absolute top-0 left-0 z-0"></div>
        {/* <div className="bg-gradient-to-t from-transparent to-white w-full h-full absolute top-0 left-0 z-0"></div> */}
        <div className="  tracking-tighter  relative">
      <h1 className='mb-2 text-3xl lg:text-5xl font-bold tracking-tight   lg:px-52  text-center'>The National Youth Council<br/> Strategic Plan Pillar </h1>
        <ul ref={heroRef} className="timeline h-auto py-10 timeline-vertical ">
        <li>
      
          <div className="timeline-start timeline-box bg-transparent  ">
          <TimelineContent animationNum={0} timelineRef={heroRef}>
              Youth economic empowerment,<br /> entrepreneurship, and
              innovations
              </TimelineContent>
          </div>
           
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 ">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
            </div>
            
    <hr  className="bg-black" />
  </li>
  <li>
    <hr  className="bg-black"  />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
          <div className="timeline-end timeline-box bg-transparent  ">
          <TimelineContent animationNum={1} timelineRef={heroRef}>
              Youth participation,<br /> leadership, and inclusion
              </TimelineContent>
          </div>
    <hr  className="bg-black"  />
  </li>
  <li>
    <hr  className="bg-black"  />
          <div className="timeline-start timeline-box bg-transparent  ">
          <TimelineContent animationNum={2} timelineRef={heroRef}>
              Youth health, <br />nutrition, and environment
              </TimelineContent>
          </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr  className="bg-black"  />
  </li>
  <li>
    <hr  className="bg-black"  />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
          <div className="timeline-end timeline-box  bg-transparent  ">
          <TimelineContent animationNum={3} timelineRef={heroRef}>
              Stakeholder engagement and coordination
              </TimelineContent>
          </div>
    <hr  className="bg-black"  />
  </li>
  <li>
    <hr  className="bg-black"  />
          <div className="timeline-start timeline-box bg-transparent  ">
          <TimelineContent animationNum={4} timelineRef={heroRef}>
            Effective, inclusive, responsive <br />governance, and
              management
              </TimelineContent>
          </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
          </div>
          <hr  className="bg-black"  />
  </li>

  <li>
    <hr  className="bg-black"  />
          <div className="timeline-end timeline-box bg-transparent  ">   <TimelineContent animationNum={5} timelineRef={heroRef}>
            Resource mobilization, <br />diversification, and sustainability
            </TimelineContent>
          </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
          </div>
          <hr  className="bg-black"  />
        </li>
        <li>
    <hr  className="bg-black"  />
          <div className="timeline-start timeline-box bg-transparent  ">
          <TimelineContent animationNum={5} timelineRef={heroRef}>
            Robust and vibrant monitoring,<br />evaluation, accountability,
              and learning
              </TimelineContent>
          </div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
          </div>
          
  </li>
          </ul>
          </div>
        </section>
      </>
    )
}
export default Pillars