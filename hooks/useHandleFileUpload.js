import { useEffect, useRef, useState } from "react";

const useHandleFileUpload = () => {
  const [fileUrls, setFileUrls] = useState([]);
  const [fileObjs, setFileObjs] = useState([]);
  const fileInputRef = useRef(null);
  const filePickerTrigger = () => {
    fileInputRef.current.click();
  };

  //   To prevent memory leaks
  const releaseObjUrls = () => {
    fileUrls.forEach((url, i) => {
      console.log("in useHandleFileUpload: Revoking url for: ", i, url);
      URL.revokeObjectURL(url);
    });
  };
  useEffect(() => {
    return () => {
      releaseObjUrls();
    };
  }, []);

  const handleFileUpload = (e) => {
    const fileObjs = [];
    const fileUrls = [];
    Array.from(e.target.files).forEach((file) => {
      fileObjs.push(file);
      const temp = URL.createObjectURL(file);
      fileUrls.push(temp);
      console.log("url is", temp);
    });
    setFileUrls(fileUrls);
    setFileObjs(fileObjs);
  };

  return { fileUrls, fileObjs, fileInputRef, handleFileUpload, filePickerTrigger };
};

export default useHandleFileUpload;
