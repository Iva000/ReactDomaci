import React from "react";

const OneAnimal = ({ animal }) => {
  return (
    <div className="animal-card">
      <h3 className="card-title">{animal.title}</h3>
      <img
        className="card-image-top"
        src={animal.img}
        height="350"
        width="697"
      ></img>
      <div className="card-body">
        <p className="card-text">{animal.description}</p>
      </div>
    </div>
  );
};

export default OneAnimal;
