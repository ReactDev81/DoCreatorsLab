const Founder = () => {
  return (
    <section className="founder relative relative w-full xs:px-5">
      <div className="absolute top-[20%] left-0 h-[348px] w-full max-w-[846px] rounded-[500px] bg-gradient-to-l from-[#48a9ff] to-[#0375db] opacity-50 blur-[200px]" />
      <div className="m-auto w-full max-w-[1188px] text-center xs:pt-[10px] xs:pb-[10px] md:pt-[74px] md:pb-[80px]">
        <div
          className="relative flex justify-center rounded-[10px] border border-solid border-[#00000026] bg-[#00000014] py-8 px-5 dark:border-[#FFFFFF26] dark:bg-[#FFFFFF14] xs:flex-wrap sm:px-5 sm:pb-[60px] sm:pt-[52px]"
          // style={{
          //   background:
          //     'linear-gradient(270deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.08) 100%)',
          // }}
        >
          <img
            className="right-5 h-7 w-8 xs:relative xs:top-[0px] md:absolute md:top-[53px] lg:right-[60px] lg:h-[45px] lg:w-full lg:max-w-[58.33px]"
            src="assets/images/home/quotes.png"
            alt=""
          />
          <div className="inline-flex flex-col items-center justify-center gap-2.5 md:gap-[19px]">
            <h2 className="mt-5 w-full max-w-[684px] text-center text-center font-semibold text-black dark:text-white xs:text-[26px] md:mt-0 lg:text-[42px]">
              " Found a Community of Passionate Creators "
            </h2>
            <div className="mx-auto max-w-[754px] self-stretch text-center text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-xl">
              In DoCreatorsLab I have found a community of passionate creators
              and advisors who help each other by sharing their experiences with
              direct feedback that allows a founder to grow and develop their
              company to its potential. Its been my favorite group to network
              with like-minded professionals.
            </div>
            <div className="mt-5 inline-flex items-center justify-start gap-4 md:mt-0 md:gap-4">
              <img
                className="h-12 w-12 rounded-[500px] md:h-auto md:w-auto"
                src="assets/images/home/linda-kattar.png"
                alt="Linda Kattar"
              />
              <div className="inline-flex flex-col items-start justify-start">
                <h3 className="self-stretch text-left text-base font-normal text-black dark:text-white md:text-xl">
                  Linda Kattar
                </h3>
                <p className="self-stretch text-left text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-lg">
                  CEO, Miggit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
