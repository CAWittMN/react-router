const Snack = ({ name, eat }) => {
  return (
    <div className="Snack shadow col-3 m-3 card">
      <h5 className="card-title">{name}</h5>
      <button className="btn btn-lg py-1 border" onClick={() => eat(name)}>
        🍽️
      </button>
    </div>
  );
};

export default Snack;
