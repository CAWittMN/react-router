import "./SnackBay.css";

const SnackBay = ({ snack }) => {
  const { name, price, code } = snack;

  return (
    <div className="SnackBay col-3 mt-3 me-0 ms-3 pb-0 text-center">
      <div className="card border-success bg-dark mb-3">
        <div className="SnackBay-name border text-white card-header">
          {name}
        </div>
        <div className="SnackBay-price  card-body">
          <h5 className="card-title text-success">${price.toFixed(2)}</h5>
          <h5 className="card-text text-danger">{code}</h5>
        </div>
      </div>
    </div>
  );
};

export default SnackBay;
