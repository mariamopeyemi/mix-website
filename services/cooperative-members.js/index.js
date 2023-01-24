import { axiosBaseInstance } from "../../axios";
import fetchData from "../../utils/fetchData";
import postData from "../../utils/postData";

export const register = async (data = {}) => {
  const respData = await postData("/auth?type=user", data);
  console.log("register resp data", respData);
  return respData;
};

export const verifyToken = async (data = {}) => {
  const respData = await postData("/auth/verify?type=user", data);
  console.log("register resp data", respData);
  return respData;
};
export const login = async (data = {}) => {
  const respData = await postData("/auth/login?type=user", data);

  console.log("login resp data", respData);
  return respData;
};
export const initiateForgotPassword = async (data = {}) => {
  const respData = await postData("/auth/forgot-password?type=user", data);
  return respData;
};
export const getUserProfile = async () => {
  const respData = await fetchData("/auth/profile");
  return respData;
};
export const resetPassword = async (data = {}, token) => {
  const respData = await postData("/auth/reset-password?type=user", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return respData;
};

// Transactions
export const createTransaction = async (data = {}) => {
  const respData = await postData("/transactions/", data);

  return respData;
};

export const getAllTransactions = async (page, size) => {
  const respData = await fetchData(`/transactions/all?page=${page}&size=${size}`);

  return respData;
};

// Savings

export const createPersonalFixedSavings = async (data = {}) => {
  const respData = await postData("/personal-fixed-savings/", data);
  return respData;
};
export const createPersonalGoalSavings = async (data = {}) => {
  const respData = await postData("/personal-goal-savings/", data);
  return respData;
};
export const updatePersonalGoalSavings = async (data = {}, id) => {
  const respData = await postData(`/personal-goal-savings/update?id=${id}`, data);
  return respData;
};

export const getPersonalFixedSavings = async () => {
  const respData = await fetchData("/personal-fixed-Savings/all?page=1&size=10000");
  return respData;
};
export const getPersonalGoalSavings = async () => {
  const respData = await fetchData("/personal-goal-Savings/all?page=1&size=1000");
  return respData;
};
export const getSinglePersonalGoalSavings = async (id) => {
  const respData = await fetchData(`/personal-goal-Savings/single?id=${id}`);
  return respData;
};
export const getSinglePersonalFixedSavings = async (id) => {
  const respData = await fetchData(`/personal-fixed-Savings/single?id=${id}`);
  return respData;
};

export const buildSavingsHash = (savings) => {
  const savingsIdHash = {};

  savings.forEach((sav) => {
    savingsIdHash[sav.id] = sav;
  });

  return savingsIdHash;
};
export const buildDataIdHash = (data) => {
  const dataIdHash = {};

  data.forEach((item) => {
    dataIdHash[item.id] = item;
  });

  return dataIdHash;
};

// Loans
export const createLoan = async (data = {}) => {
  const respData = await postData("/loan/", data);
  return respData;
};

export const getAllLoans = async () => {
  const respData = await postData("/loan/all?page=1&size=10000");
  return respData;
};

export const getSingleLoan = async (id) => {
  const respData = await fetchData(`/loan/single?id=${id}`);
  return respData;
};

//Investment
export const createInvestment = async (data = {}) => {
  const respData = await postData("/investments/", data);
  return respData;
};
export const getAllInvestment = async () => {
  const respData = await postData("/investments/all-investments?page=1&size=1000000");
  return respData;
};
export const getAllInvestmentApplications = async () => {
  const respData = await postData("/investments/all?page=1&size=1000000");
  return respData;
};

export const getSingleInvestmentApplication = async (id) => {
  const respData = await fetchData(`/investments/single?id=${id}`);
  return respData;
};

// Profile
export const updateProfile = async (data = {}) => {
  const respData = await postData("/auth/profile-update", data);
  return respData;
};
// Dashboard
export const getUserDashboard = async () => {
  const respData = await fetchData("/dashboard/private");
  return respData;
};
