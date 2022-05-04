import styled from 'styled-components';
import Navbar from './nav/NavBar';

const Header = (props) => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: var(--dark);
  position: absolute;
  width: 100vw;
`;

export default Header;
