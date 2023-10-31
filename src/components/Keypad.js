import { useState } from "react";
import KeypadBtn from "./KeypadBtn";
import KeypadDisplay from "./KeypadDisplay";
import { keyPadInputs } from "../vendData";

const Keypad = ({ onSelect }) => {
  const [inputCode, setInputCode] = useState("");

  const setDisabled = (val) => {
    if (val === "⌫" || val === "☑") {
      return false;
    }
    return inputCode.length === 2;
  };

  const asignKeyFunction = (val) => {
    if (val === "⌫") {
      return handleDelete;
    } else if (val === "☑") {
      return handleSelect;
    } else {
      return handleInput;
    }
  };

  const handleInput = (e) => {
    if (inputCode.length > 2) {
      setInputCode("");
    }
    setInputCode((code) => code + e.target.value);
  };

  const handleDelete = () => {
    setInputCode((code) => code.slice(0, -1));
  };

  const handleSelect = () => {
    try {
      onSelect(inputCode);
      setInputCode("ENJOY");
    } catch (error) {
      setInputCode(error.message);
    }
  };

  const buttons = keyPadInputs.map((row) => (
    <div className="KeypadButtons w-75 m-auto row">
      {row.map((val) => (
        <KeypadBtn
          value={val}
          disabled={setDisabled(val)}
          onClick={asignKeyFunction(val)}
        />
      ))}
    </div>
  ));

  return (
    <div className="Keypad shadow ms-3 col m-auto">
      <div className="row">
        <KeypadDisplay value={inputCode} />
      </div>

      <div className="Keypad-buttons  container">{buttons}</div>
    </div>
  );
};

export default Keypad;
