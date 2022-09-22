import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme['gray-800']};
`;