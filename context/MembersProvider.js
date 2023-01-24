import { createContext, useEffect, useState } from "react";

export const MembersContext = createContext({
  fixedSavings: {},
  setFixedSavings: () => {},
  goalSavings: {},
  setGoalSavings: () => {},
  groupSavings: {},
  setGroupSavings: () => {},
  loans: {},
  setLoans: () => {},
  allInvestments: {},
  setAllInvestments: () => {},
  investmentApplications: {},
  setInvestmentApplications: () => {},
  userDashboard: {},
  setUserDashboard: () => {},
});

const MembersContextProvider = ({ children }) => {
  const [fixedSavings, setFixedSavings] = useState({ data: null, hash: {} });
  const [goalSavings, setGoalSavings] = useState({ data: null, hash: {} });
  const [groupSavings, setGroupSavings] = useState({ data: null, hash: {} });
  const [loans, setLoans] = useState({ data: null, hash: {} });
  const [allInvestments, setAllInvestments] = useState({ data: null, hash: {} });
  const [investmentApplications, setInvestmentApplications] = useState({ data: null, hash: {} });
  const [userDashboard, setUserDashboard] = useState({ data: null });

  useEffect(() => {
    console.log("changein context", loans, fixedSavings, goalSavings);
  }, [fixedSavings, goalSavings]);

  return (
    <MembersContext.Provider
      value={{
        fixedSavings,
        setFixedSavings,
        goalSavings,
        setGoalSavings,
        groupSavings,
        setGroupSavings,
        loans,
        setLoans,
        allInvestments,
        setAllInvestments,
        investmentApplications,
        setInvestmentApplications,
        userDashboard,
        setUserDashboard,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
};

export default MembersContextProvider;
