import { useEffect, useState } from 'react';
import Header from './components/Head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Nav from './components/Nav';

export default function Recipes() {
  const [RECIPES, setRECIPES] = useState([]);
  const [filter, setFilter] = useState('');
  const router = useRouter();

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

  const grid = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="recipes page">
      <Header title="Recipes" />
      <Nav recipe />
      <div className="container">
        <h2>Recipes</h2>
        <div class="filters">
          {filter !== '' && (
            <button
              className="filterBtn"
              onClick={() => setFilter('')}
            >
              {filter} <span className="material-icons">close</span>
            </button>
          )}
        </div>
        {RECIPES.length ? (
          <motion.div
            className="grid"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={grid}
            key={router.route}
          >
            {RECIPES.map((recipe, i) => {
              const rid =
                i +
                '-' +
                recipe.gsx$name.$t.toLowerCase().split(' ').join('-');

              if (
                filter !== '' &&
                !recipe.gsx$category.$t.includes(filter)
              )
                return;

              return (
                <motion.a
                  variants={card}
                  className="card"
                  href={`/recipe/${rid}`}
                  key={rid}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {recipe.gsx$image.$t && (
                    <div
                      className="recipeImage"
                      style={{
                        backgroundImage: `url("${recipe.gsx$image.$t}")`,
                      }}
                    />
                  )}
                  <h4>{recipe.gsx$name.$t}</h4>
                  <div className="tags">
                    {recipe.gsx$category.$t
                      .split(',')
                      .map((tag, i) => {
                        return (
                          <span
                            className="tag"
                            key={i}
                            onClick={(event) => {
                              setFilter(tag);
                              event.preventDefault();
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
