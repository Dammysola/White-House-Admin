import React, { useState } from 'react'
import Style from '../totalBet/Total_BetPlaced.module.css'
import Header from '../../../../components/header/Header'
import person from '../../../../assets/images/person_img.png'
import green_eyes from '../../../../assets/svg/green_eyes.svg'
import warning from '../../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../../assets/svg/product_delete.svg'
import winners_background from '../../../../assets/svg/winners_background.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import search from '../../../../assets/svg/Search.svg'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import InputField from '../../../../components/input/InputField'




const Total_BetPlaced = () => {

  let [toggleIndex, setToggleIndex] = useState(0);


  const toggle = (index) => {

    setToggleIndex(index)

  }



  const arr = [
    {
      SN: "1",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "4",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }
    },

    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }
    }
  ]

  return (
    <div id={Style.Total_BetPlaced_mainDiv}>

      <Header
        headerText={"Total Bet Placed"}
        headerInfo={"Here’s an information on all placed bets"} />

      <div id={Style.TotalBet_wrapperDiv}>

        <div>
          {
            toggleIndex == 1 ?
              <img id={Style.winners_background} src={winners_background} alt="" />
              : " "
          }
        </div>

        <div id={Style.Total_BetPlaced_TableWrapperDiv}>
          <div id={Style.BetText}>Bet Lists <span>(1,355)</span></div>

          <div id={Style.Transaction_listCalendar_Div}>

            <div id={Style.Transaction_listDiv}>

              <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>All</button>
              <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Winning Bets</button>
              <button onClick={() => toggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Losing Bets</button>

            </div>

            <div id={Style.Amount_Paid_input_FilterDiv}>
              <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

              <div id={Style.searchDiv}>
                <img src={search} alt="" />
                <InputField />
              </div>
              <div id={Style.imgDiv}>
                <img src={filter_img} alt="" />
                <img src={download} alt="" />
              </div>
            </div>
          </div>

          {/* {toggleIndex == 0 ? */}
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User ID</th>
                                <th>Bet ID</th>
                                <th>Game</th>
                                <th>Amount Staked</th>
                                <th>Players</th>
                                <th>Status</th>
                                <th>Amount Won</th>
                                <th>Action</th>
                            </tr>


                            {
                                toggleIndex == 0 ?

                                    <tbody>
                                        {
                                            arr.map((user, index) => {
                                                let lost = user.status == "Lost" ? true : false
                                                return (
                                                    <tr >
                                                        <td>{index + 1}</td>
                                                        <td>{user.userID}</td>
                                                        <td>{user.BetID}</td>
                                                        <td>{user.game}</td>
                                                        <td>{user.amount}</td>
                                                        <td>
                                                            <div id={Style.players_imgDiv}>
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                            </div>
                                                        </td>
                                                        <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td>
                                                        <td>{user.win}</td>
                                                        <td>
                                                            <div id={Style.action_field}>
                                                                <img src={user.action.eye} alt="" />
                                                                <img src={user.action.warning} alt="" />
                                                                <img src={user.action.delete} alt="" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody> :
                                    toggleIndex == 1?



                                        //winner Bet

                                        <tbody>
                                            {
                                                arr.filter((p)=> p.status === "Won").map((user, index) => {
                                                    // let lost = user.status == "Lost" ? true : false
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{user.userID}</td>
                                                            <td>{user.BetID}</td>
                                                            <td>{user.game}</td>
                                                            <td>{user.amount}</td>
                                                            <td>
                                                                <div id={Style.players_imgDiv}>
                                                                    <img src={user.players} alt="" />
                                                                    <img src={user.players} alt="" />
                                                                    <img src={user.players} alt="" />
                                                                    <img src={user.players} alt="" />
                                                                </div>
                                                            </td>
                                                            <td><div id={Style.statusText}>{user.status}</div></td>
                                                            <td>{user.win}</td>
                                                            <td>
                                                                <div id={Style.action_field}>
                                                                    <img src={user.action.eye} alt="" />
                                                                    <img src={user.action.warning} alt="" />
                                                                    <img src={user.action.delete} alt="" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody> :

                                        toggleIndex == 2 ?
                                            //Dice_Bet_Placed Lost screen

                                            <tbody>
                                                {
                                                    arr.filter((p) => p.status === "Lost").map((user, index) => {
                                                        let lost = user.status == "Lost" ? true : false
                                                        return (
                                                            <tr >
                                                                <td>{index + 1}</td>
                                                                <td>{user.userID}</td>
                                                                <td>{user.BetID}</td>
                                                                <td>{user.game}</td>
                                                                <td>{user.amount}</td>
                                                                <td>
                                                                    <div id={Style.players_imgDiv}>
                                                                        <img src={user.players} alt="" />
                                                                        <img src={user.players} alt="" />
                                                                        <img src={user.players} alt="" />
                                                                        <img src={user.players} alt="" />
                                                                    </div>
                                                                </td>
                                                                <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td>
                                                                <td>{user.win}</td>
                                                                <td>
                                                                    <div id={Style.action_field}>
                                                                        <img src={user.action.eye} alt="" />
                                                                        <img src={user.action.warning} alt="" />
                                                                        <img src={user.action.delete} alt="" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody> : ""

                            }

                        </table>
                        {/* : ""} */}
        </div>

      </div>


    </div>
  )
}

export default Total_BetPlaced