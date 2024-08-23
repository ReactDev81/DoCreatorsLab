import RoundedButton from '../ui/rounded-button';
import ImageBox from './image-box';

const BuildYourBusiness = () => {
  return (
    <section className="build-your-business px-5">
      <div className="m-auto w-full max-w-[1270px] origin-top-left rounded-[26px] bg-[linear-gradient(to_top,_rgba(206,_151,_170,_1)_0%,_rgba(65,_31,_43,_0)_70%)] pt-10 pb-5 dark:bg-[linear-gradient(to_top,_rgba(103,_49,_68,_1)_0%,_rgba(65,_31,_43,_0)_70%)] sm:py-[63px]">
        <div className="flex flex-col items-center 2lg:flex-row">
          <div className="w-full pb-10 text-center 2lg:w-2/5 2lg:p-[68px] 2lg:text-left">
            <h2 className="w-full text-[26px] font-semibold text-[#a86761] md:text-[52px] md:leading-[58px] 2lg:w-[429px]">
              Building Your Dream Business
            </h2>
            <p className="mx-auto w-[90%] pt-2.5 pb-5 text-sm font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:max-w-3xl md:py-[17px] md:text-lg 2lg:m-0 2lg:w-[395px]">
              From advisors, investors, mentors & creators, DoCreatorsLab
              provides you with all the means necessary to find the perfect fit
              for your startup.
            </p>
            <RoundedButton text="🚀 Join for free" />
          </div>
          <div className="w-full px-5 lg:pr-7 2lg:w-3/5">
            <div className="flex flex-col justify-center gap-2 sm:flex-row 2lg:justify-end">
              <div className="flex flex-col flex-wrap gap-2 self-center sm:self-auto sm:p-2">
                <ImageBox
                  customStyles={{
                    background:
                      'linear-gradient(98deg, rgba(214, 113, 91, 0.10) 0%, rgba(202, 108, 105, 0.10) 47%, rgba(173, 96, 138, 0.10) 100%)',
                  }}
                  title="Freemium"
                  imageSrc="assets/images/home/fire.png"
                  description="Connect with Creators Worldwide"
                  descriptionClassName="lg:max-w-[212px] w-full"
                />

                <ImageBox
                  customStyles={{
                    background:
                      'linear-gradient(226deg, rgba(4, 79, 172, 0.06) 0%, rgba(8, 23, 46, 0.04) 100%)',
                  }}
                  title="Launch"
                  imageSrc="assets/images/home/rocket.png"
                  description="Build your business with experts and exclusive resources"
                  descriptionClassName="lg:max-w-[274px] w-full"
                />
              </div>

              <div className="flex flex-col flex-wrap gap-2 self-center sm:self-auto sm:p-2 sm:pt-[40px]">
                <ImageBox
                  customStyles={{
                    background:
                      'linear-gradient(226deg, rgba(48, 32, 43, 0) 2%, rgba(129, 35, 62, 0.25) 100%)',
                  }}
                  title="Premium"
                  imageSrc="assets/images/home/shield.png"
                  description="Unlimited messaging and connections"
                  descriptionClassName="lg:max-w-[210px] w-full"
                />
                <ImageBox
                  customStyles={{
                    background:
                      'linear-gradient(180deg, rgba(144, 72, 56, 0.50) 0%, rgba(48, 32, 43, 0) 100%)',
                  }}
                  title="Advisors"
                  imageSrc="assets/images/home/headphones.png"
                  description="Connect with experts to take your business to the next level and get funded"
                  descriptionClassName="lg:max-w-[269px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourBusiness;
