import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  width: 80px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: white;
  border: 1px solid black;
  margin: 15px;

  &:hover {
    color: white;
    background-color: orangered;
    border: none;
  }
`;
