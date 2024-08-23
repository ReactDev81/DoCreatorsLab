
const SquareButton = ({ text }) => {
  return (
    <button className="rounded-[5px] bg-[#00000014] px-5 py-2.5 text-sm font-light leading-[21.76px] text-black dark:bg-[#FFFFFF14] dark:font-extralight dark:text-white lg:px-[15px] lg:py-3.5 lg:text-lg">
      {text}
    </button>
  );
};

export default SquareButton;
