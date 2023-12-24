import "./Calculator.scss";
import { useState } from "react";
import { buttonList } from "../../data";
export default function Calculator() {

  const [result, setResult] = useState(``);



  return (
    <div className="main">
      <h1>calc</h1>

      <div className="result">
        <p>{result}</p>
      </div>

      <div className="input">
        {buttonList.map((button, id) => {
          if ((id + 1) % 4 === 0) {
            return (
              <>
                {" "}
                <button className={button.class} key={id} onClick={() => setResult(result + button.text)}>
                  {button.text}
                </button>
                <p className="break"></p>{" "}
              </>
            );
          } else {
            return (
              <button className={button.class} key={id} onClick={() => setResult(result + button.text)}>
                {button.text}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
