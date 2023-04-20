import styled from '@emotion/styled';
export const Form = styled.form`
  margin: 20px 50px 60px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  margin-right: 15px;
  width: 300px;
  font-size: 18px;
  border-radius: 63px;
  border-color: white;
  background: linear-gradient(145deg, #c5e0e5, #a6bcc1);
  box-shadow: 18px 18px 36px #8a9da1, -18px -18px 36px #e6ffff;
  &:focus {
    border: 2px solid #9e6164;
    outline: #9e6164;
  }
`;

export const Btn = styled.button`
  font-size: 20px;
  padding: 15px;
  border-radius: 72% 28% 43% 57% / 57% 68% 32% 43%;
  background: linear-gradient(145deg, #baacad, #ddcccd);
  box-shadow: 18px 18px 36px #9b8f90, -18px -18px 36px #ffeff0;
  border-width: 0;
  color: #9e6164;
  cursor: pointer;

  &:hover {
    background: rgb(106, 51, 75);
    background: linear-gradient(
      323deg,
      rgba(106, 51, 75, 0.9295149842271293) 2%,
      rgba(191, 210, 193, 0.8995973389355743) 92%
    );
    color: #585b84;
  }
`;
