import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
import { operators } from "../../../data";

export const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className ="operators">
      {/* STEP 3 - Use .map() to iterate over your array 
       data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
        
       {operatorState.map((item, index) => {
         console.log(item.char)
        return <OperatorButton key={index} item={item.char} />
       
      })}
    </div>
  );
};

export default Operators;