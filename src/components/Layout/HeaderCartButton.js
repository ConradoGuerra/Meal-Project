import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonBump, setButtonBump] = useState(false);
  //Getting the cart context object
  const cartCtx = useContext(CartContext);

  //Verifying the class of bump button, if true, then will bump
  const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`;

  //Using useEffect to bump the button
  useEffect(() => {
    //If there is not an item, then return
    if (cartCtx.items.length === 0) {
      return;
    }
    //If not then will bump the button
    setButtonBump(true);

    //Setting a timer to return the bump to original state
    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 300);

    return () => {
      //Clearing the timer
      clearTimeout(timer)
    }
  }, [cartCtx.items]);

  //Reducing the items of the cart (the item product will have an amount of items)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
