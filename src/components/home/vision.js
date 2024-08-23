const Vision = () => {
  return (
    <section className="vision relative w-full xs:px-5">
      <div className="relative z-10 flex w-full flex-col items-center justify-center pt-[63px] pb-[74px] text-center lg:text-left">
        <h3 className="text-sm font-medium uppercase leading-snug tracking-[2.80px] text-[#33a0ff]">
          Vision
        </h3>
        <h2
          className="mb-[14px] w-full max-w-[671px] pt-[23px] text-center text-[30px] font-semibold text-[#48a9ff] lg:text-[52px] lg:leading-[58px]"
          style={{
            background:
              'linear-gradient(90deg, rgba(72, 170, 255, 1), rgba(128, 195, 255, 1), rgba(4, 117, 220, 1))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Building The World’s Next Great Companies
        </h2>
        <p className="w-[90%] max-w-[649px] text-center text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:w-full md:text-lg">
          DoCreatorsLab connects you to creators, advisors, and investors
          across 200+ cities and 6 continents.
        </p>

        <div className="relative flex w-full max-w-[1200px] flex-col justify-around gap-6 pt-12 md:pt-[100px] lg:flex-row">
          <div className="relative w-full">
            <img
              className="relative z-10 mx-auto w-full xs:max-w-[75%] lg:mx-0 lg:max-w-[526px]"
              src="/assets/images/home/zee-work.png"
              alt=""
            />
            <div className="absolute left-[-20px] bottom-0 top-0 h-[345px] w-[50%] rounded-[500px] bg-gradient-to-l from-[#b80775] to-[#030102] opacity-60 blur-[50px] dark:opacity-100 md:w-[503px] lg:left-[-200px] lg:bottom-[-15px]" />
            <div className="absolute left-[45%] bottom-0 top-0 h-[298px] w-[50%] rounded-[500px] bg-gradient-to-r from-[#d6715b] via-[#ca6c69] to-[#ad608a] blur-[50px] md:bottom-[-15px] md:top-auto md:w-[298px] lg:left-[255px]" />
          </div>
          <div className="relative z-10 mt-5 mt-5 flex w-full flex-col justify-between sm:mt-10 lg:mt-0">
            <h3 className="z-10 mb-2 w-full max-w-full text-[26px] font-semibold text-black dark:text-white md:mb-4 md:leading-[34px] lg:max-w-[498px] lg:text-[42px] lg:leading-[58px]">
              Shape <br className="xs:hidden lg:block" />
              Your Future
            </h3>
            <p className="z-10 w-full max-w-full text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-lg md:leading-[31px] lg:max-w-[454px]">
              DoCreatorsLab connects you to creators, advisors, and
              investors across 200+ cities and 6 continents. DoCreatorsLab
              connects you to creators, advisors, and investors across 200+
              cities and 6 continents.
            </p>
            <div className="xs-left-0 absolute w-full rounded-[500px] bg-gradient-to-r from-[#d6715b] via-[#ca6c69] to-[#ad608a] opacity-25 blur-[50px] xs:bottom-0 xs:top-0 md:h-full lg:left-[-50px] lg:bottom-[-15px] lg:top-auto lg:h-[298px] lg:max-w-[586px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
