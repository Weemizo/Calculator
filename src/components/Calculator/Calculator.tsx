import "./Calculator.scss";
import { useState } from "react";
import { buttonList } from "../../data";
export default function Calculator() {

  const [result, setResult] = useState(``);

  // console.log(Math.round(5/7 * 100) / 100) testing rounding 

  console.log(result);

  console.log(result.length)

  return (
    <div className="main">
      <h1>calc</h1>

      <div className="result">
        {result}
      </div>

      <div className="input">
        {buttonList.map((button, id) => {
          if ((id + 1) % 4 === 0) {
            return (
              <>
                {" "}
                <button className={button.class} key={id} onClick={() => {
                  if (button.class === "del") {
                    result === undefined ? setResult(``) : setResult(result.slice(0, -1));
                  } else if (button.class === "reset") {
                    setResult(``);
                  } else if (button.class === "equal") {
                    setResult(eval(result));
                  } else setResult(result + button.text);
                  
                  }}>
                  {button.text}
                </button>
                <p className="break"></p>{" "}
              </>
            );
          } else {
            return (
              <button className={button.class} key={id} onClick={() => {
                if (button.class === "del") {
                  result === undefined ? setResult(``) : setResult(result.slice(0, -1));
                } else if (button.class === "reset") {
                  setResult(``);
                } else if (button.class === "equal") {
                  setResult(eval(result));
                } else setResult(result + button.text);
                
                }}>
                {button.text}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
