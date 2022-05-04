import styled from 'styled-components';

const LandingPage = (props) => {
  return (
    <Wrapper>
      <div className="section landing content">
        <img className="logo" src="/images/logo.svg" alt="logo" />
      </div>
      <div className="section"></div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .landing {
    background-image: var(--gradient-light);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 50vw;
    max-width: 20rem;
  }
`;

export default LandingPage;
