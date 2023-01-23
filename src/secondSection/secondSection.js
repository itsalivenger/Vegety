import TitleDescription from "../comps/titleDescription";
import CardContent from './content';
import Card from './card';
import './secondSection.scss';

export default function SecondSection() {
  return (
    <section className="sections secondContent">
      <TitleDescription
        title={"Commandez Par Categorie"}
        description={
          "Triez les produits par catégories pour faciliter votre navigation. Choisissez parmi nos différentes catégories, comme fruits & légumes, Herbes et autres. Trouvez facilement ce que vous cherchez."
        }
      />

      <div className="secondSectionCards">
        {CardContent.map(({title, desc, src, alt}, i)=>{
            return <Card src={src} alt={alt} title={title} desc={desc} key={i} />
        })}
      </div>
    </section>
  );
}
