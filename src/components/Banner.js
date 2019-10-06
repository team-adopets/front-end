import React from 'react'
import "./styles.scss"

const Banner = (props) => {
  return (
        <div className="banner-comp">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="banner">
              <div className="banner-title pt-30">
                  <p>Promo</p>
              </div>
              <div className="banner-content">
                  <h4>{props.title}</h4>
                  <a className="store-link" href={props.imgUrl}>Daftar Sekarang</a>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Banner
