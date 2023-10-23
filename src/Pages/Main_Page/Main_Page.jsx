import React from 'react'
import Header from '../../Sections/Header/Header'
import './Main_Page.css'
import CarouselCard from '../../Sections/CarouselCard/CarouselCard'
import DishCard from '../../Sections/DishCard/DishCard'

const Main_Page = () => {
  return (
    <div className='mainPage'>
        <Header/>
        <CarouselCard/>
        <DishCard/>
    </div>
  )
}

export default Main_Page