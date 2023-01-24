import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";

const ViewTop = ({
	title,
	user,
	withBack,
	withTitle = "true",
	withRed,
	greenBtnTitle = "Pay",
	redBtnTitle = "Remove",
	loading,
	redBtnClick,
	greenBtnClick,
	onReport,
	className,
}) => {
	const router = useRouter();
	return (
		<div className="flex flex-row justify-between ">
			<div className="flex flex-row text-center gap-[2rem] items-center w-[40%]">
				{withBack && (
				   <Image
						src="/images/go-back.svg"
						width="30px"
						height="25px"
						alt="back arrow"
						onClick={() => {
							router.back();
						}}
					/>
				)}
				{withTitle && <p className="font-extrabold text-[26px] ">{title}</p>}
				<Image
					src="/images/useravatar.svg"
					alt="avatar"
					width="35px"
					height="35px"
				/>
				<p className=" text-[#666668] ">{user}</p>
				<div className="flex flex-row text-center gap-[1rem] items-center">
					{/* <p className='font-extrabold text-[46px] rounded-full '>.</p> */}
					<Image
						src="/images/redflag.svg"
						alt="avatar"
						width="15px"
						height="15px"
					/>
					<p
						className=" text-[#C31331] underline cursor-pointer"
						onClick={onReport}
					>
						Report
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-[2rem] w-[auto]">
				<div className="w-[200px]">
					<LoadingButton
						onClick={greenBtnClick}
						loading={loading}
						variant="contained"
						className={`${className}`}
					>
						{greenBtnTitle}
					</LoadingButton>
				</div>
				{withRed && (
					<div className="w-[200px]">
						<LoadingButton
							onClick={redBtnClick}
							loading={loading}
							className={`bg-[#C31331] hover:bg-red-400`}
							variant="contained"
						>
							{redBtnTitle}
						</LoadingButton>{" "}
					</div>
				)}
			</div>
		</div>
	);
};

export default ViewTop;
