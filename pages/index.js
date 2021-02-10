import Head from "next/head";
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alice Xia</title>
        <link rel="icon" href="/sunflower_logo.png" />
        <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      </Head>

      <Container>
        <Main>
          <h1>Alice</h1>
          <p>
            Alice is a frontend engineer based in New York. In her free time,
            she enjoys&nbsp;
          <a
              href="https://instagram.com/madeinhellskitchen/"
              target="_blank"
            >
              cross stitch
          </a>
          , games, hiking, and finishing the day with a good dessert!
          She wouldn't say cooking is her hobby, but she loves eating good food
          so she spends a lot of time looking at recipes and crafting meals.
        </p>
          <Grid>
            <Card href="recipes">
              <h3>Recipes &rarr;</h3>
              <p>
                A collection of my favorite recipes.
            </p>
            </Card>
            <Card href="connect">
              <h3>Play Connect 6 &rarr;</h3>
              <p>
                A two player game where black goes first and places one piece in the
                center of the board. After that, players take turns placing 2
                pieces anywhere on the board. The objective is to get 6 in a row
                of your color.
            </p>
            </Card>
          </Grid>
        </Main>
        <Image style={{ backgroundImage: `url("/profile.jpeg")` }} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Main = styled.div`
  position: absolute;
  padding: 3rem 2rem;
  left: 40%;
  right: 0px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 600px) {
    width: 100%;
    left: 0;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.a`
  margin-right: 2rem;
  min-width: 15rem;
  flex-basis: 42%;
  padding: 1.5rem 0 0;
  text-align: left;
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  h3 {
    margin-bottom: 0;
  }

  &:hover,
  &:active,
  &:focus {
    h3 {
      color: #BE5C97;
    }
  }
`;

const Image = styled.div`
  width: 40%;
  background-size: cover;
  background-position: bottom;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;