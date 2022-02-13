import type { NextPage } from 'next';
import Head from 'next/head';
import Boosters from '../components/Boosters';

interface Props {}

const Gyorsitok: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Gyorsítok - Unu Kártyajáték</title>
        <meta name="description" content="Gyorsítok - Unu Kártyajáték" />
      </Head>

      <main className="gyorsitok content">
        <h1 className="gyorsitok-title">Gyorsítok</h1>
        <h2>Leírás</h2>
        <p>
          A gyorsítók szintén kártyák, csak nem karakterek, hanem a
          karaktereknek adnak plusz tulajdonságokat. Például van olyan gyorsító,
          amit, ha egy játékos lerak, akkor több körön keresztül másfélszer
          többet sebeznek a kártyái, de olyan is van, ami, lerakását követően a
          következő játékos sebzésé megfeleződik. Továbbá van olyan is ami plusz
          energiát ad a következő körben, vagy amit ha használsz, a következő
          körben egy energiával kevesebbe kerülnek a kátyáid, akad ami az
          ellenfeledtől levon három energiát, vagy immunis leszel a támadásokra
          a következő körre, vagy amivel az ellenfél előző körében kijátszott
          kártyájának hatását megfordíthatod, vagy a következő körben az
          ellenfél kevesebb energiával kezd, végül de nem utolsó sorban olyan
          kártya is van, ami másfélszeres sebzést ad abban a körben, amikor
          kijátsszák, de ha van pajzsa az ellenfélnek akkor a támadást kivédi az
          ellenfél.
        </p>

        <h2>Gyorsítok Listája:</h2>
        <Boosters />
      </main>
    </>
  );
};

export default Gyorsitok;
