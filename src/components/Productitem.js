import React from "react";
import "./styles.scss";

const Productitem = props => {
  return (
    <div className="col-md-4 col-sm-4 mb-30">
      <div className="product-item">
        <div className="product-thumb overlay">
          <img className="imgItem" src={props.imgUrl} alt=""/>
          <div className="add-keranjang">Masukan Keranjang</div>
        </div>

        <div className="product-caption">
          <div className="product-desc">
            <h3 className="species">{props.species}</h3>
            <h3 className="dog-name">{props.name}</h3>
            <h3 className="price">USD - {props.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
