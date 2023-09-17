export const LeftSection: React.FC = () => {
  return (
    <div role="presentation">
      <div className="absolute translate-y-[-30%] left-[10%]">
        <div className="w-400 flow-arm">
          <img
            src={'/images/arm_and_sign.png'}
            alt=""
            className="w-full h-auto opacity-80"
          />
        </div>
      </div>
    </div>
  );
};
