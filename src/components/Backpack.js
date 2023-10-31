import Snack from "./Snack";

const Backpack = ({ mySnacks, eatSnack }) => {
  const handleEat = (name) => {
    const newSnacks = mySnacks.filter((snack) => snack.name !== name);
    eatSnack(newSnacks);
  };

  const snacks = mySnacks.map((snack, idx) => {
    return <Snack key={idx} name={snack.name} eat={handleEat} />;
  });

  return (
    <div className="Backpack w-100 text-center container">
      <h1>Backpack</h1>
      <div className="row justify-content-center">{snacks}</div>
    </div>
  );
};

export default Backpack;
