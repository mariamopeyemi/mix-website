import { axiosBaseInstance } from "../../axios";
import fetchData from "../../utils/fetchData";
import postData from "../../utils/postData";

export const adminRegister = async (data = {}) => {
  const respData = await postData("/auth?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};

export const adminVerifyToken = async (data = {}) => {
  const respData = await postData("/auth/verify?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};
export const adminLogin = async (data = {}) => {
  const respData = await postData("/auth/login?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};

// Dashboard
export const getAdminDashboard = async () => {
  const respData = await fetchData("/dashboard/coop");
  return respData;
};

// goal savings
export const createGoalSavings = async (data = {}) => {
  try {
    const respData = await postData("/goal-savings", data);
    console.log("register goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};

export const displayGoalSavings = async () => {
  try {
    const respData = await fetchData("/goal-savings/all?size=50&&page=1");
    console.log("fetch goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displaySingleGoalSavings = async (id) => {
  console.log(id);
  try {
    const respData = await fetchData(`/goal-savings/single?id=${id}`);
    console.log("display single goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};

export const updateGoalSavings = async (data = {}) => {
  try {
    const respData = await postData("/goal-savings/update", data);
    console.log("update goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const deleteGoalSavings = async (data = {}) => {
  try {
    const respData = await postData("/goal-savings/delete", data);
    console.log("delete goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};



// fixed savings

export const createFixedSavings = async (data = {}) => {
  try {
    const respData = await postData("/fixed-Savings", data);
    console.log("register fixed savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displayFixedSavings = async (data = {}) => {
  try {
    const respData = await fetchData("/fixed-Savings/all", data);
    console.log("display fixed savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displaySingleFixedSavings = async (id) => {
  try {
    const respData = await fetchData(`/fixed-savings/single?id=${id}`);
    console.log("display single fixed savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};


// cooperative admin loan 

// export const createLoan = async (data = {}) => {
//   const respData = await postData("/cooperative/add-members", data);
//   console.log("create loan data", respData);
//   return respData;
// };

export const displaySingleLoan = async (id) => {
  const respData = await fetchData(`/loan/single?id=${id}`, data);
  console.log("get each loan", respData);
  return respData;
};
export const displayAllLoan = async (data = {}) => {
  const respData = await postData("/loan/coop?size=1000&&page=1", data);
  console.log("get all created loan data", respData);
  return respData;
};

// cooperative investments
export const displaySingleInvestment = async (id) => {
  const respData = await fetchData(`/investments/single?id=${id}`);
  console.log("get individual investment data", respData);
  return respData;
};
// export const displayAllInvestment = async () => {
//   const respData = await fetchData("/investments/all-investment?size=1000&&page=1");
//   console.log("get all investment data", respData);
//   return respData;
// };
// export const displayAllInvestmentss = async () => {
//   const respData = await fetchData("/investments/all?size=1000&&page=1");
//   console.log("get all investment data", respData);
//   return respData;
// };

export const displayAllCoopInvestment = async () => {
  const respData = await fetchData("/investments/coop?size=1000&&page=1");
  console.log("get all cooperative investment data", respData);
  return respData;
};
export const approveInvestment = async (id) => {
  const respData = await postData(`/investments/approve?id=${id}`);
  console.log("approve a cooperative investment", respData);
  return respData;
};
export const updateInvestment = async (id) => {
  const respData = await postData(`/investments/update?id=${id}`);
  console.log("update cooperative investment data", respData);
  return respData;
};
export const deleteInvestment = async (id) => {
  const respData = await postData(`/investments/delete?id=${id}`);
  console.log("delete a cooperative investment data", respData);
  return respData;
};

// Members creation

// get all member of Planvest as existing user WORKS WELL
export const getAllMember = async () => {
  const respData = await fetchData(`/cooperative/all-users?size=1000&&page=1`);
  console.log("get all registered member of planvest", respData);
  return respData;
};

// add selected members from all existing members to coop  DONE
export const      addCoopMember = async (data = {}) => {
  const respData = await postData("/cooperative/add-members", data);
  console.log("add existing member data", respData);
  return respData;
};

// add new members to coop DONE
export const addNewCoopMember = async (data = {}) => {
  try {
    const respData = await postData("/cooperative/add-new-members", data);
   return respData;
  } catch (error) {
    throw error
  }

};

// add member to a goal savings WORKS NOW  TODO: 
export const addGoalSavingsMember = async (id, data = {}) => {
  const respData = await postData(`/cooperative/goal-savings-members?id=${id}`, data);
  console.log("add goal savings member data", respData);
  return respData;
};
// add member to a goal savings WORKS NOW  DONE
export const inviteMember = async ( data = {}) => {
  const respData = await postData(`/cooperative/invite-any-to-coop`, data);
  console.log("send invite to members", respData);
  return respData;
};
// get Pending members yet to join cooperative  TODO: 
export const getPendingMember = async ( ) => {
  const respData = await fetchData(`/cooperative/pending-coop-invites`,);
  console.log("got pending members", respData);
  return respData;
};

// to get a cooperative member DONE
export const getCoopMember = async (id) => {
  const respData = await fetchData(`/cooperative/coopMember?id=${id}`);
  console.log("this is to view a coop member", respData);
  return respData;
};

// updating a cooperative member NOT WORKING
export const updateCoopMember = async (id) => {
  const respData = await postData(`/cooperative/updateCoopMember?id=${id}`);
  console.log("update a coop member data", respData);
  return respData;
};
// get member of a cooperative TODO: DONE BUT RETURNS ONE INSTEAD OF ALL
export const getAllCoopMember = async () => {
  const respData = await fetchData(`/cooperative/all?size=1000&&page=1`);
  console.log("get all member of a coop", respData);
  return respData;
};


// TRANSACTIONS 

// got all transactions by savings type TODO: 
export const getTransactionBySavingsType = async (id) => {
  const respData = await fetchData(`transactions/saving-type?size=50&&page=1&&id=${id}`);
  console.log("this got all transactions by savings type", respData);
  return respData;
};
// got single transaction TODO: 
export const getSingleTransaction = async (id) => {
  const respData = await fetchData(`transactions/single?id=${id}`);
  console.log("this got single transactions", respData);
  return respData;
};
// got all transactions TODO: 
export const getAllTransaction = async () => {
  const respData = await fetchData(`transactions/all?size=50&&page=1`);
  console.log("this got all transactions and should be filter", respData);
  return respData;
};
// got all transactions by savings type TODO: 
export const getAllTransactionByStatus = async (status) => {
  const respData = await fetchData(`transactions/status?size=50&&page=1&&id=${status}`);
  console.log("this got all transactions filtered", respData);
  return respData;
};




