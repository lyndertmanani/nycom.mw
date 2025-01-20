'use client';
import img0 from "/assets/img/hero (8).jpg"
import img1 from "/assets/img/agri.jpg"
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from '@/core/progress-carousel';

 
const items = [
  {
    img:img0,
    title: 'YACG',
    desc: 'Youth Agriculture Copoorative Grants',
    sliderName: 'bridge',
  },
  {
    img:img1,
    title: 'YEFFA',
    desc: 'A serene lake reflecting the surrounding mountains and trees, creating a mirror-like surface.',
    sliderName: 'mountains',
    },
  
  {
    img:img0,
    title: 'Autumn',
    desc: 'A picturesque path winding through a dense forest adorned with vibrant autumn foliage.',
    sliderName: 'autumn',
  },
  {
    img:img0,
    title: 'Foggy',
    sliderName: 'foggy',
    desc: 'A stunning foggy view over the foresh, with the sun casting a golden glow across the forest. ',
  },
];
 const Projects=()=> {
  return (
    <>
      <ProgressSlider vertical={false} activeSlider='bridge'>
        <SliderContent>
          {items.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <img
                className='rounded-xl 2xl:h-[500px] h-[650px] object-cover'
                src={item.img}
                width={1900}
                height={1080}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className='absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md'>
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left  p-3 border-r'
              progressBarClass='dark:bg-black bg-white h-full'
            >
              <h2 className='relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2'>
                {item.title}
              </h2>
              <p className='text-sm font-medium  line-clamp-2'>{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </>
  );
}
export default Projects