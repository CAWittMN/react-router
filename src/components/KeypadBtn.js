const KeypadBtn = ({ value, onClick, disabled }) => (
  <button
    className="KeypadBtn p-2 m-1 text-danger col-lg text-center btn btn-warning col-1"
    disabled={disabled}
    onClick={onClick}
    value={value}
  >
    {value}
  </button>
);

export default KeypadBtn;
