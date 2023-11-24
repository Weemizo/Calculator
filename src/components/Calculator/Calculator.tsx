import "./Calculator.scss";
import { buttonList } from "../../data";
export default function Calculator() {
  return (
    <div className="main">
      <h1>calc</h1>

      <div className="result"></div>

      <div className="input">
        {
          buttonList.map((button, id) => {
            if ((id + 1) % 4 === 0) {
              return <> <button className={button.class} key={id}>{button.text}</button>
               <p className="break"></p> </>
            } else {
              return <button className={button.class} key={id}>{button.text}</button>
            }
          })
        }
      </div>
    </div>
  );
}
