import React, { useState } from 'react'
import Style from './Dice_BetPlaced.module.css'
import Header from '../../../../components/header/Header'
import InputField from '../../../../components/input/InputField';
import search from '../../../../assets/svg/Search.svg'
import filter from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import green_eyes from '../../../../assets/svg/green_eyes.svg'
import warning from '../../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../../assets/svg/product_delete.svg'
import person from '../../../../assets/images/person_img.png'
import winners_background from '../../../../assets/svg/winners_background.svg'



const Dice_BetPlaced = () => {

    const [toggleIndex, setToggleIndex] = useState(0);

    const toggle = (index) => {
        setToggleIndex(index)
    }

    return (
        <div id={Style.Dice_BetPlaced_mainDiv}>
            <Header
                headerText={"Bet Placed"}
                headerInfo={"Here’s an information on all Bet Placed for Dice"}
            />

            <div id={Style.Dice_BetPlaced_wrapperDiv}>

            <div>
                    {
                        toggleIndex == 1 ?
                           <div id={Style.winner_imgDiv}> <img id={Style.winners_background} src={winners_background} alt="" /></div>
                        : " "
                    }
                </div>

                <div id={Style.Dice_BetPlaced_tableWrapperDiv}>

                    <p id={Style.Dice_BetPlaced_headerText}>Bet List <span>(1,345)</span></p>

                    <div id={Style.Dice_BetPlaced_listCalendar_Div}>

                        <div id={Style.Dice_BetPlaced_listDiv}>

                            <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.Dice_BetPlaced_button}>All</button>
                            <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.Dice_BetPlaced_button}>Winning Bets</button>
                            <button onClick={() => toggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.Dice_BetPlaced_button}>Losing Bets</button>

                        </div>

                        <div id={Style.Amount_Paid_input_FilterDiv}>
                            <p>3rd October, 2024 <img src={arrow_down} alt="" /></p>

                            <div id={Style.searchDiv}>
                                <img src={search} alt="" />
                                <InputField />
                            </div>
                            <div id={Style.imgDiv}>
                                <img src={filter} alt="" />
                                <img src={download} alt="" />
                            </div>
                        </div>
                    </div>

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
                                    <tr>
                                        <td>1</td>
                                        <td>5466FH</td>
                                        <td>6458575RFG</td>
                                        <td>DiceRoom344</td>
                                        <td>1000</td>
                                        <td>
                                            <div id={Style.players_imgDiv}>
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                            </div>
                                        </td>
                                        <td><div id={Style.statusText}>Won</div></td>
                                        <td>5000</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <img src={green_eyes} alt="" />
                                                <img src={warning} alt="" />
                                                <img src={delete_list} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>5466FH</td>
                                        <td>6458575RFG</td>
                                        <td>DiceRoom344</td>
                                        <td>1000</td>
                                        <td>
                                            <div id={Style.players_imgDiv}>
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                            </div>
                                        </td>
                                        <td><div id={Style.statusText_lost}>Lost</div></td>
                                        <td>0</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <img src={green_eyes} alt="" />
                                                <img src={warning} alt="" />
                                                <img src={delete_list} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>5466FH</td>
                                        <td>6458575RFG</td>
                                        <td>DiceRoom344</td>
                                        <td>1000</td>
                                        <td>
                                            <div id={Style.players_imgDiv}>
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                            </div>
                                        </td>
                                        <td><div id={Style.statusText}>Won</div></td>
                                        <td>5000</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <img src={green_eyes} alt="" />
                                                <img src={warning} alt="" />
                                                <img src={delete_list} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>5466FH</td>
                                        <td>6458575RFG</td>
                                        <td>DiceRoom344</td>
                                        <td>1000</td>
                                        <td>
                                            <div id={Style.players_imgDiv}>
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                            </div>
                                        </td>
                                        <td><div id={Style.statusText_lost}>Lost</div></td>
                                        <td>0</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <img src={green_eyes} alt="" />
                                                <img src={warning} alt="" />
                                                <img src={delete_list} alt="" />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>5466FH</td>
                                        <td>6458575RFG</td>
                                        <td>DiceRoom344</td>
                                        <td>1000</td>
                                        <td>
                                            <div id={Style.players_imgDiv}>
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                                <img src={person} alt="" />
                                            </div>
                                        </td>
                                        <td><div id={Style.statusText}>Won</div></td>
                                        <td>5000</td>
                                        <td>
                                            <div id={Style.action_field}>
                                                <img src={green_eyes} alt="" />
                                                <img src={warning} alt="" />
                                                <img src={delete_list} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody> : toggleIndex == 1 ?

                                    //Dice_Bet_Placed Winner Screen

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>5466FH</td>
                                            <td>6458575RFG</td>
                                            <td>DiceRoom344</td>
                                            <td>1000</td>
                                            <td>
                                                <div id={Style.players_imgDiv}>
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                </div>
                                            </td>
                                            <td><div id={Style.statusText}>Won</div></td>
                                            <td>5000</td>
                                            <td>
                                                <div id={Style.action_field}>
                                                    <img src={green_eyes} alt="" />
                                                    <img src={warning} alt="" />
                                                    <img src={delete_list} alt="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>5466FH</td>
                                            <td>6458575RFG</td>
                                            <td>DiceRoom344</td>
                                            <td>1000</td>
                                            <td>
                                                <div id={Style.players_imgDiv}>
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                </div>
                                            </td>
                                            <td><div id={Style.statusText}>Won</div></td>
                                            <td>5000</td>
                                            <td>
                                                <div id={Style.action_field}>
                                                    <img src={green_eyes} alt="" />
                                                    <img src={warning} alt="" />
                                                    <img src={delete_list} alt="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>5466FH</td>
                                            <td>6458575RFG</td>
                                            <td>DiceRoom344</td>
                                            <td>1000</td>
                                            <td>
                                                <div id={Style.players_imgDiv}>
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                </div>
                                            </td>
                                            <td><div id={Style.statusText}>Won</div></td>
                                            <td>5000</td>
                                            <td>
                                                <div id={Style.action_field}>
                                                    <img src={green_eyes} alt="" />
                                                    <img src={warning} alt="" />
                                                    <img src={delete_list} alt="" />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>4</td>
                                            <td>5466FH</td>
                                            <td>6458575RFG</td>
                                            <td>DiceRoom344</td>
                                            <td>1000</td>
                                            <td>
                                                <div id={Style.players_imgDiv}>
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                    <img src={person} alt="" />
                                                </div>
                                            </td>
                                            <td><div id={Style.statusText}>Won</div></td>
                                            <td>5000</td>
                                            <td>
                                                <div id={Style.action_field}>
                                                    <img src={green_eyes} alt="" />
                                                    <img src={warning} alt="" />
                                                    <img src={delete_list} alt="" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody> :
                                    toggleIndex == 2 ?
                                        //Dice_Bet_Placed Lost screen

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>5466FH</td>
                                                <td>6458575RFG</td>
                                                <td>DiceRoom344</td>
                                                <td>1000</td>
                                                <td>
                                                    <div id={Style.players_imgDiv}>
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                    </div>
                                                </td>
                                                <td><div id={Style.statusText_lost}>Lost</div></td>
                                                <td>0</td>
                                                <td>
                                                    <div id={Style.action_field}>
                                                        <img src={green_eyes} alt="" />
                                                        <img src={warning} alt="" />
                                                        <img src={delete_list} alt="" />
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td>5466FH</td>
                                                <td>6458575RFG</td>
                                                <td>DiceRoom344</td>
                                                <td>1000</td>
                                                <td>
                                                    <div id={Style.players_imgDiv}>
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                    </div>
                                                </td>
                                                <td><div id={Style.statusText_lost}>Lost</div></td>
                                                <td>0</td>
                                                <td>
                                                    <div id={Style.action_field}>
                                                        <img src={green_eyes} alt="" />
                                                        <img src={warning} alt="" />
                                                        <img src={delete_list} alt="" />
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>
                                                <td>5466FH</td>
                                                <td>6458575RFG</td>
                                                <td>DiceRoom344</td>
                                                <td>1000</td>
                                                <td>
                                                    <div id={Style.players_imgDiv}>
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                    </div>
                                                </td>
                                                <td><div id={Style.statusText_lost}>Lost</div></td>
                                                <td>0</td>
                                                <td>
                                                    <div id={Style.action_field}>
                                                        <img src={green_eyes} alt="" />
                                                        <img src={warning} alt="" />
                                                        <img src={delete_list} alt="" />
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>4</td>
                                                <td>5466FH</td>
                                                <td>6458575RFG</td>
                                                <td>DiceRoom344</td>
                                                <td>1000</td>
                                                <td>
                                                    <div id={Style.players_imgDiv}>
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                        <img src={person} alt="" />
                                                    </div>
                                                </td>
                                                <td><div id={Style.statusText_lost}>Lost</div></td>
                                                <td>0</td>
                                                <td>
                                                    <div id={Style.action_field}>
                                                        <img src={green_eyes} alt="" />
                                                        <img src={warning} alt="" />
                                                        <img src={delete_list} alt="" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody> : ""
                        }
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dice_BetPlaced