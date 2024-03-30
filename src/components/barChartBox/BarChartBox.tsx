import { Bar, BarChart, ResponsiveContainer } from "recharts"
import "./barChartBox.scss"

const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
          <Bar dataKey={props.dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox