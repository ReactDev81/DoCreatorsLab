import SquareButton from './ui/square-button';

const CommunityBox = [
  {
    id: 1,
    icon: '/assets/images/home/community-start.png',
    title: 'Start your business',
    desc: 'Got the next best idea in business? Get access to everything you need to take on the world with your StartUp',
    text_color: '#9C697B',
    bg_class:
      'dark:bg-[linear-gradient(180deg,_#552838_0%,_rgba(65,_31,_43,_0)_64.87%)] bg-[linear-gradient(180deg,_#D6A9B9_0%,_rgba(65,_31,_43,_0)_64.87%)]',
  },
  {
    id: 2,
    icon: '/assets/images/home/community-grow.png',
    title: 'Grow your business',
    desc: 'Ready to grow your market? Get exclusive access to professionals and leaders to get you there!',
    text_color: '#A9756D',
    bg_class:
      'dark:bg-[linear-gradient(180deg,_rgba(156,_83,_67,_0.8)_0%,_rgba(173,_96,_138,_0)_78.5%)] bg-[linear-gradient(180deg,_rgba(185,_108,_91,_0.8)_0%,_rgba(173,_96,_138,_0)_78.5%)]',
  },
  {
    id: 3,
    icon: '/assets/images/home/community-fund.png',
    title: 'Fund your business',
    desc: 'Is your business seeking capital? Access an exclusive network of investors and prepare your business to get Funded!',
    text_color: '#33A0FF',
    bg_class:
      'dark:bg-[linear-gradient(180deg,_#2D79BC_0%,_rgba(31,_96,_153,_0)_76%)] bg-[linear-gradient(180deg,_#418FD2_0%,_rgba(31,_96,_153,_0)_76%)]',
  },
];

const Community = () => {
  return (
    <section className="our-community w-full xs:px-5">
      <div className="xs m-auto mt-11 w-full max-w-[1308px] rounded-[26px] bg-[linear-gradient(0deg,_#dfced9_0%,_rgba(51,_33,_45,_0)_100%)] pt-16 text-center dark:bg-[linear-gradient(0deg,_#33212D_0%,_rgba(51,_33,_45,_0)_100%)] xs:px-5 xs:pb-8 lg:px-14 lg:pb-32">
        <h4 className="text-sm font-medium uppercase leading-[22px] tracking-[0.2em] text-black dark:text-white">
          Our Community
        </h4>
        <h2 className="mt-4 font-semibold text-[#C095B4] xs:text-[30px] xs:leading-[34px] lg:text-[52px] lg:leading-[58px]">
          With you every step of the way
        </h2>
        <div className="mt-14 flex gap-x-4 xs:flex-col md:flex-row lg:gap-x-[25px]">
          {CommunityBox.map((box, index) => {
            return (
              <div
                className={`flex-1 rounded-[10px] xs:px-[10px] xs:pt-[25px] xs:pb-[20px] lg:px-[21px] lg:pt-[71px] lg:pb-[44px] ${box.bg_class}`}
                key={index}
              >
                <div className="icon">
                  <img
                    src={box.icon}
                    className="m-auto invert dark:invert-0 xs:h-[60px] lg:h-[100px]"
                  />
                </div>
                <div className="mb-9 mt-2.5">
                  <h2
                    style={{ color: box.text_color }}
                    className="mb-2.5 text-xl font-semibold lg:mb-4 lg:text-[28px] lg:leading-[42px]"
                  >
                    {box.title}
                  </h2>
                  <p className="mx-auto mb-4 max-w-[400px] text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white lg:text-lg lg:leading-[21.78px]">
                    {box.desc}
                  </p>
                </div>
                <SquareButton text="Learn more" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
