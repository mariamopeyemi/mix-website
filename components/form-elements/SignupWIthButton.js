import React from "react";

const SignupWIthButton = ({ type, img }) => {
  return (
    <button className=" border-border border border-solid rounded-full h-[5.1rem] px-[2.1rem] flex items-center from-inherit text-text font-medium bg-transparent outline-inherit cursor-pointer">
      <img className=" mr-[.9rem] " src={img}></img>Sign up with {type}
    </button>
  );
};

export default SignupWIthButton;
