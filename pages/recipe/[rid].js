import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import styled from 'styled-components';

import Nav from '../components/Nav';

const Recipe = () => {
  const router = useRouter()
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
    <Page>
      <Head>
        <title>Alice Xia</title>
        <link rel="icon" href="/sunflower_logo.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      </Head>
      <Nav recipe />
      {recipe && (
        <Container>
          <Title>
            <h2>{recipe.gsx$name.$t}</h2>
            {recipe.link && (
              <a target="_blank" href={recipe.gsx$link.$t}>
                <span className="material-icons">
                  ios_share
              </span>
              </a>
            )}
          </Title>
          <h3>Ingredients</h3>
          {recipe.gsx$ingredients.$t.split(',').map((ing, i) => (
            <p key={i} className="ingredients">{ing}</p>
          ))}
          <h3>Instructions</h3>
          {recipe.gsx$description.$t.split('/n').map((p, i) => (
            <p key={i}><span>Step {i + 1}:</span> {p}</p>
          ))}

        </Container>
      )}
    </Page>
  );
}

export default Recipe;

const Page = styled.div`
  background: #FCF4ED;
  min-height: 100vh;
  min-width: 100vw;
  color: #1421A3;

  a {
    color: #1421A3;
  }
`;

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 9rem 2rem 3rem;
  
  h2 {
    text-align: center;
  }

  h3 {
    margin: 2rem 0 1rem;
  }

  p {
    margin-top: 0;
  }

  span {
    font-weight: 500;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  a {
    margin-left: 1rem;
  }
`;



