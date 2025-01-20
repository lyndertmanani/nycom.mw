 
import ScrollBaseAnimation from '@/core/text-marquee';

function TextMarquee() {
  return (
    <>
      <div className='h-auto py-10 grid place-content-center'>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] py-8 leading-[90%]'
        >
         Wa Chi nyamata otsogola
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Share it if you like it
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default  TextMarquee;
