interface Props {
  image: string;
  color: string;
  desc: string;
  cost: number;
  qty: number;
}

const Booster: React.FC<Props> = (props) => {
  const { image, color, desc, cost, qty } = props;

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={color} className="card-image no-select" />
      </div>
      <div className="card-content">
        <p className="card-desc">{desc}</p>
        <p className="card-cost">
          Energia költség: <b>{cost}</b>
        </p>
        <p className="card-qty">
          Mennyiség (db/pakli): <b>{qty}</b>
        </p>
      </div>
    </div>
  );
};

export default Booster;
