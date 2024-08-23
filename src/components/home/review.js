const Review = () => {
  return (
    <section className="review-sec w-full xs:px-5">
      <div className="m-auto w-full max-w-[840px] pt-9 pb-14 text-center md:pt-[74px] md:pb-[100px]">
        <div className="quote-row flex items-center gap-x-3.5">
          <div className="shining-border flex-1">
            <img src="/assets/images/home/border-left.png" className="hidden dark:block" />
            <img src="/assets/images/home/light-border-left.png" className="block dark:hidden" />
          </div>
          <div className="lg:text-8xl mt-5 mr-6 font-['Inconsolata'] text-6xl font-semibold leading-[70px] text-black dark:text-white lg:mr-2.5 lg:leading-[100.7px]">
            “”
          </div>
          <div className="shining-border flex-1">
            <img src="/assets/images/home/border-right.png" className="hidden dark:block" />
            <img src="/assets/images/home/light-border-right.png" className="block dark:hidden" />
          </div>
        </div>
        <h2 className="text-[26px] font-bold text-[#344054] dark:text-white md:mt-5 md:text-4xl md:leading-[54px]">
          " Take Our Idea And Turn It into A Solid Business "
        </h2>
        <p className="m-auto mt-2.5 max-w-[90%] text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:mt-[36px] md:max-w-[734px] md:text-xl md:leading-6">
          By helping us find the right team member, DoCreatorsLab really did
          help us take our company idea and turn it into a solid business that
          has the potential to change the world!
        </p>
        <div className="mt-[36px] flex justify-center gap-x-4">
          <div className="avatar">
            <img
              src="/assets/images/home/micke-jodan.png"
              className="h-12 w-12 md:h-auto md:w-auto"
              alt="Micke Jodan"
            />
          </div>
          <div className="info">
            <h3 className="text-left text-base text-[#344054] dark:text-white md:text-xl md:leading-[35.12px]">
              Micke Jodan
            </h3>
            <p className="text-sm font-medium text-[#A86792] dark:opacity-75 md:text-lg md:leading-[21.78px]">
              DoCreators of AastaPrint
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
