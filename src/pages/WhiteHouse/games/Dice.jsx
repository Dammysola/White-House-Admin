import React from 'react'
import Style from '../games/Dice.module.css'
import { AreaChart, Area, XAxis, YAxis, Bar, BarChart, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import dice from '../../../assets/svg/Dice.svg'
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import rise from '../../../assets/svg/rise.svg'
import arrow_side from '../../../assets/svg/arrow_side.svg'
import person from '../../../assets/svg/person.svg'
import flag from '../../../assets/svg/flag.svg'
import smiley from '../../../assets/svg/blue_smiley.svg'
import arrow_down from '../../../assets/svg/arrow_down-dark.svg'
import Stats_Card from '../../../components/stats_card/Stats_Card';




const DiceGame = () => {

  const customTickFormatter = (tick) => {
    return `${tick}k`;
  }

  const total_Card2 = [
    {
      image1: './src/assets/svg/Activity.svg',
      text: 'Total Bet Placed',
      divText: 'View all',
      price: '$25,052,985'
    },
    {
      image1: './src/assets/svg/Activity.svg',
      text: 'Total Players',
      divText: 'View all',
      price: '2m'
    },
    {
      image1: './src/assets/svg/Work.svg',
      text: 'Winners',
      divText: 'View all',
      price: '345,000'
    },
    {
      image1: './src/assets/svg/Activity.svg',
      text: 'Loosers',
      divText: 'View all',
      price: '23,000'
    },
  ]

  const data = [
    {
      name: 'Mon',
      month: "Jan",
      uv: 50,
      pv: 40,
      amt: 2400,
    },
    {
      name: 'Tue',
      month: "Feb",
      uv: 70,
      pv: 60,
      amt: 2210,
    },
    {
      name: 'Wed',
      month: "Mar",
      uv: 80,
      pv: 40,
      amt: 2290,
    },
    {
      name: 'Thur',
      month: "Apr",
      uv: 65,
      pv: 20,
      amt: 2000,
    },
    {
      name: 'Fri',
      month: "May",
      uv: 84,
      pv: 50,
      amt: 2181,
    },
    {
      name: 'Sat',
      month: "Jun",
      uv: 100,
      pv: 60,
      amt: 2500,
    },
    {
      name: 'Sun',
      month: "Jul",
      uv: 60,
      pv: 40,
      amt: 2100,
    },
  ]

  const stats_card2 = [
    {
      img: rise,
      figure: "200k",
      text: "Bet Placed",
      to: "/placebet"

    },
    {
      img: person,
      figure: "2m",
      text: "All Users",
      to: "/placebet"
    },
    {
      img: flag,
      figure: "14",
      text: "Reg Countries",
      to: "/placebet"
    },
    {
      img: rise,
      figure: "200k",
      text: "Bet Placed",
      to: "/placebet"

    },
  ]

  const stats_card3 = [
    {
      img: rise,
      figure: "200k",
      text: "Bet Placed",
      to: "/placebet"

    },
    {
      img: person,
      figure: "2m",
      text: "All Users",
      to: "/placebet"
    }
  ]
  return (
    <div id={Style.DiceGame_mainDiv}>
      {/* <div id={Style.PlaceBet_HeaderDiv}> */}

      <Header
        headerText={"Dice"}
        headerInfo={"Here’s an information on Dice"}
        image={dice} />

      <div id={Style.DiceGame_wrapperDiv}>
        <p className={Style.PlaceBet_headerText}>Today's Summary</p>
        <div id={Style.DiceGame_Card_mapDiv}>
          {
            total_Card2.map((object) => {
              return (
                <Total_Card
                  image1={object.image1}
                  text={object.text}
                  divText={object.divText}
                  price={object.price}
                />
              )
            })
          }
        </div>
        <p className={Style.PlaceBet_headerText}>Overview</p>
        <div id={Style.DiceGame_cardGraph_wrapper}>
          <div id={Style.DiceGame_Card_wrapper}>
            {
              stats_card2.map((obj) => {
                return (
                  <Stats_Card
                    img={obj.img}
                    figure={obj.figure}
                    text={obj.text}
                    to={obj.to} />
                )
              })
            }
          </div>
          <div id={Style.Revenue_total_EarningDiv}>

            <div className={Style.Revenue_earningDiv}>

              <p className={Style.earningText}>Daily Revenue</p>
              <p className={Style.priceText}>$3,000</p>

              <div id={Style.Revenue_progressDiv}>
                <div className={Style.Revenue_progressBar}></div>
                <div id={Style.SmileyImg_Div}>
                  <img id={Style.Revenue_smileyImg} src={smiley} alt="" />
                </div>
              </div>
              <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                watching to find out more</p>
            </div>

            <div className={Style.Revenue_earningDiv}>

              <p className={Style.earningText}>Earnings this month</p>
              <p className={Style.priceText}>$23,000</p>

              <div id={Style.Revenue_progressDiv}>
                <div className={Style.Revenue_progressBar}></div>
                <p id={Style.Revenue_percentText}>45%</p>
              </div>
              <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                watching to find out more</p>
            </div>

          </div>
        </div>

        <div id={Style.DiceGame_lastline_graphDiv}>

          <div id={Style.AreaChartDiv}>
            <div id={Style.AreaChart_TextDiv}>
              <p id={Style.AreaChart_weeklyText}>Weekly Revenue Report</p>
              <p id={Style.AreaChart_dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
            </div>
            <ResponsiveContainer width="100%" height="70%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: -20,
                  bottom: 0,
                }}

              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={customTickFormatter} />
                <Tooltip />
                <Area type="normal" dataKey="uv" dot={true} stroke="#003E79" fill="#003e79cc" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div id={Style.BarChart_TextWrapperDiv}>

            <div id={Style.Chart_mainDiv}>
              <div id={Style.PayoutsText}>Bet Placed</div>
              <ResponsiveContainer
                width="100%"
                height="100%">
                <BarChart
                  width={300}
                  height={100}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: -20,
                    bottom: 10,
                  }}
                >

                  <XAxis dataKey="name" fontSize={"0.8rem"} axisLine={false} tickLine={false}></XAxis>
                  <YAxis fontSize={"0.7rem"} axisLine={false} tickLine={false}></YAxis>
                  <Tooltip></Tooltip>
                  <Bar dataKey="uv" stroke='none' stackId='a' fill='#0B9FE1'></Bar>
                  <Bar dataKey="pv" stackId='a' fill='#003E79'></Bar>
                </BarChart>
              </ResponsiveContainer>

            </div>


            <div id={Style.DiceGame_Card_wrapper_two}>
            {
              stats_card3.map((obj) => {
                return (
                  <Stats_Card
                    img={obj.img}
                    figure={obj.figure}
                    text={obj.text}
                    to={obj.to} />
                )
              })
            }
              
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

    </div>
  )
}

export default DiceGame