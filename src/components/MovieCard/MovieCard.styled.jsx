import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  padding: 55px;
`;

export const Poster = styled.img`
  width: auto;
  height: 500px;
  border-radius: 15px;
  background: linear-gradient(145deg, #6a8c92, #7ea7ad);
  box-shadow: 18px 18px 36px #59757a, -18px -18px 36px #94c3cb;
`;

export const MovieInfo = styled.div`
  width: 800px;
  margin-left: 50px;
  padding: 10px;
  border-radius: 15px;
  background: transparent;
  box-shadow: 18px 18px 36px #59757a, -18px -18px 36px #94c3cb;
`;

export const Title = styled.h2`
  border-radius: 37% 63% 61% 39% / 45% 35% 65% 55%;
  background: linear-gradient(145deg, #baacad, #ddcccd);
  box-shadow: 10px 10px 31px #9b8f90, -10px -10px 31px #ffeff0;
  width: 600px;
  padding: 10px;
  margin: 20px auto;
  text-align: center;
  letter-spacing: 1px;
  color: #585b84;
`;

export const Release = styled.span`
  margin-left: 15px;
`;

export const Details = styled.p`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.1px;
  color: #9e6164;
`;

export const Info = styled.span`
  color: #1c1d2d;
  font-size: 22px;
  font-weight: 500;
`;
