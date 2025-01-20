
import Hero from '../components/home/slideshow/slide';
import { NavLink } from "react-router-dom";
import { Divider } from "@nextui-org/react";
import Mission from '@/components/home/mission/mission';
import Pillars from '@/components/home/pillars/pillars';
import Timeline from '@/components/home/guide/gride';
// import TextMarquee from '@/components/home/textscroll/text.marquee';
import Project_Render from '@/components/home/project/render';


const Home = () => {
  
    return (
        <>
            
            <Hero />
            {/* NavLinks */}
            <section  className="w-full   bg-nycom-blue lg:bg-white sm:px-10 md:px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 gap-y-5 mx-auto max-w-7xl">
                <NavLink to="" className="border lg:text-center  lg:text-black w-full text-white lg:border-r-nycom-blue lg:border-white border-transparent hover:bg-purple-600 lg:hover:bg-white duration-700  rounded-none py-[5px] px-4 font-medium mx-auto">
                    Sponsor A Youth Today
                </NavLink>
                <NavLink to="" className="border lg:text-center   lg:text-black w-full text-white lg:border-r-nycom-blue lg:border-white border-transparent hover:bg-purple-600 lg:hover:bg-white duration-700  rounded-none py-[5px] px-4 font-medium mx-auto">
                    Strategic Plan
                </NavLink>
                <NavLink to="" className="border lg:text-center  lg:text-black w-full text-white   lg:border-white border-transparent hover:bg-purple-600 lg:hover:bg-white duration-700  rounded-none py-[5px] px-4 font-medium mx-auto">
                    Partnerships
                </NavLink>
            </section>
            <div className="px-10"><Divider className="px-20 " /></div>
            <section className=" px-6 lg:px-24 py-10" >
                < Mission />
                < Project_Render/>
                <Timeline />
            </section>
            
            {/* text scroll */}
            {/* <TextMarquee /> */}
           
            <Pillars/>
            <section className=" px-6 lg:px-24 py-0" >
            
                </section>
        </>
    )
}
export default Home