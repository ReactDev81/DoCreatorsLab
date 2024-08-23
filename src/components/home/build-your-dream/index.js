'use client'
import DreamSlides from './dream-slides';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slidesItems = [
  {
    id: 1,
    img: '/assets/images/home/dream-slides/drew-taylor.png',
    title: '" Take Our Idea And Turn It into A Solid Business "',
    desc: 'By helping us find the right team member, DoCreatorsLab really did help us take our company idea and turn it into a solid business that has the potential to change the world!',
    name: 'Micke Jordan',
    position: 'DoCreators of AastaPrint',
  },
  {
    id: 2,
    img: '/assets/images/home/dream-slides/drew-taylor.png',
    title: '" Take Our Idea And Turn It into A Solid Business "',
    desc: 'By helping us find the right team member, DoCreatorsLab really did help us take our company idea and turn it into a solid business that has the potential to change the world!',
    name: 'Micke Jordan',
    position: 'DoCreators of AastaPrint',
  },
  {
    id: 3,
    img: '/assets/images/home/dream-slides/drew-taylor.png',
    title: '" Take Our Idea And Turn It into A Solid Business "',
    desc: 'By helping us find the right team member, DoCreatorsLab really did help us take our company idea and turn it into a solid business that has the potential to change the world!',
    name: 'Micke Jordan',
    position: 'DoCreators of AastaPrint',
  },
  {
    id: 4,
    img: '/assets/images/home/dream-slides/drew-taylor.png',
    title: '" Take Our Idea And Turn It into A Solid Business "',
    desc: 'By helping us find the right team member, DoCreatorsLab really did help us take our company idea and turn it into a solid business that has the potential to change the world!',
    name: 'Micke Jordan',
    position: 'DoCreators of AastaPrint',
  },
];

const BuildYourDream = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="relative mx-auto mt-[73px] w-full max-w-[1200px] px-5">
      <div className="absolute left-[-100px] bottom-0 h-[348px] w-full max-w-[846px] rounded-[500px] bg-gradient-to-r from-[#d6715b] via-[#ca6c69] to-[#ad608a] opacity-50 blur-[200px] sm:top-[200px] " />
      <h2 className="text-center text-3xl font-semibold leading-9 text-[#C095B4] md:text-[52px] md:leading-[58px]">
        Build Your Dream
      </h2>
      <div className="relative mt-10 max-w-[1200px] rounded-[10px] backdrop-blur-[blur(300px)] lg:mt-[67px]">
        <img
          className="absolute top-5 right-0 hidden w-10 md:-top-10 md:w-14 lg:right-[34px] lg:top-[55px] lg:block"
          src="/assets/images/home/red-quote.png"
        />
        <div className="dream-slides rounded-[10px] border border-solid border-[#00000026] bg-[#00000014] p-5 pb-0 dark:border-[#FFFFFF26] dark:bg-[#FFFFFF14] lg:p-0">
          <Slider {...settings}>
            {slidesItems.map((item) => {
              return (
                <DreamSlides
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  name={item.name}
                  position={item.position}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BuildYourDream;
