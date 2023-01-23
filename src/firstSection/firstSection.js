import VButton from "../comps/Vbutton";
import RspImage from '../comps/rspImage';
import imgs from './images.js';
import './firstSection.scss';
// import Carousel from "./carousel;

export default function FirstSection() {
  return (
    <section className="sections firstContent">
        <div className="titleContainer">
            <h1>
                Améliorer votre entreprise avec des ingrédients haut de gamme - Vegety
                Wholesale
            </h1>
            <p>
                Bienvenue chez Vegety, votre destination unique pour tous vos
                besoins en matière de courses. Faites vos courses en ligne chez nous pour bénéficier
                de notre commodité et de notre qualité.
            </p>
        </div>

        <div className="buttonsContainer">
            <VButton key={'1'} content={"Order Now"} color={'secondary'} />
            <VButton key={'2'} content={"Discount Menu"} color={''} />
        </div>

        <div className="imgGalleryFirstContent carousel-container">
            {/* <Carousel> */}
                {imgs.map((img, i)=>{
                    return <div key={i} className="imgsContainerInfirstContent carousel-slide active-slide">
                            <RspImage src={img} alt={"fruits and vegies"} classname={'carousel-slide active-slide'} />
                        </div>
                })}
            {/* </Carousel> */}
        </div>
    </section>
  );
}
