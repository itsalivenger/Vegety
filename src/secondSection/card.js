import RspImage from "../comps/rspImage";
import './card.scss';

export default function Card({ src, alt, title, desc }) {
  return (
    <div className="cards">
        <div className="imageContainer">
            <RspImage src={src} alt={alt} />
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>

        <div className="description h-50">
            <p>{desc}</p>
        </div>
    </div>
  );
}
