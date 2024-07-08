import Style from '../payroll/Payroll.module.css'
import plus_blue from '../../../assets/svg/Plus_blue.svg'
import setting from '../../../assets/svg/Setting.svg'
import filter from '../../../assets/svg/Complete_filter_img.svg'
import download from '../../../assets/svg/download_img.svg'
import warning from '../../../assets/svg/yellow_warning.svg'
import green_eyes from '../../../assets/svg/green_eyes.svg'
import delete_list from '../../../assets/svg/product_delete.svg'


const Payroll = () => {
    return (
        <>


            <div id={Style.PayrollTextDiv}>
                <div>
                    <div id={Style.homeText}><span>Home</span>{'>'}Staff {'>'} Payroll</div>
                    <p>Payroll</p>
                    <div id={Style.list_of_AccountText}>Here’s a list of all the staff in your payroll</div>
                </div>
                <div id={Style.Payroll_additionDiv}>
                    <div id={Style.Payroll_CreateProductDiv}><img src={plus_blue} alt="" />Create Product</div>
                    <div id={Style.Payroll_AddproductDiv}><img src={setting} alt="" /> Payroll Setup</div>
                </div>
            </div>


            <div id={Style.Payroll_mainDiv}>
                <div id={Style.Payroll_wrapperDiv}>
                    <div id={Style.PayrollDiv}>
                        <div>
                            <div id={Style.PayrollText}>Staff Lists <span>(1,355)</span></div>
                            <div id={Style.All_Staff_toggle}>
                                <div id={Style.All_StaffText}> All Staff </div>
                                <div>Suspended</div>
                                <div>Deactivated</div>

                            </div>
                        </div>
                        <div id={Style.input_FilterDiv}>
                            <input type="text" />
                            <img src={filter} alt="" />
                            <img src={download} alt="" />
                        </div>

                    </div>

                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>FullName</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>AccountNumber</th>
                            <th>StaffCode</th>
                            <th>Salary</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Dele Akinjobi</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.ActiveDiv}>Active</div></td>
                          <td>
                              <div id={Style.action_field}>
                                  <img src={green_eyes} alt="" />
                                  <img src={warning} alt="" />
                                  <img src={delete_list} alt="" />
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>Dele Akinjobi</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.ActiveDiv}>Active</div></td>
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
                          <td>Frank ye</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.SuspendedDiv}>Suspended</div></td>
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
                          <td>Geoffrey kay</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>₦750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.SuspendedDiv}>Suspended</div></td>
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
                          <td>Angel re</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>₦750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.SuspendedDiv}>Suspended</div></td>
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
                          <td>Tim Vent</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.ActiveDiv}>Active</div></td>
                          <td>
                              <div id={Style.action_field}>
                                  <img src={green_eyes} alt="" />
                                  <img src={warning} alt="" />
                                  <img src={delete_list} alt="" />
                              </div>
                          </td>
                      </tr>
                      <tr id={Style.last_Table_Line}>
                          <td>6</td>
                          <td>Ramond Jack</td>
                          <td>08123456789</td>
                          <td>account@gmail</td>
                          <td>7875689729</td>
                          <td>ID12535408</td>
                          <td>750,000</td>
                          <td>Nigeria</td>
                          <td><div id={Style.ActiveDiv}>Active</div></td>
                          <td>
                              <div id={Style.action_field}>
                                  <img src={green_eyes} alt="" />
                                  <img src={warning} alt="" />
                                  <img src={delete_list} alt="" />
                              </div>
                          </td>
                      </tr>
                    </table>

                </div>
            </div>

        </>
    )
}

export default Payroll