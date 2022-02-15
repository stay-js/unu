import type { NextPage } from 'next';
import Head from 'next/head';
import Characters from '../components/Characters';

interface Props {}

const Karakterek: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Karakterek - Unu Kártyajáték</title>
        <meta name="description" content="Karakterek - Unu Kártyajáték" />
      </Head>

      <main className="karakterek content">
        <h1 className="karakterek-title">Karakterek</h1>
        <h2 className="karakterek-secondary-title">Leírás</h2>
        <p className="karakterek-content">
          Van olyan karakter, ami pajzsot ad, ezt a játékos az életen felül
          kapja. Van, ami több körön keresztül sebez pl.: egy játékos lerak egy
          ilyen kártyát, ami 3 körön keresztül 2-t sebez, akkor 3 körön
          keresztül az utána következő játékost sebzi. Olyan kártya is van, ami
          hatására, a következő játékosnak fel kell húzni egy lapot, illetve
          lehet csere kártya is, amit pedig, ha valaki lerak, a következő
          embernek a kezében lévő lapjaiból ki kell cserélnie egy kártyát (egyet
          választ a kezéből, berakja a pakli alá és felhúzza a pakli első
          kártyáját). Gyógyító is akad, amit, ha valaki használ, amennyit sebez
          az ellenfélbe, annyi életet visszatölt magának. Illetve olyan is van,
          ami az első körben sebez, a második körben pajzsot ad. Továbbá akad,
          ami sebez az ellenfélben pajzsot, ha nincs pajzsa vagy lesebezte a
          pajzsot akkor a maradék sebzés + életté alakul. Vannak még olyanok,
          ami több körön át ad + pajzsot, ami több körön át sebez, vagy ami több
          körön át sebez, illetve pajzsot ad.
        </p>

        <h2 className="karakterek-secondary-title">Karakterek Listája:</h2>
        <Characters />
      </main>
    </>
  );
};

export default Karakterek;
