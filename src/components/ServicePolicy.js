import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";

const ServicePolicy = props => {
  return (
    <div className="col-md-4 col-sm-4">
      <ScrollAnimation animateIn="fadeInRight" duration={1}>
        <div className="service-policy-item mb-30">
          <div className="icon">
            <FontAwesomeIcon icon={props.icon} color="#91b237" size="lg" />
          </div>

          <h5>{props.title}</h5>

          <p>{props.desc}</p>
        </div>
      </ScrollAnimation>
    </div>
  );
};
export default ServicePolicy;
