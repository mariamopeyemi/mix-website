import { buildDataIdHash } from "../services/cooperative-members.js";

const useFetchDataBuildHashStoreToState = (fetchFunction, setState) => {
  const fetchDataBuildHashStoreToState = async () => {
    const respData = await fetchFunction();
    if (respData?.status) {
      setState({ data: respData?.data?.data, hash: buildDataIdHash(respData?.data?.data) });
    }
  };

  return { fetchDataBuildHashStoreToState };
};

export default useFetchDataBuildHashStoreToState;
