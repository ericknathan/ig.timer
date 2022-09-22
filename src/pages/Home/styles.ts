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

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;

  color: ${({ theme }) => theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
`;

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};

  background-color: transparent;
  color: ${({ theme }) => theme['gray-100']};

  font-weight: bold;
  font-size: 1.125rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

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

export const StartCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`;
