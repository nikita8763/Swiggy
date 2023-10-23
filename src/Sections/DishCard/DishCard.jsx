import React from 'react'
import './DishCard.css'
import Image_Dish from '../../components/Image_Dish/Image_Dish/Image_Dish'

const DishCard = () => {
  return (
    <div className='dishContainer'>
        <div className='dishDiv'>What's on your mind?</div>
        <Image_Dish/>
    </div>
  )
}

export default DishCard