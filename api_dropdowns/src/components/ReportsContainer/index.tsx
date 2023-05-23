
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

  return (
    <div className="reportsDiv">
      <h3>reports</h3>
      <div className="card flex justify-content-center">
        <Chart type="pie" data={chartData} style={{ margin: '0 auto', width: '25%'}} />
      </div>
    </div>
  )
}
