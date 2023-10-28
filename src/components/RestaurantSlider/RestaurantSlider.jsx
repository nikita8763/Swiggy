import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import Slider from "react-slick";
import { RestaurantList } from "../../Utils/RestaurantList";
import './RestaurantSlider.css'

function Arrow({ direction, onClick }) {
    return (
        <div className="customArrow" onClick={onClick}>
            <FontAwesomeIcon icon={direction === 'prev' ? faArrowLeft : faArrowRight} />
        </div>
    );
}

function RestaurantSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            {RestaurantList.map((restaurant) => (
                    <div key={restaurant.id} className="restaurantCardContainer">
                        <div className="restaurantDiscount">{restaurant.discount}</div>
                        <img className="restaurantImages" src={restaurant.url} alt={restaurant.name} />
                        <h2 className="restaurantName">{restaurant.name}</h2>
                        <div className="ratingTimeDiv">
                            <FontAwesomeIcon className="ratingIcon" icon={faStar}/>
                            <div>{restaurant.ratings} </div>
                            <div>.</div>
                            <div>{restaurant.time}</div>
                        </div>
                        <div className="restaurantLocation">{restaurant.location}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RestaurantSlider