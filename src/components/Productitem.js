import React from "react";
import "./styles.scss";

const Productitem = () => {
  return (
    <div className="col-md-4 col-sm-4 mb-30">
      <div className="product-item">
        <div className="product-thumb overlay">
          {/* <img src="../assets/siberianhusky.jpg" alt=""/> */}
          <div className="stock">5 STOCK</div>
          <div className="add-keranjang">Masukan Keranjang</div>
        </div>

        <div className="product-caption">
          <div className="product-desc">
            <h3 className="species">Purebred</h3>
            <h3 className="dog-name">Siberian Husky</h3>
            <h3 className="price">IDR - 3.500.000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
