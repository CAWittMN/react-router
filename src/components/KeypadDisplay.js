import "./KeypadDisplay.css";

const KeypadDisplay = ({ value }) => {
  return (
    <div className="KeypadDisplay col-12 text-center bg-dark w-75 m-auto mb-3">
      <span className="KeypadDisplay-text text-danger">{value}</span>
    </div>
  );
};

export default KeypadDisplay;
