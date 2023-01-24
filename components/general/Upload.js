import React, { useEffect, useRef, useState } from "react";
import SvgIconWrapper from "./SvgIconWrapper";

const Upload = ({
  caption = "Click this area to upload image ",
  multiple = true,
  accept = "image/png, image/gif, image/jpeg",
  specCaption,
  onUpload = (fileObjs = [], fileBlobUrls = []) => {},
  className,
  boxClassName,
  displayImgContClass,
  showDisplayImgs = false,
  uploadImg,
}) => {
  const fileInputRef = useRef(null);
  const [fileUrls, setFileUrls] = useState([]);
  const [fileObjs, setFileObjs] = useState([]);

  const handleFileUpload = (e) => {
    const fileObjs = [];
    const fileUrls = [];
    Array.from(e.target.files).forEach((file) => {
      fileObjs.push(file);
      const temp = URL.createObjectURL(file);
      fileUrls.push(temp);
      //   URL.revokeObjectURL(temp);
      console.log("url is", temp);
    });
    onUpload(fileObjs, fileUrls);
    setFileUrls(fileUrls);
    setFileObjs(fileObjs);
  };
  const accessibilityClick = () => {
    fileInputRef.current.click();
  };

  //   To prevent memory leaks
  const releaseObjUrls = () => {
    fileUrls.forEach((url, i) => {
      console.log("revoking url for: ", i, url);
      URL.revokeObjectURL(url);
    });
  };

  useEffect(() => {
    return () => {
      releaseObjUrls();
    };
  }, []);
  return (
    <div className={`${className}`}>
      <input ref={fileInputRef} accept={accept} className=" hidden" multiple={multiple} onChange={handleFileUpload} id={"file-upload"} type={"file"}></input>
      <div
        onClick={accessibilityClick}
        className={`grid justify-items-center justify-center content-center items-center p-[3.7rem] bg-pv_bg rounded-primary cursor-pointer  mb-[2rem] ${boxClassName}`}
      >
        {uploadImg ? uploadImg : <SvgIconWrapper className={"w-[3.8rem] h-[3.8rem]"} iconName={"upload-grey"}></SvgIconWrapper>}

        {/* Button Element for keyboard focus/tab accessibility */}
        <button type="button" className=" border-none cursor-pointer mt-[1.6rem] mb-[.8rem]">
          <span className="text-pv_primary text-[1.6rem] inline-flex">{caption}</span>
        </button>

        {specCaption && <p className="text-text text-[1.4rem] mt-[1.6rem]">{specCaption}</p>}
      </div>

      {/* Display purpose only */}
      {showDisplayImgs && (
        <div onClick={releaseObjUrls} className={`grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-5 mb-5 mt-[2rem] ${displayImgContClass}`}>
          {fileUrls.map((url, i) => {
            return (
              <div className=" cursor-pointer" title={fileObjs[i].name} key={i}>
                <img className="w-full h-[100px] object-cover rounded-primary" src={url} alt="testimg"></img>
                <span className=" whitespace-nowrap overflow-hidden text-ellipsis block">{fileObjs[i].name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Upload;
