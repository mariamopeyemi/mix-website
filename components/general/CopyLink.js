import { Button } from "@mui/material";
import React from "react";

const CopyLink = ({ text, linkText }) => {
  return (
    <div className=" border-2 border-dashed border-border rounded-primary h-[5.6rem] pl-[4rem] p-[.8rem] flex items-center justify-between">
      <span className="text-text text-[1.6rem]">{linkText ?? "link text"}</span>
      <Button className="max-w-[17.6rem] !h-auto">{text ?? "Copy"}</Button>
    </div>
  );
};

export default CopyLink;
