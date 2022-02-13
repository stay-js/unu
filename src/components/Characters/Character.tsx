interface Props {
  name: string;
  desc: string;
  cost: number;
  qty: number;
}

const Character: React.FC<Props> = (props) => {
  const { name, desc, cost, qty } = props;

  return (
    <div className="karakter">
      {/* <div className="karakter-image-container">
        <img
          src={'https://cdn.zsuzsabazara.hu/' + titleImg}
          alt={title}
          title={title}
          className="product-image"
        />
      </div> */}
      <div className="karakter-content">
        <p className="karakter-name">{name}</p>
        <p className="karakter-desc">{desc}</p>
        <p className="karkater-cost">Energia költség: {cost}</p>
        <p className="karkate-qty">Mennyiség (db/pakli): {qty}</p>
      </div>
    </div>
  );
};

export default Character;
