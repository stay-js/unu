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
    <div className="gyorsito">
      <div className="gyorsito-image-container">
        <div className="gyorsito-image">
          <img src={image} alt={color} className="karakter-image" />
        </div>
      </div>
      <div className="gyorsito-content">
        <p className="gyorsito-desc">{desc}</p>
        <p className="gyorsito-cost">Energia költség: {cost}</p>
        <p className="gyorsito-qty">Mennyiség (db/pakli): {qty}</p>
      </div>
    </div>
  );
};

export default Booster;
