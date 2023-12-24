import "./Calculator.scss";
// import { useState } from "react";
import { buttonList } from "../../data";
export default function Calculator() {

  // const [result, setResult] = useState(0);

  // const num = () => {
  //   return buttonList[0].text

  // }

  return (
    <div className="main">
      <h1>calc</h1>

      <div className="result">
        {/* <p>{num()}</p> */}
      </div>

      <div className="input">
        {buttonList.map((button, id) => {
          if ((id + 1) % 4 === 0) {
            return (
              <>
                {" "}
                <button className={button.class} key={id}>
                  {button.text}
                </button>
                <p className="break"></p>{" "}
              </>
            );
          } else {
            return (
              <button className={button.class} key={id}>
                {button.text}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
