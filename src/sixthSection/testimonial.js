import './testimonial.scss';
import RspImage from '../comps/rspImage';

export default function Testimonial({ src, name, text }) {
  return (
    <div className='testimonials'>
        <div className='avatarContainer'>
            <RspImage src={src} classname={""} alt="user" />
        </div>

        <div className='nameAndSomeInfo'>
            <h4 className='name'>{name}</h4>
            <p>{text}</p>
        </div>
    </div>        
  )
}
