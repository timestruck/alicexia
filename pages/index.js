import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alice Xia</title>
        <link rel="icon" href="/sunflower_logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alice Xia</h1>

        <p className={styles.description}>
          I enjoy
          <a
            href="https://instagram.com/madeinhellskitchen/"
            target="_blank"
            className={styles.code}
          >
            cross stitch
          </a>
          , hiking, and finishing the day with a good dessert!
        </p>

        <div className={styles.grid}>
          <a href="connect" className={styles.card}>
            <h3>Play Connect 6 &rarr;</h3>
            <p>
              2 player game where black goes first and places one piece in the
              center of the board. After that, players take turns placing 2
              pieces anywhere on the board. The objective is to get 6 in a row
              of your color.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" className={styles.code}>
          Home
        </a>
        2020
      </footer>
    </div>
  );
}
