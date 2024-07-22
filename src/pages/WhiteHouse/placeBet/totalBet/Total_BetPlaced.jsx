import React, { useState } from 'react'
import Style from '../totalBet/Total_BetPlaced.module.css'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import InputField from '../../../../components/input/InputField'
import Header from '../../../../components/header/Header'
import search from '../../../../assets/svg/Search.svg'
import App_Pagination from '../../../../components/app_Pagination/App_Pagination'




const Total_BetPlaced = () => {
  const [searchItem, setSearchItem] = useState({
    age: ""
  })

  const searchDetails = (e) => {
    const value = e.target.value
    const name = e.target.name


    setSearchItem(
      (prevState) => ({
        ...prevState,
        [name]:value
      }
      ))
  }
  console.log(searchItem.age);

  // const handleSubmit = (e) =>{
  //   e.preventDefault(e)
  // }

  return (
    <div id={Style.Total_BetPlaced_mainDiv}>
      <Header
        headerText={"Total Bet Placed"}
        headerInfo={"Here’s an information on all placed bets"} />

      <div id={Style.TotalBet_wrapperDiv}>
        <div id={Style.input_FilterDiv}>
          <p>3rd July, 2024</p>
          <div id={Style.searchDiv}>
            <img src={search} alt=""/>
            <form>
              {/* <InputField
                placeholder={"Search tickets"}
                type={"text"}
                value={searchItem}
                onChange={searchDetails} /> */}

                <input type="text" value={searchItem.age}
                onChange={searchDetails} name={"age"}
                />
            </form>
          </div>

          <img src={filter_img} alt="" />
          <img src={download} alt="" />
        </div>

        <div id={Style.TotalBet_wrapper}>
          <div id={Style.PlaceBet_tableDiv}>
            <table>
              <tr id={Style.headerTable}>
                <th>S/N</th>
                <th>User ID</th>
                <th>Ticket ID</th>
                <th>Amount Staked</th>
                <th>Status</th>
              </tr>
              
              <tr>
                <td>1</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.statusText}>Won</div>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>
              <tr id={Style.lastline}>
                <td>8</td>
                <td>SA 123476689</td>
                <td>8012345678</td>
                <td>₦100.00</td>
                <td>
                  <div id={Style.action_field}>
                    <div id={Style.statusText}>Won</div>
                  </div>
                </td>
              </tr>

            </table>
          </div>
        </div>
        
      </div>
      <App_Pagination/>
    </div>
  )
}

export default Total_BetPlaced