import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Úri népek uralma Kártyajáték - Very Pesti(s)ek</title>
      <meta
        property="og:title"
        content="Úri népek uralma Kártyajáték - Very Pesti(s)ek"
        key="title"
      />
      <meta name="twitter:title" content="Úri népek uralma Kártyajáték - Very Pesti(s)ek" />

      <meta
        name="description"
        content="Az Úri népek uralma egy kártyajáték, ami az adott kártyák
          különböző karaktereire alapszik. 52 lapos a pakli, 2-8 játékos ajánlott
          Az egész kártyajáték középkori stílusú. Különböző karakterekből különböző
          mennyiségű kártya van. Amit játékmenetről tudni kell/játékszabály:
          Minden játékos 100 élettel kezd, körönként minden játékos maximum 10 energiát
          használhat el. A játékot mindenki 6 lappal kezdi. A karakterek különböző
          tulajdonságokkal rendelkeznek."
      />
      <meta
        property="og:description"
        content="Az Úri népek uralma egy kártyajáték, ami az adott kártyák
          különböző karaktereire alapszik. 52 lapos a pakli, 2-8 játékos ajánlott
          Az egész kártyajáték középkori stílusú. Különböző karakterekből különböző
          mennyiségű kártya van. Amit játékmenetről tudni kell/játékszabály:
          Minden játékos 100 élettel kezd, körönként minden játékos maximum 10 energiát
          használhat el. A játékot mindenki 6 lappal kezdi. A karakterek különböző
          tulajdonságokkal rendelkeznek."
      />
      <meta
        name="twitter:description"
        content="Az Úri népek uralma egy kártyajáték, ami az adott kártyák
          különböző karaktereire alapszik. 52 lapos a pakli, 2-8 játékos ajánlott
          Az egész kártyajáték középkori stílusú. Különböző karakterekből különböző
          mennyiségű kártya van. Amit játékmenetről tudni kell/játékszabály:
          Minden játékos 100 élettel kezd, körönként minden játékos maximum 10 energiát
          használhat el. A játékot mindenki 6 lappal kezdi. A karakterek különböző
          tulajdonságokkal rendelkeznek."
      />
    </Head>

    <main>
      <h1 className="text-center font-serif text-2xl font-bold mb-4">Úri népek uralma</h1>
      <div className="text-justify animate-fadeUp">
        <p className="mb-4">
          Az Úri népek uralma egy kártyajáték, ami az adott kártyák különböző karaktereire alapszik.
          52 lapos a pakli, 2-8 játékos ajánlott.
        </p>
        <p className="mb-4">
          Az egész kártyajáték középkori stílusú. Különböző karakterekből különböző mennyiségű
          kártya van. Amit játékmenetről tudni kell/játékszabály:
        </p>
        <p className="mb-4">
          Minden játékos 100 élettel kezd, körönként minden játékos maximum 10 energiát használhat
          el. A játékot mindenki 6 lappal kezdi. A karakterek különböző tulajdonságokkal
          rendelkeznek.
        </p>
        <p className="mb-4">
          Az nyer, aki a legtovább életben marad. Például az első játékos lerak egy olyan kártyát,
          ami 6-ot sebez, ez neki 8 energiába került, ezután még lerakhatna, (hogyha van neki olyan
          kártyája) egy 2 energiába kerülő kártyát, de azt is megteheti, hogy nem rak le, „ment”,
          ekkor a következő körre amennyi energiát ment, annak a felét megkapja, a 10-en felül
          annyival több energiával kezd.
        </p>
        <div className="flex gap-8 my-5 mx-auto w-fit">
          <Link href="/karakterek">
            <a className="text-white bg-slate-700 px-4 py-2 rounded border-solid border-2 border-slate-700 hover:text-slate-700 hover:bg-transparent transition-all">
              Karakterek
            </a>
          </Link>
          <Link href="/gyorsitok">
            <a className="text-white bg-slate-700 px-4 py-2 rounded border-solid border-2 border-slate-700 hover:text-slate-700 hover:bg-transparent transition-all">
              Gyorsítók
            </a>
          </Link>
        </div>
      </div>
    </main>
  </>
);

export default Home;
