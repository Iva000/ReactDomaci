import React from "react";
import CartProduct from "./cartProduct";

const Cart = ({ cartProducts }) => {
  return (
    <div className="cart-container">
      <h1>Ovo je vasa korpa</h1>
      {cartProducts.map((ticket) => (
        <CartProduct key={ticket.id} ticket={ticket} />
      ))}
      Korpa je prazna.
    </div>
  );
};

export default Cart;
