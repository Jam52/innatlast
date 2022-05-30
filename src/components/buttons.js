import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: var(--mid);
  padding: 0.5rem 1rem;
  color: white;
  border: 2px solid var(--dark);
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.2s;
  font-family: var(--font-title);
  max-width: 15rem;
  min-width: 10rem;
  &:hover {
    background-color: var(--dark);
  }
`;
