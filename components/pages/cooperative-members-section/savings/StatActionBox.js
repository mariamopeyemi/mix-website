import React from "react";
import formatNumberWithCommas from "../../../../utils/addCommas";
import StatCard from "../../../cards/StatCard";
import CurrencySymbol from "../../../general/CurrencySymbol";
import PlainContainer from "../../../layouts/PlainContainer";
import ActionsBox from "./ActionsBox";

const StatActionBox = ({ saving }) => {
  return (
    <PlainContainer isStrechedMobile={false} className={" !p-[2rem] mb-[1.6rem]"}>
      <StatCard
        className={"h-[15rem]"}
        title={"My balance"}
        value={
          <span>
            <CurrencySymbol />
            &nbsp;
            {formatNumberWithCommas(saving?.balance) || 0}
          </span>
        }
        bgColor="linear-gradient(263.32deg, #051EA4 0.96%, #1A8EF0 100%)"
      ></StatCard>
      {/* Action Box */}
      <ActionsBox saving={saving}></ActionsBox>
    </PlainContainer>
  );
};

export default StatActionBox;
