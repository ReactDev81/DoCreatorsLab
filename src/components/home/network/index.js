import NetworkCard from './network-cards';

const Network = () => {
  return (
    <section className="m-auto w-full max-w-[1270px] px-5">
      <div
        className="map-sec rounded-[26px] p-5 sm:px-[35px] sm:pt-[67px] sm:pb-12"
        style={{
          background:
            'linear-gradient(180deg, rgba(37, 58, 69, 0.78) 0%, rgba(90, 94, 96, 0) 96.83%)',
        }}
      >
        <div className="global-map">
          <img
            src="/assets/images/home/global-map.png"
            className="m-auto"
          />
        </div>
        <div className="content-wrapper m-auto -mt-12 w-full max-w-[670px] text-center sm:mb-12">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6544] sm:text-sm sm:leading-[22px]">
            NETWORK
          </h4>
          <h2
            className="mt-4 text-[26px] font-semibold leading-normal tracking-tight text-[#C095B4] md:text-[52px] md:leading-[58px]"
            style={{
              background:
                'linear-gradient(90deg, #D6715B 0%, #CA6C69 47.5%, #AD608A 75.5%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Connect to an Expansive Global Network
          </h2>
          <p className="m-auto mt-2 max-w-full max-w-sm text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:mt-[26px] md:text-lg md:leading-[21.78px]">
            DoCreatorsLab connects you to creators, advisors, and investors
            across 200+ cities and 6 continents.
          </p>
        </div>
        <div className="shining-border hidden sm:block">
          <img src="/assets/images/home/border.png" className='hidden dark:block' />
          <img src="/assets/images/home/light-border.png" className='block dark:hidden' />
        </div>
      </div>
      <NetworkCard />
    </section>
  );
};

export default Network;
