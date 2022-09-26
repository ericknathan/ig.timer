import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;


export const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;

  color: ${({ theme }) => theme.white};

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme['red-500']};
  outline-color: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`;
