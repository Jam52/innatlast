import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper className="bg-dark">
      <div className="container">
        <div className="title flow ">
          <div className="hflow">
            <img src="/images/logo_house.svg" alt="" />
            <h2 className="h3">Contact us.</h2>
          </div>
          <p>
            123 Road name,
            <br /> Picton, ON, I3N 5T9
          </p>
          <a href="tel:+1 613 111 2222">+1 613 111 2222</a>
          <a href="mailto:info@innatlast.ca">info@innatlast.ca</a>
        </div>
        <nav className="flow flow--sm right">
          <div className="hflow right">
            <h2 className="h3">#innatlast</h2>
            <img src="/images/insta_accent.svg" alt="" />
          </div>
          <NavLink to="/journey">The Journey</NavLink>
          <NavLink to="/honeymoon">The Honeymoon</NavLink>
          <NavLink to="/tribe">The Tribe</NavLink>
          <NavLink to="/play">Play</NavLink>
          <NavLink to="/county">County</NavLink>
          <NavLink to="/events">Private Events</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
        <div>
          <p>Website designed by</p>
          <a href="https://www.jamiesajdak.com">Jamie Sajdak</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 0;

  a {
    color: white;
  }

  .container {
    display: grid;
    row-gap: 3rem;
    grid-template-areas:
      'contact'
      'nav'
      'link';
  }

  .title {
    grid-area: contact;
  }

  img {
    width: 2.5rem;
  }

  .right {
    justify-content: flex-end;
    text-align: right;
  }
`;

export default Footer;
