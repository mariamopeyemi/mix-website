import React from "react";
import Image from "next/image";
import formatNumberWithCommas from "../../utils/addCommas";
import CurrencySymbol from "../general/CurrencySymbol";

const PlanCard = ({
	amount,
	percentage,
	status,
	statusOfPlan,
	title,
	bg = "",
	fixed,
	onClick,
}) => {
	return (
		<>
			{/* <div onClick={onClick} className={`${bg == "beige" ? 'bg-[#F2F2D6]' : "bg-[#cdd7e9]"} flex flex-col gap-[2rem] md:w-[450px] h-[190px] m-[auto] md:m-[0] rounded-xl p-[2rem] cursor-pointer `}>  */}
			{/* #F2F2D6 'bg-pv_bg' */}
			{fixed ? (
				<div
					onClick={onClick}
					className={`${
						bg == "beige" ? "bg-[#F2F2D6]" : "bg-[#cdd7e9]"
					} flex flex-col gap-[2rem] w-full h-[120px] m-[auto] md:m-[0] rounded-xl p-[2rem] cursor-pointer `}
				>
					<div className="flex flex-row justify-between">
						<p className="h-full body_heavy text-[#9999B4]  flex items-center">
							{title}
						</p>
						<p className={`h-full flex items-center text-[#9999B4] `}>
							{status}
							<span className="ml-[0.4rem]">
								{status == "matured" ? (
									<Image
										src="/images/lock.svg"
										alt="lock"
										width="20px"
										height="15px"
									/>
								) : (
									<Image
										src="/images/unlock.svg"
										alt="unlock"
										width="20px"
										height="15px"
									/>
								)}
							</span>
						</p>
					</div>
					<div className="flex flex-row justify-between">
						<p className="h-full text-[#1D1D1D] font-extrabold text-[24px] flex items-center">
							<CurrencySymbol />
							{formatNumberWithCommas(amount)}
						</p>
                        <p className="h-full text-[#137C4B] flex items-center mt-4">
							{percentage}%
						</p>
					</div>

					{/* <div className="flex flex-row justify-end">
						<Image src='/images/users.svg' alt='img' width='200px' height='50px' />
						<p className="h-full text-[#137C4B] flex items-center">
							{percentage}%
						</p>
					</div> */}
				</div>
			) : (
				<div
					onClick={onClick}
					className={`${
						bg == "beige" ? "bg-[#F2F2D6]" : "bg-[#cdd7e9]"
					} flex flex-col gap-[2rem] md:w-[450px] h-[190px] m-[auto] md:m-[0] rounded-xl p-[2rem] cursor-pointer `}
				>
					<div className="flex flex-row justify-between">
						<p className="h-full body_heavy text-[#9999B4]  flex items-center">
							{title}
						</p>
						<p
							className={`h-full flex items-center  ${
								statusOfPlan == "matured"
									? "text-[#137C4B]"
									: "Ongoing"
									? "text-[#B548C6]"
									: "text-[#9999B4] "
							}`}
						>
							{statusOfPlan}
						</p>
					</div>
					<div>
						<p className="h-full text-[#1D1D1D] font-extrabold text-[24px] flex items-center">
							<CurrencySymbol />
							{formatNumberWithCommas(amount)}
						</p>
					</div>

					<div className="flex flex-row justify-between">
						<Image
							src="/images/users.svg"
							alt="img"
							width="200px"
							height="50px"
						/>
						<p className="h-full text-[#137C4B] flex items-center">
							{percentage}%
						</p>
					</div>
				</div>
			)}
			{/* </div> */}
		</>
	);
};

export default PlanCard;
