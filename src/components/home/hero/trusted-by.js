const BrandsLogo = [
  {
    id: 1,
    src: '/assets/images/home/trusted-by/slidebean.png',
  },
  {
    id: 2,
    src: '/assets/images/home/trusted-by/customerly.png',
  },
  {
    id: 3,
    src: '/assets/images/home/trusted-by/hubspot.png',
  },
  {
    id: 4,
    src: '/assets/images/home/trusted-by/undock.png',
  },
  {
    id: 5,
    src: '/assets/images/home/trusted-by/pepperdine.png',
  },
];

const LightBrandsLogo = [
  {
    id: 1,
    src: '/assets/images/home/trusted-by/light-slidebean.png',
  },
  {
    id: 2,
    src: '/assets/images/home/trusted-by/light-customerly.png',
  },
  {
    id: 3,
    src: '/assets/images/home/trusted-by/light-hubspot.png',
  },
  {
    id: 4,
    src: '/assets/images/home/trusted-by/light-undock.png',
  },
  {
    id: 5,
    src: '/assets/images/home/trusted-by/light-pepperdine.png',
  },
];

const TrustedBy = () => {
  return (
    <section className="mx-5 w-[calc(100%-40px)] border border-solid border-[#00000026] bg-[#00000014] py-8 px-5 dark:border-[#FFFFFF26] dark:bg-[#FFFFFF14] lg:mx-0 lg:w-full">
      <div className="m-auto max-w-[1200px]">
        <h4 className="mb-[18px] text-center text-sm font-medium tracking-[0.2em] text-black dark:text-white">
          TRUSTED BY INDUSTRY LEADERS
        </h4>
        <div className="hidden flex-wrap items-center justify-between gap-y-5 gap-x-[2%] dark:flex lg:flex-nowrap lg:gap-x-[75px]">
          {BrandsLogo.map((logo, index) => {
            return (
              <div
                className="logo flex w-36 basis-[48%] sm:w-auto sm:basis-[31.33%] md:flex-1"
                key={index}
              >
                <img src={logo.src} alt="Logo" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-y-5 gap-x-[2%] dark:hidden lg:flex-nowrap lg:gap-x-[75px]">
          {LightBrandsLogo.map((logo, index) => {
            return (
              <div
                className="logo flex w-36 basis-[48%] sm:w-auto sm:basis-[31.33%] md:flex-1"
                key={index}
              >
                <img src={logo.src} alt="Logo" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
