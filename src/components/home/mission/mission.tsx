'use client';
import { useRef } from 'react';
import { TimelineContent } from '@/core/timeline.anim';


const Mission = () => {
    // const aboutRef = useRef(null);
    const heroRef = useRef(null);
    return (
        <>
            <section ref={heroRef} >
            <TimelineContent animationNum={0} timelineRef={heroRef}>
                    <h5 className="mb-2 text-3xl lg:text-5xl font-bold tracking-tight   lg:px-52  text-center ">Guiding Youth Development with Innovation and Purpose</h5>
                    </TimelineContent>
                <div  className='grid lg:grid-cols-3 grid-flow-col-1 py-5 items-center justify-center'>

                    {/* vision */}
                    <TimelineContent animationNum={1} timelineRef={heroRef}>
                    <div   className="block max-w-sm p-6 bg-white border-none  text-center rounded-lg ">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight    ">Vision</h5>
                        <p className="font-normal text-gray-700 text-md">A Malawi where young people are healthy, wealthy, self-reliant and drive the socio-economic growth and development of their country</p>
                        </div>
                    </TimelineContent>
                    
                    {/* mission */}
                    <TimelineContent animationNum={2} timelineRef={heroRef}>
                    <div   className="block max-w-sm p-6 bg-white border-none text-center  rounded-lg ">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight    ">Mission</h5>
                        <p className="font-normal text-gray-700 text-md">To coordinate, regulate, promote and advocate for youth development in Malawi and empower all young people to effectively and inclusively participate in economic, civic, governance and political development of the country and their communities</p>
                        </div>
                    </TimelineContent>
                    
                    {/* impact */}
                    <TimelineContent animationNum={3} timelineRef={heroRef}>
                    <div   className="block max-w-sm p-6 bg-white border-none text-center  rounded-lg ">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight    "> Impact</h5>
                        <p className="font-normal text-gray-700 text-md">Improved socio-economic and political outcomes of youth development in Malawi through increased participation in national development</p>
                        </div>
                        </TimelineContent>
                </div>
                </section>
        </>
    )
}
export default Mission