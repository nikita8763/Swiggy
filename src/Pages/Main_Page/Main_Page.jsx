import React from 'react'
import Header from '../../Sections/Header/Header'
import './Main_Page.css'
import CarouselCard from '../../Sections/CarouselCard/CarouselCard'
import DishCard from '../../Sections/DishCard/DishCard'
import RestaurantCard from '../../Sections/RestaurantCard/RestaurantCard'
import OnlineFoodDelivery from '../../Sections/OnlineFoodDelivery/OnlineFoodDelivery'

const Main_Page = () => {
  return (
    <div className='mainPage'>
        <Header/>
        <CarouselCard/>
        <DishCard/>
        <RestaurantCard/>
        <OnlineFoodDelivery/>
    </div>
  )
}

export default Main_Page