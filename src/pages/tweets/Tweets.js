import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tweet } from 'components/Tweet/Tweet';
import { Container, List, LoadButton } from './Tweets.styled';

export const TweetsList = ({ children }) => {
  const [data, setData] = useState([]);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4);

  const loadMoreTweets = () => {
    setItemsToShow(prevItems => prevItems + 4);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://645610162e41ccf16912db02.mockapi.io/api/v1/users'
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setVisibleTweets(data.slice(0, itemsToShow));
  }, [data, itemsToShow]);

  return (
    <Container>
      <List>
        {visibleTweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </List>
      <LoadButton onClick={loadMoreTweets}>Load More</LoadButton>
    </Container>
  );
};
