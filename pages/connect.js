import { cloneElement, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "./components/Footer";
import styles from "../styles/Connect.module.css";

const PLAYERS = {
  BLACK: "black",
  WHITE: "white",
};

export default function Connect() {
  const router = useRouter();

  const preloadGame = router.query.game?.split(",").map((x) => +x) ?? [180];

  const [player, setPlayer] = useState(PLAYERS.WHITE);
  const [counter, setCounter] = useState(preloadGame.length - 1);
  const [state, setState] = useState(preloadGame); // the board state

  const blackPiece = (position) => {
    if (position < 0 || counter < position) return false;
    return position % 4 === 3 || position % 4 === 0;
  };

  const whitePiece = (position) => {
    if (position < 0 || counter < position) return false;
    return position % 4 === 1 || position % 4 === 2;
  };

  function placePiece(e) {
    if (state.includes(Number(e.currentTarget.dataset.key))) return;

    if (counter < state.length - 1) {
      const newState = state.slice(0, counter + 1);
      setState([...newState, Number(e.currentTarget.dataset.key)]);
    } else {
      setState([...state, Number(e.currentTarget.dataset.key)]);
    }

    // 0 - 1 2 - 3 4 - 5 6 - 7 8
    if (counter % 2 === 1) {
      player === PLAYERS.WHITE
        ? setPlayer(PLAYERS.BLACK)
        : setPlayer(PLAYERS.WHITE);
    }
    setCounter(counter + 1);
  }

  function traverse(direction) {
    console.log("c", counter);
    // traverse backward
    if (direction < 0 && counter >= 1) {
      setCounter(counter - 1);
    }
    // traverse forward
    if (direction > 0 && counter < state.length - 1) {
      setCounter(counter + 1);
    }
  }

  // function copy() {
  //   var Url = document.getElementById("url");
  //   Url.select();
  //   document.execCommand("copy");
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Connect 6</title>
        <link rel="icon" href="/sunflower_logo.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Connect 6</h1>

          <p className={styles.description}>
            Rules: black goes first and places one piece in the center of the
            board. After that, players take turns placing 2 pieces anywhere on
            the board. The objective is to get 6 in a row of your color.
          </p>

          {/* <div>
          <input readOnly id="url" value={`${router.pathname}?game=${state}`} />
          <button onClick={copy}>Share game</button>
          <button onClick={() => router.push(router.pathname)}>New game</button>
        </div> */}

          <div className={styles.description}>
            <span className={styles.code}>{player}</span> player's turn
          </div>
          <div className={styles.arrows}>
            <span onClick={() => traverse(-1)}>&larr;</span>
            <span onClick={() => traverse(1)}>&rarr;</span>
          </div>
        </div>
        <div className={styles.board}>
          {repeat(361, (key) => (
            <div data-key={key} className={styles.square} onClick={placePiece}>
              <div className={styles.verticalLine} />
              <div className={styles.horizontalLine} />
              {blackPiece(state.indexOf(key)) && (
                <div className={styles.black} />
              )}
              {whitePiece(state.indexOf(key)) && (
                <div className={styles.white} />
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function repeat(length, element) {
  return Array.from({ length }).map((_, key) =>
    cloneElement(element(key), { key })
  );
}
