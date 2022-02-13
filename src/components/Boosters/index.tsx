import Booster from './Booster';
import { gyorsitok } from '../../providers/gyorsitok';

interface Props {}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="gyorsitok-container">
      {gyorsitok.map((gyorsitok: Record<string, any>, index: number) => (
        <Booster
          image={gyorsitok.image}
          desc={gyorsitok.desc}
          color={gyorsitok.color}
          cost={gyorsitok.cost}
          qty={gyorsitok.qty}
          key={index}
        />
      ))}
    </div>
  );
};

export default Page;
