import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  margin-left: 70px;
  display: flex;
  gap: 10px;
  align-items: center;
  background: linear-gradient(145deg, #baacad, #ddcccd);
  box-shadow: 18px 18px 36px #9b8f90, -18px -18px 36px #ffeff0;
  border-radius: 49% 51% 69% 31% / 24% 43% 57% 76%;
  width: 150px;
  padding: 10px;
  color: #5e447e;
`;

export const NavButtons = styled.ul`
  margin-bottom: 0;
  margin-left: 30px;
  padding-bottom: 50px;
  display: flex;
  gap: 50px;
`;

export const Button = styled.li`
  font-size: 20px;
  font-weight: bold;
`;

export const LinkBtn = styled(NavLink)`
  text-decoration: none;
  padding: 15px 25px;
  color: #27314e;
  border-radius: 72% 28% 43% 57% / 57% 68% 32% 43%;
  background: linear-gradient(145deg, ##7f5c5c, ##7f5c5c);
  box-shadow: 10px 10px 30px #ffeff0, -10px -10px 30px #ffeff0;

  &.active {
    background-color: #735f8c;
    color: #d1ccd7;
  }
`;
