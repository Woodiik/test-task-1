import { useState, useEffect } from 'react';
import {
  Avatar,
  AvatarContainer,
  CardContainer,
  FollowButton,
  Text,
} from './Tweet.styled';

export const Tweet = ({ tweet }) => {
  const [tweetData, setTweetData] = useState(
    () =>
      JSON.parse(localStorage.getItem(`tweet_${tweet.id}`)) || {
        isFollow: false,
        followers: Number(tweet.followers),
      }
  );

  const onClick = () => {
    setTweetData(({ isFollow, followers }) => ({
      isFollow: !isFollow,
      followers: isFollow ? followers - 1 : followers + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem(`tweet_${tweet.id}`, JSON.stringify(tweetData));
  }, [tweetData, tweet.id]);

  return (
    <CardContainer>
      <Text>{tweet.name}</Text>
      <AvatarContainer>
        <Avatar alt="user avatar" src={tweet.avatar} />
      </AvatarContainer>
      <Text>
        Tweets: {Number(tweet.tweets).toLocaleString().replace(/\s/g, ',')}
      </Text>
      <Text>
        Followers: {tweetData.followers.toLocaleString().replace(/\s/g, ',')}
      </Text>
      <FollowButton
        onClick={onClick}
        className={tweetData.isFollow ? 'active' : ''}
      >
        {tweetData.isFollow ? 'Following' : 'Follow'}
      </FollowButton>
    </CardContainer>
  );
};
