import type { NextPage } from 'next';
import Head from 'next/head';
import Booster from '../components/Booster';
import { gyorsitok } from '../providers/gyorsitok';

interface Props {}

const Gyorsitok: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Gyorsítok - Unu Kártyajáték</title>
        <meta
          property="og:title"
          content="Gyorsítok - Unu Kártyajáték"
          key="title"
        />
        <meta name="twitter:title" content="Gyorsítok - Unu Kártyajáték" />

        <meta name="url" content="https://unu.stayy.xyz/gyorsitok" />
        <meta property="og:url" content="https://unu.stayy.xyz/gyorsitok" />
        <meta
          property="twitter:url"
          content="https://unu.stayy.xyz/gyorsitok"
        />

        <meta
          name="description"
          content="A gyorsítók szintén kártyák, csak nem karakterek, hanem a
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
          ellenfél."
        />
        <meta
          property="og:description"
          content="A gyorsítók szintén kártyák, csak nem karakterek, hanem a
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
          ellenfél."
        />
        <meta
          name="twitter:description"
          content="A gyorsítók szintén kártyák, csak nem karakterek, hanem a
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
          ellenfél."
        />
      </Head>

      <main className="gyorsitok content">
        <h1 className="gyorsitok-title">Gyorsítok</h1>
        <h2 className="gyorsitok-sub-title">Leírás</h2>
        <p className="gyorsitok-content">
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

        <h2 className="gyorsitok-sub-title">Gyorsítok Listája:</h2>
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
      </main>
    </>
  );
};

export default Gyorsitok;
