import React, { useState } from 'react'
import { BarChart, YAxis, XAxis, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LineChart, Line } from 'recharts';
import Style from '../chart/Chart.module.css'

const Chart = ({ data, line_data}) => {
  // const [state, setState] = useState(0)

  // const customTickFormatter = (tick) => {
  //   // Custom formatting logic, for example, converting a number to a string with a prefix
  //   return `${tick}`;
  // }



  return (

    <>
      <div>
        <div id={Style.Chart_mainDiv}>
          <div id={Style.PayoutsText}>Bet Placed</div>
          <ResponsiveContainer
            width="100%"
            height= "100%">
            <BarChart
              width={300}
              height={100}
              data={line_data}
              margin={{
                top: 5,
                right: 30,
                left: -20,
                bottom: 10,
              }}
            >

              <CartesianGrid strokeDasharray="3 4 " vertical={false}></CartesianGrid>
              <XAxis dataKey="name" fontSize={"0.8rem"}></XAxis>
              <YAxis fontSize={"0.7rem"}  ></YAxis>
              <Tooltip></Tooltip>
              {/* <Legend /> */}
              <Bar dataKey="pv" stroke='none' stackId='a' fill='#0B9FE1'></Bar>
              <Bar dataKey="amt" stackId='a' fill='#003E79'></Bar>
              {/* verticalAlign='top' */}
            </BarChart>
          </ResponsiveContainer>

        </div>


      </div>
      
    </>
  )
}

export default Chart