import React from "react";

const OneAnimal = ({ animal }) => {
  return (
    <div className="card">
      <img
        className="card-image-top"
        src={animal.img}
        height="350"
        width="700"
      ></img>
      <div className="card-body">
        <h3 className="card-title">{animal.title}</h3>
        <p className="card-text">{animal.description}</p>
      </div>
    </div>
  );
};

export default OneAnimal;
