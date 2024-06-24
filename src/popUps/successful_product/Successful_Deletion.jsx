import React from 'react'
import Successful_Card from '../../components/successful_Card/Successful_Card'



const Successful_Deletion = () => {
  return (
    <div>
        <Successful_Card
        cancel
        text ={"Congratulations! You have successfully deleted this product."}/>
    </div>
  )
}

export default Successful_Deletion
