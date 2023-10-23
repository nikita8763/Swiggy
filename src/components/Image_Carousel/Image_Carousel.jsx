import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import Slider from "react-slick";
import carsouelImage1 from '../../assests/main_page/CarouselImage1.webp'
import carsouelImage2 from '../../assests/main_page/CarouselImage2.webp'
import carsouelImage3 from '../../assests/main_page/CarouselImage3.webp'
import carsouelImage4 from '../../assests/main_page/CarouselImage4.webp'
import carsouelImage5 from '../../assests/main_page/CarouselImage5.webp'
import carsouelImage6 from '../../assests/main_page/CarouselImage6.webp'
import carsouelImage7 from '../../assests/main_page/CarouselImage7.webp'
import './Image_Carousel.css'

function Arrow({ direction, onClick }) {
    return (
        <div className="customArrow" onClick={onClick}>
            <FontAwesomeIcon icon={direction === 'prev' ? faArrowLeft : faArrowRight} />
        </div>
    );
}

function Image_Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <Arrow direction='next' />,
        prevArrow: <Arrow direction='prev' />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div><img className="carsouelImage" src={carsouelImage1 } /></div>
                </div>
                <div>
                    <div><img className="carsouelImage" src={ carsouelImage2} /></div>
                </div>
                <div>
                    <div><img className="carsouelImage" src={carsouelImage3 } /></div>
                </div>
                <div>
                    <div><img className="carsouelImage" src={ carsouelImage4} /></div>
                </div>
                <div>
                    <div><img className="carsouelImage" src={carsouelImage5 } /></div>
                </div>
                <div>
                    <div><img className="carsouelImage" src={ carsouelImage6} /></div>
                </div>
                <div>
                    <div><img className="carsouelImage" src={carsouelImage7 } /></div>
                </div>
            </Slider>
        </div>
    );
}

export default Image_Carousel;