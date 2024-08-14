import React from "react";
import classes from "./Card.module.css";
import CartContext from "../../store/cart-context";

function Card({ children }) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
