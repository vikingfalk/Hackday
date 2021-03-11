import styled, { css } from 'styled-components';

export default styled.button`
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: all 0.2s;
  cursor: pointer;

  ${props => props.match && !props.disabled && css`
    background-color: rgb(255, 152, 40);

    &:hover {
      background-color: rgb(225, 122, 10);
    }
  `}

  ${props => props.disabled && css`
    background-color: rgb(180, 180, 180);
    color: rgb(100, 100, 100);
    transition: none;
    cursor: default;
  `}
`;
