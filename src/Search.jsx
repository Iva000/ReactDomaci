import React, { useState } from "react";
import Animals from "./animals";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredAnimals = details.filter((animal) => {
    return animal.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function showAnimals() {
    return <Animals animals={filteredAnimals} />;
  }

  return (
    <section className="garamond">
      <h1>Životinje koje možete pronaći u našem zoološkom vrtu!</h1>
      <div className="navy georgia ma0 grow">
        <h3 className="f2" style={{ marginLeft: 10 }}>
          Pretraži životinje
        </h3>
      </div>
      <div className="pa2" style={{ marginLeft: 10 }}>
        <input
          className="pa3"
          type="search"
          placeholder="Pretraži životinje"
          onChange={handleChange}
        />
      </div>
      {showAnimals()}
    </section>
  );
}

export default Search;
