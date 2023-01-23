import './carousel.scss';
import { useState } from 'react';

export default function Carousel({ children }) {
    let [ currentSlide, setCurrentSlide ] = useState(0);
    setInterval(()=>{
       setCurrentSlide((currentSlide + children.length) % children.length);
       console.log(currentSlide);
    }, 4000);

  return (
    <>
        <div className="carousel-container">
            <div className="carousel-slides">
                {children[currentSlide]}
            </div>
        </div>

    </>
  )
}
