import RoundedButton from '../ui/rounded-button';
import HeroCard from './hero-card';
import TrustedBy from './trusted-by';

const Hero = () => {
  return (
    <>
      <section className="HeroSection bg-none-1 relative z-10 m-auto h-auto max-w-[1298px] px-5 pt-12 sm:pt-[86px] lg:bg-[url('/assets/images/home/new-hero-bg.png')] lg:bg-cover lg:bg-no-repeat lg:dark:bg-[url('/assets/images/home/dark-hero-bg.png')]">
        <div className="hero-title flex flex-col items-center justify-center pt-5 md:pt-24 lg:bg-[url('/assets/images/home/bg-shape-center.png')] lg:bg-[center_top_-128px] lg:bg-no-repeat">
          <div className="h-full w-full max-w-md text-center text-[32px] font-semibold leading-tight text-black dark:text-white md:max-w-[672px] md:text-[52px] md:leading-[58px]">
            The Startup Community
            <span
              style={{
                background:
                  'linear-gradient(90deg, #D6715B 0%, #CA6C69 47.5%, #AD608A 75.5%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {' '}
              Start. Grow. Fund.
            </span>
          </div>
          <div className="text-md font-Inter mt-[26px] mb-5 max-w-[90%] break-words text-center text-lg font-normal text-[#344054] dark:text-white md:mb-[43px] md:max-w-[350px] md:max-w-[561px]">
            DoCreatorsLab is the largest creators community on the Internet.
            Accelerate your business today.
          </div>
          <RoundedButton text={'🚀  Join for free'} />
          <HeroCard />
        </div>
      </section>
      <TrustedBy />
    </>
  );
};

export default Hero;
