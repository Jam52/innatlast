import styled from 'styled-components';
import LargeImageContainer from '../components/LargeImageContainer';
import Divider from '../components/Divider';

const LandingPage = (props) => {
  return (
    <Wrapper>
      <div className="section landing content">
        <img className="logo" src="/images/logo.svg" alt="logo" />
      </div>
      <div className="section container space">
        <LargeImageContainer
          imageOne={{
            src: '/images/landing-one.jpg',
            alt: 'Lovley bed and breakfast located in stunning pine forest.',
          }}
          imageTwo={{
            src: '/images/landing-two.jpg',
            alt: 'Detail of building, showing modern materials and homely tmosphere.',
          }}
        />
        <div>
          <h1>You made it, AT LAST!</h1>
          <Divider left />
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet non.
            Proin quis dignissim turpis. Vestibulum vitae ligula et orci
            elementum varius.
          </p>
          <p className="para">
            Mauris vel ornare massa. Donec placerat ut risus eget pretium. In et
            dolor augue. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis et arcu justo. Sed congue nibh nibh, eu laoreet metus
            imperdiet non. augue. augue.
          </p>
        </div>
      </div>
      <div className="section bg-primary">
        <div className="container ">
          <div className="para">
            <h2 className="h1">Explore Your Stay</h2>
            <Divider option="2" />
            <p className=" quote">
              “Quiet, relaxing and energizing at the same time!”
              <span> - Jane Smith</span>
            </p>
          </div>
        </div>
      </div>
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
