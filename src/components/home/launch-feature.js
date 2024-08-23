import RoundedButton from './ui/rounded-button';

const LaunchFeature = () => {
  return (
    <section>
      <div className="flex flex-col items-center px-5 lg:flex-row lg:px-0">
        <div className="img-col lg:basis-[52%]">
          <img
            src="/assets/images/home/launch.png"
            className="w-full pb-11 lg:pt-[35px] lg:pb-[70px] lg:pr-[34px]"
          />
        </div>
        <div className="content-col pb-12 text-center sm:pr-5 sm:pl-5 lg:basis-[48%] lg:pl-20 lg:pb-0 lg:text-left">
          <h2 className="max-w-full text-[26px] font-semibold text-black dark:text-white md:text-5xl md:leading-[58px] lg:max-w-[429px]">
            Stay{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, #D6715B 0%, #CA6C69 47.5%, #AD608A 75.5%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Accountable With Launch!
            </span>
          </h2>
          <p className="my-2.5 mx-auto mb-5 max-w-[90%] text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:my-5 md:text-lg lg:mx-0 lg:max-w-[395px]">
            From advisors, investors, mentors & creators, DoCreatorsLab
            provides you with all the means necessary to find the perfect fit
            for your startup.
          </p>
          <RoundedButton text="🚀  Join for free" />
        </div>
      </div>
    </section>
  );
};

export default LaunchFeature;
