import { RiUser3Line } from 'react-icons/ri';
import { BiBadgeCheck } from 'react-icons/bi';

const NetworkCard = () => {
  return (
    <div className="m-auto mt-7 mb-[60px] w-full max-w-[760px]">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="icon-box max-w-[250px] flex-1">
          <div className="icon">
            <RiUser3Line size={62} color="#D15E5E" className="mx-auto" />
          </div>
          <div className="content mt-4 md:mt-[30px]">
            <h2 className="text-center text-3xl font-semibold text-black dark:text-white lg:text-[64px] lg:leading-[58px]">
              700,000
            </h2>
            <p className="mt-2.5 text-center text-lg font-light capitalize text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-2xl lg:mt-[18px]">
              User worldwide
            </p>
          </div>
        </div>

        <div className="shining-divider my-10 sm:my-0">
          <img src="/assets/images/home/divider.png" className="hidden dark:sm:block" />
          <img src="/assets/images/home/light-divider.png" className='hidden dark:hidden sm:block' />
          <img src="/assets/images/home/border.png" className="hidden dark:sm:hidden dark:block" />
          <img src="/assets/images/home/light-border.png" className="sm:hidden dark:sm:hidden block" />
        </div>

        <div className="icon-box max-w-[180px] flex-1">
          <div className="icon">
            <BiBadgeCheck size={62} color="#D15E5E" className="mx-auto" />
          </div>
          <div className="content mt-4 md:mt-[30px]">
            <h2 className="text-center text-3xl font-semibold text-black dark:text-white lg:text-[64px] lg:leading-[58px]">
              200+
            </h2>
            <p className="mt-2.5 text-center text-lg font-light capitalize text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-2xl lg:mt-[18px]">
              Expert advisors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;
