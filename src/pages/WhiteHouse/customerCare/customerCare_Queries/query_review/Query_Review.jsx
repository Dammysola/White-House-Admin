import React from 'react'
import Style from '../query_review/Query_Review.module.css'
import Stats_Card from '../../../../../components/stats_card/Stats_Card'
import person from '../../../../../assets/images/Person1.png'
import Staff_Card from '../../../admin/staff/all_staff/component/Staff_Card'




const Query_Review = () => {



    const user_card = [
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
    ]

    return (
        <div id={Style.Query_Review_mainDiv}>
            <div id={Style.Query_Review_wrapperDiv}>
                <div id={Style.Query_Review_mapDiv}>
                    <p className={Style.Query_Review_headerText}>User</p>
                    {
                        user_card.map((obj) => {

                            return (
                                <Staff_Card
                                    img={obj.img}
                                    name={obj.name}
                                    position={obj.position}
                                    status={obj.status} />
                            )
                        })
                    }
                </div>

                <p className={Style.Query_Review_headerText}>Query</p>

                <div id={Style.Query_Review_table_wrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>Ticket ID</th>
                            <th>Query Category</th>
                            <th>Query</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td className={Style.Query_Review_headerText}>WH457IP</td>
                                <td className={Style.Query_Review_headerText}>User Dispute</td>
                                <td>
                                    <div id={Style.Query_td}>
                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate
                                    </div>

                                </td>

                                <td>
                                    <div id={Style.Query_Review_td_button}>
                                        <button>Reviewed</button>
                                        <button>Escalate</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Query_Review