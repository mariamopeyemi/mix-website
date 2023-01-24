const GreyBox = ({ title, subTitle, className }) => {
  return (
    <div className={`" rounded-secondary p-[1.6rem] bg-pv_bg ${className}`}>
      <div className="flex items-center mb-[.8rem] justify-between">
        <span className=" text-[1.4rem] font-medium text-label">{title}</span>
      </div>
      <p className=" font-medium text-[1.6rem] text-pv_dark">{subTitle}</p>
    </div>
  );
};

export default GreyBox;
