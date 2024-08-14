import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src="images/meals.jpg" alt="Background Image" />
      </div>
    </>
  );
}

export default Header;
