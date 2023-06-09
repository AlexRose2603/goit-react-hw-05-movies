import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  background: rgb(212, 191, 209);
  background: radial-gradient(
    circle,
    rgba(212, 191, 209, 1) 0%,
    rgba(144, 92, 103, 1) 100%
  );
  margin-bottom: 0;
`;

export const Navigation = styled.nav`
  padding: 35px 30px;
  border-bottom: 3px;
  box-shadow: 0px 0px 156px 85px rgba(228, 240, 236, 0.48);
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: left;
`;

export const MenuItem = styled.li`
  font-size: 32px;
  font-weight: 500;
  padding: 10px 25px;

  background: linear-gradient(145deg, #baacad, #ddcccd);
  box-shadow: 18px 18px 36px #9b8f90, -18px -18px 36px #ffeff0;
  border-radius: 49% 51% 69% 31% / 24% 43% 57% 76%;
  &:hover {
    background: rgb(106, 51, 75);
    background: linear-gradient(
      323deg,
      rgba(106, 51, 75, 0.9295149842271293) 2%,
      rgba(191, 210, 193, 0.8995973389355743) 92%
    );
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #9e6164;
  &:hover {
    color: #585b84;
  }
  &.active {
    color: #585b84;
  }
`;
