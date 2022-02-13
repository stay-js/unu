interface Props {
  image: string;
  name: string;
  desc: string;
  cost: number;
  qty: number;
}

const Character: React.FC<Props> = (props) => {
  const { image, name, desc, cost, qty } = props;

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-name">{name}</p>
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

export default Character;
