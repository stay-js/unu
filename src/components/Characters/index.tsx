import Character from './Character';
import { karakterek } from '../../providers/karakterek';

interface Props {}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="karakterek-container">
      {karakterek.map((karakter: Record<string, any>, index: number) => (
        <Character
          name={karakter.name}
          desc={karakter.desc}
          cost={karakter.cost}
          qty={karakter.qty}
          key={index}
        />
      ))}
    </div>
  );
};

export default Page;
