import React, { useState } from 'react'
import { BarChart, YAxis, XAxis, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie} from 'recharts'
import Style from '../chart/Chart.module.css'

const Chart = ({ data }) => {
  const [state, setState] = useState(0)

  const customTickFormatter = (tick) => {
    // Custom formatting logic, for example, converting a number to a string with a prefix
    return `${tick}`;
  }

  return (

    <div>
      <div id={Style.Chart_mainDiv}>
        <div id={Style.PayoutsText}>PayOuts</div>
        <ResponsiveContainer
          width="100%"
          height={300}>
          <BarChart
            // width={500}
            // height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >

            <CartesianGrid strokeDasharray="3 4 " vertical={false}></CartesianGrid>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend />
            <Bar dataKey="vwap24Hr" stackId='a' fill='#0B9FE1'></Bar>
            <Bar dataKey="priceUsd" stackId='a' fill='#003E79'></Bar>
            {/* verticalAlign='top' */}
          </BarChart>

        </ResponsiveContainer>
      </div>

      <div id={Style.BarChart2_mainDiv}>
        {/* <div id={Style.PayoutsText}>PayOuts</div> */}
        <ResponsiveContainer
          width="100%"
          height={300}>


          <PieChart width={600} height={400}>
            <Pie data={state} dataKey="priceUsd" cx="50%" cy="50%" outerRadius="600"  />
            {/* <Pie data={data} dataKey="priceUsd" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
          </PieChart>
          

        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart