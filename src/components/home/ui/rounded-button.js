
const RoundedButton = ({ text }) => {
  return (
    <button
      className="font-inter rounded-[40px] py-3 px-5 text-sm font-bold text-white md:px-[38px] md:py-[21px] md:text-lg md:leading-[21.76px]"
      style={{
        background: 'linear-gradient(265.2deg, #48AAFF 5.21%, #0475DC 43.25%)',
      }}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
