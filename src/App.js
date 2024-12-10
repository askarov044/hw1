import { useState } from "react";
import Count from "./Count";
import Value from "./Value";

function App() {

  const [count, setCount] = useState(0);
  
  const countPlus = () => {
    if(count < 15)  setCount(prevCount => prevCount + 5)
  };

  const countMinus = () => {
   if(count > 0) setCount(prevCount => prevCount - 5)
  };



  return (
    <div>
      <Value count={count}/>
      <Count countPlus={countPlus} countMinus={countMinus}/>
    </div>
  );
}

export default App;