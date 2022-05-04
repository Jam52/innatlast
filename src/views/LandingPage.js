import styled from 'styled-components';
import Divider from '../components/Divider';
import RoomCard from '../components/RoomCard';
import Overview from '../components/Overview';

const LandingPage = (props) => {
  return (
    <Wrapper>
      <div className="section landing content">
        <img className="logo" src="/images/logo.svg" alt="logo" />
      </div>
      <Overview
        imageOne={{
          src: '/images/landing-one.jpg',
          alt: 'Lovley bed and breakfast located in stunning pine forest.',
        }}
        imageTwo={{
          src: '/images/landing-two.jpg',
          alt: 'Detail of building, showing modern materials and homely tmosphere.',
        }}
      >
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et arcu
          justo. Sed congue nibh nibh, eu laoreet metus imperdiet non. Proin
          quis dignissim turpis. Vestibulum vitae ligula et orci elementum
          varius.
        </p>
        <p className="para">
          Mauris vel ornare massa. Donec placerat ut risus eget pretium. In et
          dolor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis et arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet
          non. augue. augue.
        </p>
      </Overview>
      <div className="section bg-primary">
        <div className="container flow">
          <div className="para flow flow--md">
            <h2 className="h1">Explore Your Stay</h2>
            <Divider option="2" />
            <p className=" quote">
              “Quiet, relaxing and energizing at the same time!”
              <span> - Jane Smith</span>
            </p>
          </div>
          <div className="card-container">
            <RoomCard
              image={{ src: 'room1.jpg', alt: '' }}
              details={[
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
              ]}
            />
            <RoomCard
              image={{ src: 'room1.jpg', alt: '' }}
              details={[
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
              ]}
            />
            <RoomCard
              image={{ src: 'room1.jpg', alt: '' }}
              details={[
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
              ]}
            />
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
