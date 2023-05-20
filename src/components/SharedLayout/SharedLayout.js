import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
export const Layout = () => {
  return (
    <div>
      <Header>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/tweets'}>Tweets</Link>
        </div>
        <div>
          <Link
            to={
              'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vovikvova04@gmail.com'
            }
            target="_blank"
          >
            Send feedback
          </Link>
        </div>
      </Header>
      <Outlet />
    </div>
  );
};
