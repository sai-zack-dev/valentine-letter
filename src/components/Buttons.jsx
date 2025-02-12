import RunawayButton from "./RunawayButton";
import "../styles/buttons.scss";

function Buttons({ buttons, onYesClick }) {
  return (
    <div className="buttons">
      {buttons.map((btn, index) => {
        if (btn.type === "runaway") {
          return <RunawayButton key={index} text={btn.text} />;
        } else if (btn.type === "disable") {
          return (
            <button key={index} className="disabled" disabled>
              {btn.text}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              onClick={btn.text === "Yes" ? onYesClick : undefined}
            >
              {btn.text}
            </button>
          );
        }
      })}
    </div>
  );
}

export default Buttons;
