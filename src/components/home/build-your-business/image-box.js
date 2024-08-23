const ImageBox = ({
  title = 'Default Title',
  description = 'Default Description',
  imageSrc = 'assets/images/home/fire.png',
  customStyles = {},
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  imageClassName = '',
}) => {
  return (
    <div
      className={`mb-3 flex max-w-[317px] flex-col items-center justify-center rounded-[20px] border border-solid border-[#FFFFFF26] py-10 px-4 lg:h-[294px] lg:p-3 ${className}`}
      style={{
        background:
          'linear-gradient(98deg, rgba(214, 113, 91, 0.10) 0%, rgba(202, 108, 105, 0.10) 47%, rgba(173, 96, 138, 0.10) 100%)',
        ...customStyles,
      }}
    >
      <img
        className={`mb-[14px] invert dark:invert-0 ${imageClassName}`}
        src={imageSrc}
        alt={title}
      />
      <h4
        className={`mb-[7px] text-center text-lg font-bold text-black dark:text-white lg:text-2xl ${titleClassName}`}
      >
        {title}
      </h4>
      <p
        className={`text-center text-sm font-light font-light text-[#344054] dark:font-extralight dark:text-white lg:text-lg ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default ImageBox;
