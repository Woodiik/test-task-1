import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  border-bottom: 2px solid darkblue;
`;
export const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  :not(:first-child) {
    margin-left: 30px;
  }
`;
