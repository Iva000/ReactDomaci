import React from "react";

const CartProduct = ({ ticket }) => {
  return (
    <div className="card-cart">
      <img
        className="card-image-top"
        src={ticket.img}
        height="100"
        width="200"
      ></img>
      <div className="card-body">
        <h3 className="card-title">{ticket.title}</h3>
        <p className="card-text">{ticket.description}</p>
        <p className="card-price">Cena: {ticket.price}</p>
        <h3>Kolicina: {ticket.amount}</h3>
      </div>
    </div>
  );
};

export default CartProduct;
