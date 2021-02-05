import styled from 'styled-components';

export default function Nav({ recipe }) {
  return (
    <Navigation>
      <h2>夏</h2>
      <Links>
        {recipe && (
          <a href="/recipes">Recipes</a>
        )}

        <a href="/">Home</a>
      </Links>
    </Navigation>
  );
}

const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 3rem;
    margin: 0px;
  }
`;

const Links = styled.div`
  display: flex;
  
  a {
    margin-left: 2rem;
    color: #1421A3;
    font-size: 0.9rem;
  }
`;