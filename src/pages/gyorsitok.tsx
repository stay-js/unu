import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import gyorsitok from '../utils/gyorsitok';

const Gyorsitok: NextPage = () => (
  <>
    <Head>
      <title>Gyorsítok - Unu Kártyajáték</title>
      <meta property="og:title" content="Gyorsítok - Unu Kártyajáték" key="title" />
      <meta name="twitter:title" content="Gyorsítok - Unu Kártyajáték" />

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

    <main>
      <h1 className="text-center font-serif text-2xl font-bold mb-4">Gyorsítok</h1>
      <h2 className="text-xl font-semibold">Leírás</h2>
      <p className="text-justify">
        A gyorsítók szintén kártyák, csak nem karakterek, hanem a karaktereknek adnak plusz
        tulajdonságokat. Például van olyan gyorsító, amit, ha egy játékos lerak, akkor több körön
        keresztül másfélszer többet sebeznek a kártyái, de olyan is van, ami, lerakását követően a
        következő játékos sebzésé megfeleződik. Továbbá van olyan is ami plusz energiát ad a
        következő körben, vagy amit ha használsz, a következő körben egy energiával kevesebbe
        kerülnek a kátyáid, akad ami az ellenfeledtől levon három energiát, vagy immunis leszel a
        támadásokra a következő körre, vagy amivel az ellenfél előző körében kijátszott kártyájának
        hatását megfordíthatod, vagy a következő körben az ellenfél kevesebb energiával kezd, végül
        de nem utolsó sorban olyan kártya is van, ami másfélszeres sebzést ad abban a körben, amikor
        kijátsszák, de ha van pajzsa az ellenfélnek akkor a támadást kivédi az ellenfél.
      </p>

      <h2 className="text-xl font-semibold mt-6">Gyorsítok Listája:</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 my-4 gap-4 animate-slideIn">
        {gyorsitok.map((item) => (
          <Card item={item} key={item.color} />
        ))}
      </div>
    </main>
  </>
);

export default Gyorsitok;
