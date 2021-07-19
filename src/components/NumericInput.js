import React from "react";
import * as classes from './NumericInput.module.css';

const NumericInput = ({ onIncrement, onDecrement, className, ...props }) => {

  return (
    <div className={className}>
      <input
        className={classes.form__input}
        type="numeric"
        {...props}
      />
      <button
        className={classes.form__btn}
        onClick={onIncrement}
      >+
      </button>
      <button
        className={classes.form__btn}
        onClick={onDecrement}
      >-
      </button>
    </div>
  )
}

export default NumericInput;
