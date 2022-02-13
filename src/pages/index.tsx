import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface Props {}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Úri népek uralma Kártyajáték - Very Pesti(s)ek</title>
        <meta
          name="description"
          content="Úri népek uralma Kártyajáték - Very Pesti(s)ek"
        />
      </Head>

      <main className="landing-page content">
        <h1 className="landing-page-title">Úri népek uralma</h1>
        <div className="landing-page-content">
          <p>
            Az Úri népek uralma egy kártyajáték, ami az adott kártyák a
            különböző karaktereire alapszik. 52 lapos a pakli, 2-8 játékos
            ajánlott.
          </p>
          <p>
            Az egész kártyajáték középkori stílusú. Különböző karakterekből
            különböző mennyiségű kártya van. Amit játékmenetről tudni
            kell/játékszabály:
          </p>
          <p>
            Minden játékos 100 élettel kezd, körönként minden játékos maximum 10
            energiát használhat el. A játékot mindenki 6 lappal kezdi. A
            karakterek különböző tulajdonságokkal rendelkeznek.
          </p>
          <p>
            Az nyer, aki a legtovább életben marad. Például az első játékos
            lerak egy olyan kártyát, ami 6-ot sebez, ez neki 8 energiába került,
            ezután még lerakhatna, (hogyha van neki olyan kártyája) egy 2
            energiába kerülő kártyát, de azt is megteheti, hogy nem rak le,
            „ment”, ekkor a következő körre amennyi energiát ment, annak a felét
            megkapja, a 10-en felül annyival több energiával kezd.
          </p>
          <div className="landing-page-nav">
            <Link href="/karakterek">
              <a className="landing-page-btn">Karakterek</a>
            </Link>
            <Link href="/gyorsitok">
              <a className="landing-page-btn">Gyorsítók</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
