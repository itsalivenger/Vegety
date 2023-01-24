import TitleDescription from "../comps/titleDescription";
import VButton from "../comps/Vbutton";
import ProductComp from "./productComp";
import products from "./products";
import "./thirdSection.scss";

let ThirdSection = ()=> {
  return (
    <section className="sections thirdContent">
      <TitleDescription
        title={"Produits Plus Populaires"}
        description={
          "Découvrez nos produits les plus populaires parmi nos clients ! Ces articles ont été sélectionnés pour leur qualité exceptionnelle et leur grande popularité. Commandez dès maintenant et faites l'expérience de nos produits les plus appréciés."
        }
      />
      <div className="slider">
        <div className="productsContainer">
          {products.map(({imgSrc, title, price, desc, rating, ribbon}, i)=>{
            return <ProductComp
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              price={price}
              rating={rating}
              ribbon={ribbon}
              key={i}
            />
          })}
        </div>
      </div>
      <div className="seeProductsBtnContainer">
        <VButton color="secondary" content="Visiter Les Produits Populaires" />
      </div>
    </section>
  );
}

export default ThirdSection;