
const DreamSlides = ({ img, desc, title, name, position }) => {
  return (
    <div className="slide-item flex flex-wrap items-center md:flex-nowrap">
      <div className="slide-img pb-5 md:pb-0">
        <img
          src={img}
          className="h-24 w-24 rounded-full object-contain md:h-auto md:w-auto md:rounded-none"
        />
      </div>
      <div className="slide-content w-full max-w-6xl pb-5 pb-12 md:pl-9 lg:max-w-[582px] lg:pb-0">
        <h2 className="mb-3.5 max-w-[506px] text-[26px] font-bold text-black dark:text-white lg:text-[42px]">
          {title}
        </h2>
        <img src="/assets/images/home/dream-divider.png" className="[&&]:hidden [&&]:dark:block" />
        <img src="/assets/images/home/light-dream-divider.png" className="[&&]:block [&&]:dark:hidden" />
        <p className="mt-3.5 max-w-md text-sm font-light leading-[21.78px] text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-lg lg:max-w-full">
          {desc}
        </p>
        <div className="name-position mt-5 sm:mt-[38px]">
          <h3 className="text-left text-base text-black dark:text-white sm:text-xl sm:leading-[35.12px]">
            {name}
          </h3>
          <p className="text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white sm:text-lg sm:leading-[21.78px]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DreamSlides;
