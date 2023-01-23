import RspImage from "../comps/rspImage";
import VButton from "../comps/Vbutton";
import './productComp.scss';

export default function ProductComp({ imgSrc, title, price, desc, rating, ribbon }) {
  let num = Math.min(Math.abs(rating), 5);
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(<i key={i} className="fa fa-star" style={{ color: "gold" }}></i>);
  }


  return (
    <div className="products">
      <div className="addWishListBtn">
        <i className="material-symbols-outlined">favorite</i>
      </div>

      <div className="prodOptions">
        <div className="productImageContainer">
          <div className={`ribbonContainer ${ribbon === 'new' ? "orange" : "red"}`}>
            {ribbon}
          </div>
          <RspImage classname="img productImage" src={imgSrc} alt="product" />
        </div>

        <div className="productInfo">
          <div className="productTitle">
            <div className="title&Price">{title}</div>
            <div className="title&Price">{price} DH</div>
          </div>
          {/* limit the description by some value later !!! */}
          <div className="prodDescription h-50">{desc}</div>
        </div>
      </div>


      <div className="productRateAndAdd">
        <div className="rating">{arr}</div>
        <div className="addDiv">
          <VButton content={<i className="fa fa-plus"></i>} color={"secondary addToCartBtn"} />
        </div>
      </div>
    </div>
  );
}
