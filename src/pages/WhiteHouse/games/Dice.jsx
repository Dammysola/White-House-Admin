import React from 'react'
import Style from '../games/Dice.module.css'
import dice from '../../../assets/svg/Dice.svg'
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import rise from '../../../assets/svg/rise.svg'
import arrow_side from '../../../assets/svg/arrow_side.svg'
import person from '../../../assets/svg/person.svg'
import flag from '../../../assets/svg/flag.svg'
import curve_line from '../../../assets/images/curve_line.png'
import graph from '../../../assets/images/graph.jpg'
import line_Graph from '../../../assets/images/line_Graph.png'
const DiceGame = () => {

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
  return (
    <div id={Style.DiceGame_mainDiv}>
      <div id={Style.PlaceBet_HeaderDiv}>

        <Header
          headerText={"Dice"}
          headerInfo={"Here’s an information on Dice"}
          image={dice} />

        <div id={Style.DiceGame_wrapperDiv}>
          <p className={Style.PlaceBet_headerText}>Today's Summary</p>
          <div id={Style.Total_Card_mapDiv}>
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
            <div id={Style.Dashboard_Card_wrapper}>

              <div className={Style.Dashboard_CardDiv}>
                <img src={rise} alt="" />
                <div>
                  <p className={Style.Card_figure}>200k</p>
                  <p className={Style.Card_text}>Bet Placed</p>
                </div>
                <img src={arrow_side} alt="" />
              </div>

              <div className={Style.Dashboard_CardDiv}>
                <img src={person} alt="" />
                <div>
                  <p className={Style.Card_figure}>2m</p>
                  <p className={Style.Card_text}>All Users</p>
                </div>
                <img src={arrow_side} alt="" />
              </div>

              <div className={Style.Dashboard_CardDiv}>
                <img src={flag} alt="" />
                <div>
                  <p className={Style.Card_figure}>14</p>
                  <p className={Style.Card_text}>Reg Countries</p>
                </div>
                <img src={arrow_side} alt="" />
              </div>

              <div className={Style.Dashboard_CardDiv}>
                <img src={rise} alt="" />
                <div>
                  <p className={Style.Card_figure}>200k</p>
                  <p className={Style.Card_text}>Bet Placed</p>
                </div>
                <img src={arrow_side} alt="" />
              </div>
            </div>

            <img src={curve_line} alt="" />
            <img src={curve_line} alt="" />
          </div>

          <div id={Style.DiceGame_lastline_graphDiv}>
            <img src={graph} alt="" />
            <div>
              <img id={Style.DiceGame_graph} src={line_Graph} alt="" />

              <div id={Style.Dashboard_Card_wrapper}>

                <div className={Style.Dashboard_CardDiv}>
                  <img src={flag} alt="" />
                  <div>
                    <p className={Style.Card_figure}>14</p>
                    <p className={Style.Card_text}>Reg Countries</p>
                  </div>
                  <img src={arrow_side} alt="" />
                </div>

                <div className={Style.Dashboard_CardDiv}>
                  <img src={rise} alt="" />
                  <div>
                    <p className={Style.Card_figure}>200k</p>
                    <p className={Style.Card_text}>Bet Placed</p>
                  </div>
                  <img src={arrow_side} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DiceGame