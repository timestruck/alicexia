import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/Head';
import Nav from '../components/Nav';

const Recipe = () => {
  const router = useRouter();
  const { rid } = router.query;

  const [RECIPES, setRECIPES] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://spreadsheets.google.com/feeds/list/1ZcH3Qsrk_7P0t3Kdr1awtpTd90g5-0h8KWGyIKEXlhU/od6/public/values?alt=json`
      );
      const data = await response.json();

      setRECIPES(data.feed.entry);
    };

    fetchData();
  }, []);

  const recipe = RECIPES[rid?.split('-')[0]];

  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      className="page recipe"
    >
      <Header title="Recipes" />
      <Nav recipe />
      {recipe && (
        <div className="container">
          <div className="title">
            <h2>{recipe.gsx$name.$t}</h2>
            {recipe.gsx$link.$t && (
              <a target="_blank" href={recipe.gsx$link.$t}>
                <span className="material-icons">ios_share</span>
              </a>
            )}
          </div>

          <motion.div
            initial={{ transform: 'translateX(-30px)', opacity: 0 }}
            animate={{ transform: 'translateX(0px)', opacity: 1 }}
            exit={{ transform: 'translateX(-30px)', opacity: 0 }}
            key={router.route}
          >
            <h3>Ingredients</h3>
            {recipe.gsx$ingredients.$t.split(';').map((ing, i) => (
              <p key={i} className="ingredients">
                {ing}
              </p>
            ))}
            {recipe.gsx$image.$t && (
              <div
                className="recipeImageMobile"
                style={{
                  backgroundImage: `url("${recipe.gsx$image.$t}")`,
                }}
              />
            )}
            <h3>Instructions</h3>
            {recipe.gsx$description.$t.split('/n').map((p, i) => (
              <p key={i}>
                <span>Step {i + 1}:</span> {p}
              </p>
            ))}
          </motion.div>
          {recipe.gsx$image.$t && (
            <motion.div
              className="image"
              initial={{
                transform: 'translateX(30px)',
                opacity: 0,
              }}
              animate={{ transform: 'translateX(0px)', opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="plateImage"
                style={{ backgroundImage: `url("/plate.png")` }}
              />
              <div
                className="recipeImage"
                style={{
                  backgroundImage: `url("${recipe.gsx$image.$t}")`,
                }}
              />
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Recipe;
