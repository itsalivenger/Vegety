import "./fourthSection.scss";
import List from "./list";
import RspImage from '../comps/rspImage';
import images from './images.js';
import VButton from "../comps/Vbutton";

export default function FourthSection() {
  return (
    <section className="sections fourthContent">
      <div className="titleAndText textAndImg">
        <h2>All of our products are handled with care</h2>
        <p>
          Avec Vegety, vous pouvez facilement comparer les prix et les produits,
          et même configurer des livraisons récurrentes pour les articles que
          vous achetez fréquemment. De plus, les achats de denrées alimentaires
          en ligne avec Vegety éliminent la nécessité de se rendre physiquement
          dans un magasin et de naviguer dans les foules et les longues files
          d'attente, vous faisant économiser du temps et des efforts.
        </p>

        <div className="checkList">
          <List
            content={
              "Avec Vegety, vous pouvez facilement faire vos courses depuis le confort de votre propre maison."
            }
          />

          <List
            content={
              "Les achats de courses en ligne avec Vegety éliminent la nécessité de se rendre physiquement dans un magasin, vous faisant gagner du temps et de l'effort."
            }
          />

          <List
            content={
              "Vegety vous permet de mettre en place des livraisons récurrentes pour les articles que vous achetez fréquemment, vous faisant économiser le temps de les commander à nouveau."
            }
          />

          <div className="learnMoreBtn">
            <VButton content="Savoir Plus" color="secondary" />
          </div>
        </div>
      </div>


      <div className="imagesMasonry textAndImg">
            <div className="images1 imgsRow">
              <div className="imgContainer">
                <RspImage src={images[0]} alt={""} classname="" />
              </div>

              <div className="imgContainer">
                <RspImage src={images[1]} alt={""} classname="" />
              </div>
            </div>

            <div className="images2 imgsRow">
              <div className="imgContainer">
                <RspImage src={images[2]} alt={""} classname="" />
              </div>

              <div className="imgContainer">
                <RspImage src={images[3]} alt={""} classname="" />
              </div>
            </div>
      </div>
    </section>
  );
}
