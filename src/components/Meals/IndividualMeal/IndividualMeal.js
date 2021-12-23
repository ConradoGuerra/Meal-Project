import classes from "./IndividualMeal.module.css";
import IndividualMealForm from "./IndividualMealForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const IndividualMeal = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })

  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <IndividualMealForm id={props.id} onAddToCart={AddToCartHandler}/>
      </div>
    </li>
  );
};

export default IndividualMeal;
