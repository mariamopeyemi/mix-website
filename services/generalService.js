import postData from "../utils/postData";

export const uploadFile = async (fileObj, type) => {
  const formData = new FormData();
  formData.append("file", fileObj);
  formData.append("type", type);
  const respData = await postData("/file", formData, { "Content-Type": "multipart/form-data" });
  return respData;
};
