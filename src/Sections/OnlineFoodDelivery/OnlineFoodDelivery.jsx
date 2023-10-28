import React from 'react'
import './OnlineFoodDelivery.css'
import FoodDeliveryCard from '../../components/FoodDeliveryCard/FoodDeliveryCard'
// import SortBy from '../../components/Sort_By/SortBy'

const OnlineFoodDelivery = () => {
  return (
    <div className='foodDeliveryContainer'>
        <div className='foodDeliveryDiv'>Restaurants with online food delivery in Bhubaneswar</div>
        {/* <SortBy/> */}
        <FoodDeliveryCard/>
    </div>
  )
}

export default OnlineFoodDelivery