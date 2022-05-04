import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { MenuButton, DefaultLink } from './MenuElements';

const Navbar = (props) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <NavWrapper className="container" isOpen={isOpen}>
      <MenuButton
        onClick={() => toggleOpen(!isOpen)}
        isOpen={isOpen}
        id="menu"
        role="button"
        tabIndex="0"
        aria-expanded={isOpen}
        aria-label="menu"
      >
        <div />
        <div />
      </MenuButton>
      <NavLink to="/">
        <img className="logo" src="images/logo_house.svg" alt="home"></img>
      </NavLink>
      <div className="content">
        <div className="dropdown">
          <div className="space">
            <span>Stay</span>
            <img src="/images/arrow.svg" alt="dropdown" />
          </div>
          <div className="dropdown_content flow">
            <DefaultLink to="/journey" onClick={() => toggleOpen(!isOpen)}>
              The Journey
            </DefaultLink>
            <DefaultLink to="/honeymoon" onClick={() => toggleOpen(!isOpen)}>
              The Honeymoon
            </DefaultLink>
            <DefaultLink to="/tribe" onClick={() => toggleOpen(!isOpen)}>
              The Tribe
            </DefaultLink>
          </div>
        </div>
        <DefaultLink to="/play" onClick={() => toggleOpen(!isOpen)}>
          Play
        </DefaultLink>
        <DefaultLink to="/county" onClick={() => toggleOpen(!isOpen)}>
          County
        </DefaultLink>
        <DefaultLink to="/events" onClick={() => toggleOpen(!isOpen)}>
          Private Events
        </DefaultLink>
        <DefaultLink to="/about" onClick={() => toggleOpen(!isOpen)}>
          About Us
        </DefaultLink>
        <NavLink to="/">
          <img
            className="logo-house"
            src="images/logo_house.svg"
            alt="home"
          ></img>
        </NavLink>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: relative;
  width: 70vw;
  padding: 2rem 0;
  transition: all 0.3s;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '6.5rem')};
  overflow: hidden;

  .content {
    margin-top: 3rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
  }

  .content > * + * {
    margin-top: 1rem;
  }

  a {
    color: white;
  }

  .logo {
    width: 3rem;
  }

  .dropdown {
    position: relative;
    display: inline-block;

    img {
      height: 0.7rem;
      transform: translateY(2px);
    }
    span {
      opacity: 0.6;
    }
  }

  .space {
    align-items: center;
  }

  .dropdown_content {
    display: flex;
    color: white;
    padding: 1rem;
    z-index: 2;
    flex-direction: column;
  }

  @media (min-width: 786px) {
    height: auto;
    padding: 0.2rem 0;
    .logo {
      display: none;
    }
    .content {
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 4rem;
    }

    .content > * + * {
      margin-top: 0;
    }

    .dropdown span {
      opacity: 1;
    }

    .dropdown_content {
      display: none;
      position: absolute;
      background-color: var(--primary);
      box-shadow: var(--box-shadow);
      padding: 1rem;
      z-index: 2;
      flex-direction: column;
      width: 12rem;

      a {
        color: var(--dark);
      }
    }

    .dropdown:hover .dropdown_content {
      display: flex;
    }

    .logo-house {
      width: 3rem;
    }
  }
`;

export default Navbar;
