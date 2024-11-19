import { useContext } from 'react';
import { ThemeContext, themes } from '../context/themeContext';
import styled from 'styled-components';
import Card from './Card';
import data from './data';
import Hero from './Hero';
//updated File name for deployment
const MainContainer = styled.main`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const CardWrapper = styled.div`
  flex: 0 0 auto;
  width: 300px;
`;

export default function Main() {
  const { theme } = useContext(ThemeContext);

  const cardData = data.map((item) => (
    <CardWrapper key={item.id}>
      <Card {...item} />
    </CardWrapper>
  ));

  return (
    <MainContainer>
      <div className="container">
        <Hero />
        <CardsContainer>{cardData}</CardsContainer>
      </div>
    </MainContainer>
  );
}
