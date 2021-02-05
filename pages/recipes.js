import Head from "next/head";
import styled from 'styled-components';

import Nav from './components/Nav';

export default function Recipes() {
  const RECIPES = require('./recipes.data.json');

  return (
    <Page>
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
            const rid = i + '-' + recipe.name.toLowerCase().split(' ').join('-');

            return (
              <Card href={`/recipe/${rid}`}>
                {recipe.image && (
                  <RecipeImage style={{ backgroundImage: `url("${recipe.image}")` }} />
                )}
                <h4>{recipe.name}</h4>
              </Card>
            )
          })}
        </Grid>
      </Container>
    </Page>
  );
}

const Page = styled.div`
  background: #FCF4ED;
  min-height: 100vh;
  min-width: 100vw;
  color: #1421A3;

  a {
    color: #1421A3;
  }
`;

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