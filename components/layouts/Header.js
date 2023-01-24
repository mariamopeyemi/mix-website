import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";

const Header = ({
	title,
	withBack,
	withTitle = "true",
	disabled = "false",
	withRed,
	withTwoBtn,
	unColoredBtnTitle,
	coloredBtnTitle = "Create Plan",
	loading,
	coloredBtnClick,
	unColoredBtnClick,
	className,
}) => {
	const router = useRouter();
	return (
		<div className="flex flex-col md:flex-row justify-between ">
			<div className="flex flex-row text-center gap-[2rem] items-center md:w-[40%]">
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
			</div>

			<div className="flex md:flex-row mt-[2rem]  gap-[2rem] w-[auto]">
				{withTwoBtn && (
					<div className="w-[50%] md:w-[200px]">
						<LoadingButton
							onClick={unColoredBtnClick}
							loading={loading}
							className={``}
							variant="outlined"
						>
							{unColoredBtnTitle}
						</LoadingButton>{" "}
					</div>
				)}

				<div className="w-[50%] md:w-[200px]">
					{disabled == 'true' ? 
						<LoadingButton variant="contained" disabled>
							{coloredBtnTitle}
						</LoadingButton>
					 :
          <LoadingButton
							onClick={coloredBtnClick}
							loading={loading}
							variant="contained"
							className={`${className}`}
						>
							{coloredBtnTitle}
						</LoadingButton> }
					{/* {primary && (
						<LoadingButton
							onClick={coloredBtnClick}
							loading={loading}
							variant="contained"
							className={`${className}`}
						>
							{coloredBtnTitle}
						</LoadingButton>
					)} */}
				</div>
				{withRed && (
					<div className="w-[200px]">
						<LoadingButton
							onClick={unColoredBtnClick}
							loading={loading}
							className={`bg-[#C31331] hover:bg-red-400`}
							variant="contained"
						>
							{unColoredBtnTitle}
						</LoadingButton>{" "}
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
