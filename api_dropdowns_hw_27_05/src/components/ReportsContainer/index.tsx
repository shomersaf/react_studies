
import { Chart } from 'primereact/chart';

export default function ReportsContainer(props: any) {
  const { expenses } = props;
 
  var allCategories = expenses
    .reduce((newObj: any, expense: any) => {
      if (!Object.hasOwn(newObj, expense.category)) {
        newObj[expense.category] = expense.amount
      }
      else {
        newObj[expense.category] += expense.amount
      }
      return newObj;
    }, {});

    var allYears = expenses
    .reduce((newObj: any, expense: any) => {
      if (!Object.hasOwn(newObj, expense.date)) {
        newObj[expense.date] = expense.amount
      }
      else {
        newObj[expense.date] += expense.amount
      }
      return newObj;
    }, {});
 
  const chartData = {
    labels: [...Object.keys(allCategories)],
    datasets: [
      {
        data: [...Object.values(allCategories)],
        backgroundColor: [
          "red",
          "blue",
          "green",
          "orange",
          "yellow",
          "purple",

        ],

      }
    ]
  };

  const chartData2 = {
    labels: [...Object.keys(allYears)],
    datasets: [
      {
        data: [...Object.values(allYears)],
        backgroundColor: [
          "red",
          "blue",
          "green",
          "orange",
          "yellow",
          "purple",

        ],

      }
    ]
  };

  return (
    <div className="reportsDiv">
      <h3>reports</h3>
      <div className="graphs">
      <div className="card flex justify-content-center">
        <h5>per categories selected</h5>
        <Chart type="pie" data={chartData} style={{ margin: '0 auto', width: '100%'}} />
      </div>
      <div className="card flex justify-content-center">
      <h5>per years selected</h5>
        <Chart type="pie" data={chartData2} style={{ margin: '0 auto', width: '100%'}} />
      </div>
      </div>
     
    </div>
  )
}
