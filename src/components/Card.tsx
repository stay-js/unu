import Image from 'next/image';

interface Item {
  image: string;
  name?: string;
  color?: string;
  desc: string;
  cost: number;
  qty: number;
}

const Character: React.FC<{ item: Item }> = ({ item }) => {
  const { image, name, color, desc, cost, qty } = item;

  return (
    <div className="w-full rounded-2xl shadow-lg overflow-hidden">
      <Image
        className="w-full object-cover object-center transition-transform duration-200 hover:scale-125 select-none"
        src={image}
        alt={name || color}
        width={640}
        height={898}
      />
      <div className="p-4">
        {name && <p className="font-serif font-bold text-lg">{name}</p>}
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
