import classes from "./ResultTable.module.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IND",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = (props) => {
  return (
    <table className ={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearlyData) => {
          return (
            <tr key = {yearlyData.year}>
              <td>{formatter.format(yearlyData.year)}</td>
              <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearlyData.yearlyInterest)}</td>
              <td>
                {formatter.format(yearlyData.savingsEndOfYear -
                  props.intialInvestment -
                  yearlyData.yearlyContribution * yearlyData.year)}
              </td>
              <td>{formatter.format(props.intialInvestment+ yearlyData.yearlyContribution*yearlyData.year)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ResultTable;
