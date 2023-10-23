import React from 'react'
import Image_Carousel from '../../components/Image_Carousel/Image_Carousel'
import './CarouselCard.css'

const CarouselCard = () => {
  return (
    <div className='carouselContainer'>
        <div className='bestOffersDiv'>Best offers for you</div>
        <Image_Carousel/>
    </div>
  )
}

export default CarouselCard