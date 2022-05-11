import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DefaultDropdown = styled.div`
  display: block;
  height: 1.9rem;
  width: 1.9rem;
  transition: all 0.2s;
  transform-origin: 50% 50%;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(45deg)')};

  div {
    position: absolute;
    top: 50%;
    height: 3px;
    width: 100%;
    background-color: ${({ color }) =>
      color === 'accent' ? 'var(--accent)' : 'white'};
    border-radius: 20px;
    transform-origin: 50% 50%;
  }

  div:first-child {
    transform: rotate(45deg);
  }

  div:last-child {
    transform: rotate(-45deg);
  }
`;

export const MenuButton = styled(DefaultDropdown)`
  position: absolute;
  right: 0;

  top: 2.3rem;
  @media (min-width: 786px) {
    display: none;
  }
`;

export const DefaultLink = styled(NavLink)`
  opacity: 1;
  padding: 0.5rem 0;
  font-weight: 200;
  &:hover {
    opacity: 0.7;
  }

  &.active {
    box-shadow: 0 3px 0 var(--accent);
  }
`;
