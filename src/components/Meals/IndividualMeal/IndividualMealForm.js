import classes from "./IndividualMealForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const IndividualMealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  //Using the useRef hook to get the input values
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }

    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        // Getting the references of the input component
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default IndividualMealForm;