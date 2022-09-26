import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  color: ${({ theme }) => theme['gray-100']};

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  span {
    padding: 2rem 1rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme['gray-700']};
  }
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  width: 4rem;
  padding: 2rem 0;

  color: ${({ theme }) => theme['green-500']};

  overflow: hidden;
`;
