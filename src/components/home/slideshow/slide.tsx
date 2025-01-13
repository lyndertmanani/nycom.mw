import { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-slideshow-image/dist/styles.css';
import { SlideData } from './data'; // Assuming data.js is in the same directory as Hero component

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    margin: '30px',
  };

  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}  onClick={() => setCurrentSlide((currentSlide - 1 + SlideData.length) % SlideData.length)}><ChevronLeft size={50} absoluteStrokeWidth /></button>,
    nextArrow: <button style={{ ...buttonStyle }}  onClick={() => setCurrentSlide((currentSlide + 1) % SlideData.length)}><ChevronRight size={50} absoluteStrokeWidth /></button>
  };

  return (
    <>
    <div className="w-full overflow-hidden h-[565px] xl:h-[635px] text-[#ffffff] bg-cover bg-black relative">
      <Fade {...properties} autoplay={true} duration={3000} arrows={false} onChange={(_, next) => setCurrentSlide(next)}>
        {SlideData.map((event, index) => (
          <div key={index} className={`each-slide flex w-full h-[635px] xl:h-[735px] relative ${index === currentSlide ? '' : 'flex'}`}>
            <div className="text-container absolute top-1/2 lg:left-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="mx-auto max-w-screen-xl sm:text-center lg:text-start bottom-0 left-10 lg:left-0">
                <h1 className="mb-2 text-6xl font-bold leading-none text-center lg:text-start capitalize lg:ml-24 ml-0 md:text-5xl lg:text-5xl" >{event.title}</h1>
                <p className="mb-8 font-normal text-sm lg:text-start text-center leading-1 mx-0 pr-0 lg:pr-32 lg:mx-24" >{event.description}</p>
                {/* You can render additional event details here */}
              </div>
            </div>
            {event.type === 'image' ? (
              <img src={event.media} alt={`Slide ${index + 1}`} className="w-full h-full object-cover object-center absolute flex rounded-none" />
            ) : (
              <video autoPlay loop muted className="w-full h-full object-cover object-center absolute flex rounded-none">
                <source src={event.media} type="video/mp4" />
              </video>
            )}
            {/* <div className="bg-black w-full h-full bg-opacity-20 absolute top-0 left-0 z-0"></div> */}
           <div className="bg-gradient-to-l via-transparent from-transparent to-gray-950 w-full hidden lg:flex h-full absolute top-0 left-0 z-0"></div>
            <div className="bg-gradient-to-l   from-transparent to-gray-950 w-full hidden lg:flex h-full absolute top-0 left-0 z-0 opacity-25"></div>
            <div className="bg-gradient-to-b   from-transparent to-gray-950 w-full hidden lg:flex h-full absolute top-0 left-0 z-0 opacity-25"></div>
            <div className="bg-gradient-to-b via-transparent  from-transparent to-gray-950 w-full   h-full absolute top-0 left-0 z-0"></div>
            <div className="bg-gray-950 w-full h-full absolute top-0 left-0 z-0 opacity-30"></div>
          </div>
        ))}
      </Fade>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 opacity-30 hover:opacity-100 duration-700">
        <button style={buttonStyle} className='hover:text-white  ' onClick={() => setCurrentSlide((currentSlide - 1 + SlideData.length) % SlideData.length)}>
          <ChevronLeft size={50} absoluteStrokeWidth />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 opacity-30 hover:opacity-100 duration-700 ">
        <button style={buttonStyle} className='hover:text-white ' onClick={() => setCurrentSlide((currentSlide + 1) % SlideData.length)}>
          <ChevronRight size={50} absoluteStrokeWidth />
        </button>
      </div>
    </div>
    
      </>
  );
};

export default Hero;


 