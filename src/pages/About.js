import React, { Component } from "react";
import "./styles.scss";
import Lottie from 'react-lottie'
import animationData from "../helper/6975-god-boy.json"
class About extends Component {
  
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="about section-spacer">
        <div className="container">
          <div className="row">
            <div className="col">
                <h1 className="about-us-text">About Us</h1>
                <h2>
                  
We provide the best pets, healthy, and certainly funny
                </h2>
                <p>
                AdoPet is an online platform for finding pets especially "dogs". AdoPet is still small and growing. With the existence of AdoPet this can help you and your family find the pet, especially the dog that you are looking for. 
                </p>
            </div>
            <div className="col">
              <div className="center">
                <Lottie options={defaultOptions}
                height={400}
                width={400}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
