import { Container, StyledLink, Text } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Text>
        Here you can find active users who tweet frequently. To do this, go to
        the tab <StyledLink to="/tweets">Tweets</StyledLink>
      </Text>
    </Container>
  );
};
