import { cloneElement, useState } from "react";
import Head from "next/head";
import styles from "../styles/Connect.module.css";

export default function Connect() {
  const [player, setPlayer] = useState("gray");
  const [counter, setCounter] = useState(1);

  function placePiece(e) {
    console.log(e.currentTarget);
    e.currentTarget.style.background = player;

    // 0 - 1 2 - 3 4 - 5 6 - 7 8
    if (counter % 2 === 0) {
      player === "black" ? setPlayer("gray") : setPlayer("black");
    }
    setCounter(counter + 1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Connect 6</title>
        <link rel="icon" href="/sunflower_logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Connect 6</h1>

        <p className={styles.description}>
          Rules: black goes first and places one piece in the center of the
          board. After that, players take turns placing 2 pieces anywhere on the
          board. The objective is to get 6 in a row of your color.
        </p>

        <div className={styles.board}>
          {repeat(361, (key) => (
            <div className={styles.square} onClick={placePiece}>
              <div className={styles.verticalLine} />
              <div className={styles.horizontalLine} />
            </div>
          ))}

          <div className={`${styles.black} ${styles.firstPiece}`} />
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

function repeat(length, element) {
  return Array.from({ length }).map((_, key) =>
    cloneElement(element(key), { key })
  );
}
