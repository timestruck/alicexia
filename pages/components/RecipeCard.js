import styled from 'styled-components';

export default function RecipeCard() {
  return (
    <Card>
      <Header>Recipe 1</Header>
    </Card>
  );
}

const Card = styled.div`
  padding: 1rem;
`;

const Header = styled.h3`
  font-size: 5rem;
`;
