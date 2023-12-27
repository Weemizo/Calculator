import "./Calculator.scss";
import { useState } from "react";
import { buttonList } from "../../data";
export default function Calculator() {
  const [result, setResult] = useState(``);

  const resultHandler = ({
    className,
    text,
  }: {
    className: string;
    text: string;
  }) => {
    if (className === "del") {
      typeof result === "number"
        ? setResult(``)
        : setResult(result.slice(0, -1));
    } else if (className === "reset") {
      setResult(``);
    } else if (className === "equal") {
      setResult(eval(result));
    } else setResult(result + text);
  };

  return (
    <div className="main">
      <h1>calc</h1>

      <div className="result">{result}</div>

      <div className="input">
        {buttonList.map((button) => {
          return (
            <>
              {" "}
              <button
                className={button.className}
                key={button.id}
                onClick={() => {
                  resultHandler(button);
                }}
              >
                {button.text}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}
