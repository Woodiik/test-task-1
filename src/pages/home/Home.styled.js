import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../images/picture.png';
export const Container = styled.div`
  position: relative;
  width: 600px;
  height: 460px;
  padding: 40px;
  margin: 60px auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
  ::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    background-image: url(${image});
    background-size: 100% 100%;
    width: 508px;
    height: 260px;
    z-index: 1;
    transform: translateX(-50%);
  }
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const StyledLink = styled(Link)`
  color: #5cd3a8;
`;
