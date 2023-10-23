import React from 'react'
import Biryani from '../../../assests/main_page/Biryani.webp'
import Burger from '../../../assests/main_page/Burger.webp'
import North_Indian from '../../../assests/main_page/North_Indian_4.webp'
import Pizza from '../../../assests/main_page/Pizza.webp'
import Chinese from '../../../assests/main_page/Chinese.webp'
import Cakes from '../../../assests/main_page/Cakes.webp'
import Kebabs from '../../../assests/main_page/Kebabs.webp'
import South_Indian from '../../../assests/main_page/South_Indian_4.webp'
import Rolls from '../../../assests/main_page/Rolls.webp'
import Paratha from '../../../assests/main_page/Paratha.webp'
import Dosa from '../../../assests/main_page/Dosa.webp'
import Poori from '../../../assests/main_page/Poori.webp'
import Idli from '../../../assests/main_page/Idli.webp'
import Coffee from '../../../assests/main_page/Coffee.webp'
import Ice_Cream from '../../../assests/main_page/Ice_Creams.webp'
import Pasta from '../../../assests/main_page/Pasta.webp'
import Khichdi from '../../../assests/main_page/Khichdi.webp'
import Shakes from '../../../assests/main_page/Shakes.webp'
import Chole_Bhature from '../../../assests/main_page/Chole_Bature.webp'
import Gulab_Jamun from '../../../assests/main_page/Gulab_Jamun.webp'
// import './SliderImage.css'

function SliderImages() {
    const images = [
        { url: Biryani, name: "Biryani" },
        { url: Burger, name: "Burger" },
        { url: North_Indian, name: "North Indian" },
        { url: Pizza, name: "Pizza" },
        { url: Chinese, name: "Chinese" },
        { url: Cakes, name: "Cakes" },
        { url: Kebabs, name: "Kebabs" },
        { url: South_Indian, name: "South Indian" },
        { url: Rolls, name: "Rolls" },
        { url: Paratha, name: "Paratha" },
        { url: Dosa, name: "Dosa" },
        { url: Poori, name: "Poori" },
        { url: Idli, name: "Idli" },
        { url: Coffee, name: "Coffee" },
        { url: Ice_Cream, name: "Ice Cream" },
        { url: Pasta, name: "Pasta" },
        { url: Khichdi, name: "Khichdi" },
        { url: Shakes, name: "Shakes" },
        { url: Chole_Bhature, name: "Chole_Bhature" },
        { url: Gulab_Jamun, name: "Gulab Jamun" },
    ];

    return images.map((image, index) => (
      <div key={index}>
        <div>
          <img className="DishImage" src={image.url} alt={image.name} />
        </div>
      </div>
    ));
  }

export default SliderImages;