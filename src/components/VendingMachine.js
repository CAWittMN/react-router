import Keypad from "./Keypad";
import Window from "./Window";
import "./VendingMachine.css";
import { snacks } from "../vendData";
import { findSnack } from "../helpers";

const VendingMachine = ({ onSelect }) => {
  const handleSelect = (code) => {
    const snack = findSnack(snacks, code);
    if (snack) {
      onSelect((snacks) => [...snacks, snack]);
    } else {
      throw new Error("INVALID CODE");
    }
    return;
  };

  return (
    <div className="VendingMachine container-fluid mb-5 pb-5 position-fixed text-align-center row">
      <Window snacks={snacks} />
      <Keypad onSelect={handleSelect} />
    </div>
  );
};

export default VendingMachine;
