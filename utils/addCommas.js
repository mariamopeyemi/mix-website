const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const removeNonNumeric = (num) =>
  parseInt(num, 10)
    .toString()
    .replace(/[^0-9]/g, "");

const formatNumberWithCommas = (num) => {
  return addCommas(removeNonNumeric(num));
};

export default formatNumberWithCommas;
