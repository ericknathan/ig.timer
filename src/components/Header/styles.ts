import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 3rem;
      height: 3rem;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      color: ${({ theme }) => theme['gray-100']};

      &:hover,
      &:focus {
        border-bottom-color: ${({ theme }) => theme['green-500']};
        outline: none;
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`;
