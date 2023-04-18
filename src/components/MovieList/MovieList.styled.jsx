import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  padding: 20px 50px 80px;
`;
export const Description = styled(Link)`
  text-decoration: none;
  text-align: center;
`;
export const Item = styled.li`
  width: 280px;
  border-bottom-left-radius: 43px;
  border-bottom-right-radius: 43px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: linear-gradient(145deg, #6a8c92, #7ea7ad);
  box-shadow: 18px 18px 36px #59757a, -18px -18px 36px #94c3cb;

  &:hover {
    z-index: 1;
    background: rgb(159, 152, 155);
    background: linear-gradient(
      323deg,
      rgba(159, 152, 155, 0.9295149842271293) 5%,
      rgba(37, 80, 87, 0.8995973389355743) 74%
    );
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 400px;
  border-radius: 15px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #12343b;
`;
