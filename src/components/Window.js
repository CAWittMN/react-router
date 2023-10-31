import SnackBay from "./SnackBay";

const Window = ({ snacks }) => {
  const snackBays = snacks.map((snack) => {
    return <SnackBay key={snack.id} snack={snack} />;
  });

  return (
    <div className="Window bg-dark mb-3 ps-3 pb-5 mb-5 h-100 overflow-y-scroll col col-8  me-0">
      <div className="row">{snackBays}</div>
    </div>
  );
};

export default Window;
