import './fifthSection.scss';
import Carousel from './carousel';
import imgs from '../firstSection/images';

export default function FifthSection() {
  return (
    <section className='sections fifthContent'>
      <Carousel slides={imgs}/>
    </section>
  )
}
