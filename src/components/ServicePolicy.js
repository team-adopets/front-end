import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ServicePolicy = props => {
  return (
    <div className="col-md-4 col-sm-4">
      <div className="service-policy-item mb-30">
        <div className="icon">
          <FontAwesomeIcon icon={props.icon} color="#91b237" size="lg" />
        </div>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
export default ServicePolicy;
