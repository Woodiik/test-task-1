import { Home } from 'pages/home/Home';
import { TweetsList } from 'pages/tweets/Tweets';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../SharedLayout/SharedLayout';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<TweetsList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}
