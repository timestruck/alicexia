import { useEffect, useState } from 'react';
import Head from "next/head";
import styled from 'styled-components';

import Nav from './components/Nav';

export default function Recipes() {
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

  return (
    <div className="recipe page">
      <Head>
        <title>Alice Xia</title>
        <link rel="icon" href="/sunflower_logo.png" />
        <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      </Head>
      <Nav recipe />
      <Container>
        <h2>Recipes</h2>
        <Grid>
          {RECIPES.map((recipe, i) => {
            const rid = i + '-' + recipe.gsx$name.$t.toLowerCase().split(' ').join('-');

            return (
              <Card href={`/recipe/${rid}`}>
                {recipe.gsx$image.$t && (
                  <RecipeImage style={{ backgroundImage: `url("${recipe.gsx$image.$t}")` }} />
                )}
                <h4>{recipe.gsx$name.$t}</h4>
                <Tags>
                  {recipe.gsx$category.$t.split(',').map((tag, i) => {
                    return (
                      <Tag key={i}>{tag}</Tag>
                    )
                  })}
                </Tags>
              </Card>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat( auto-fit, minmax(12rem, 15rem) );
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 9rem 2rem 3rem;
  
  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

const Card = styled.a`
  border: 1px solid #1421A3;
  padding: 1rem;

  h4 {
    margin: 1rem 0 0;
  }
`;

const RecipeImage = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;

  &::after {
    content: ' ';
    display: block;
    padding-bottom: 100%;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.div`
  border-radius: 0.3rem;
  background: #1421A3;
  color: #FCF4ED;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  padding: 0.1rem 0.5rem 0.2rem;
`;