const HeroCard = () => {
  const heroCardData = [
    {
      id: 1,
      icon: '/assets/images/home/handshake.png',
      title: 'Find a DoCreators',
      desc: 'Find your perfect partner based on interests, skills and location.',
    },
    {
      id: 2,
      icon: '/assets/images/home/bulb.png',
      title: 'Get the Right Advice',
      desc: 'Get Exclusive Access to industry leaders to accelerate your growth',
    },
    {
      id: 3,
      icon: '/assets/images/home/dollar.png',
      title: 'Get Funded',
      desc: 'Prepare and perfect your pitch to get your business funded today!',
    },
  ];

  return (
    <section className="m-auto mt-[73px] mb-[31px] w-full max-w-[1023px] rounded-[10px] border border-solid border-[#00000026] bg-[#00000014] px-5 py-[42px] px-8 dark:border-[#FFFFFF26] dark:bg-[#FFFFFF14] lg:pb-[60px] lg:pt-[47px]">
      <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-[46px]">
        {heroCardData.map((card, index) => {
          return (
            <div
              className="basis-full rounded-[10px] text-center md:basis-4/12"
              key={index}
            >
              <div className="icon">
                <img
                  src={card.icon}
                  alt="Icon"
                  className="mx-auto w-auto invert dark:invert-0"
                />
              </div>
              <div className="content">
                <h2 className="mt-5 mb-2 text-lg font-semibold leading-9 text-black dark:text-white lg:mt-7 lg:mb-3.5 lg:text-2xl">
                  {card.title}
                </h2>
                <p className="text-sm font-light leading-[19.36px] text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white lg:text-base">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroCard;
