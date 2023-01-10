import React from "react";
import OneAnimal from "./OneAnimal";
import "./animals.css";

const Animals = ({ animals }) => {
  const filtered = animals.map((animal) => (
    <OneAnimal key={animal.id} animal={animal} />
  ));
  return <>{filtered}</>;
};

export default Animals;
