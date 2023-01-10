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
      <h1>Zivotinje koje mozete pronaci u nasem zooloskom vrtu!</h1>
      <div className="navy georgia ma0 grow">
        <h3 className="f2">Pretrazi zivotinje</h3>
      </div>
      <div className="pa2">
        <input
          className="pa3"
          type="search"
          placeholder="Pretrazi zivotinje"
          onChange={handleChange}
        />
      </div>
      {showAnimals()}
    </section>
  );
}

export default Search;
