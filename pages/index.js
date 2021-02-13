import Header from './components/Head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Header />
      <motion.div
        className="homepage"
        layoutId="homepage"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container">
          <div className="main">
            <h1>Alice</h1>
            <motion.p>
              Alice is a frontend engineer based in New York. In her
              free time, she enjoys&nbsp;
              <a
                href="https://instagram.com/madeinhellskitchen/"
                target="_blank"
              >
                cross stitch
              </a>
              , games, hiking, and finishing the day with a good
              dessert! She wouldn't say cooking is her hobby, but she
              loves eating good food so she spends a lot of time
              looking at recipes and crafting meals.
            </motion.p>
            <div className="grid">
              <a className="card" href="recipes">
                <h3>
                  Recipes <span>&rarr;</span>
                </h3>
                <p>A collection of my favorite recipes.</p>
              </a>
              <a className="card" href="connect">
                <h3>
                  Play Connect 6 <span>&rarr;</span>
                </h3>
                <p>
                  A two player game where black goes first and places
                  one piece in the center of the board. After that,
                  players take turns placing 2 pieces anywhere on the
                  board. The objective is to get 6 in a row of your
                  color.
                </p>
              </a>
            </div>
          </div>
          <div
            className="image"
            style={{ backgroundImage: `url("/profile.jpeg")` }}
          />
        </div>
      </motion.div>
    </div>
  );
}
