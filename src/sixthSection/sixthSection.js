import './sixthSection.scss';
import Testimonial from './testimonial';
import testimonialsData from './testimonialsData';
import VButton from "../comps/Vbutton";
import { useState } from 'react';
import TitleDescription from '../comps/titleDescription';

export default function SixthSection() {
  let [ currentSlide, setCurrentSlide ] = useState(0);

  function handlePagination(num) {
    console.log((currentSlide + num))
    setCurrentSlide(Math.abs((currentSlide + num) % (testimonialsData.length)));
  }

  return (
    <section className='sections sixthContent'>
      <TitleDescription title={"Our Happy Clients"} description={""} />
      <div className='testimonialsContainer'>
        <div className='sliderContainer' style={{width: `${testimonialsData.length * 100}%`}}>
          {testimonialsData.map(({ src, name, testimonial }, i)=>{
            return <div className={`slide  ${i === currentSlide ? 'active' : ''}`} key={i}>
              <Testimonial src={src} name={name} text={testimonial} />
            </div>
          })}
        </div>

        <div className='navigationBtns'>
            <VButton content={<i className='material-symbols-outlined'>Arrow_Back</i>} color={"secondary"} callback={()=> handlePagination(-1 + testimonialsData.length)} />
            <VButton content={<i className='material-symbols-outlined'>Arrow_Forward</i>} color={"secondary"} callback={()=> handlePagination(1)} />
        </div>
      </div>
    </section>
  )
}
