import styled from 'styled-components';
import Divider from '../components/Divider';
import RoomCard from '../components/RoomCard';
import Overview from '../components/Overview';
import { Link } from 'react-router-dom';
import IntaFeed from '../components/InstaFeed';

const LandingPage = (props) => {
  return (
    <Wrapper className="page">
      <div className="section landing content">
        <img className="logo" src="/images/logo.svg" alt="logo" id="content" />
      </div>
      <Overview
        title="You made it, AT LAST!"
        flipped={false}
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
        <div className="container flow flow--lg">
          <div className="para flow flow--md">
            <h2 className="h1">Explore Your Stay</h2>
            <Divider option="2" right={false} />
            <p className=" quote">
              “Quiet, relaxing and energizing at the same time!”
              <span> - Jane Smith</span>
            </p>
          </div>
          <div className="card-container">
            <Link to="/journey">
              <RoomCard
                image={{ src: 'room1.jpg', alt: '' }}
                details={[
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                ]}
                title="The Journey"
              />
            </Link>
            <Link to="/honeymoon">
              <RoomCard
                image={{ src: 'room2.jpg', alt: '' }}
                details={[
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                ]}
                title="The Honeymoon"
              />
            </Link>
            <Link to="/tribe">
              <RoomCard
                image={{ src: 'room3.jpg', alt: '' }}
                details={[
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                  { src: 'bed.svg', alt: '', text: '1 x Queen Bed' },
                ]}
                title="The Tribe"
              />
            </Link>
          </div>
          <div className="para para--right flow flow--md">
            <h2 className="h1">Stay and play.</h2>
            <Divider option="3" right={true} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet non.
              Proin quis dignissim turpis. Vestibulum vitae ligula et orci
              elementum varius.
            </p>
          </div>
          <div className="hflow">
            <img
              src="/images/insta_accent.svg"
              alt="instgram"
              className="icon"
            />
            <h2>#inAtLast</h2>
          </div>
          <IntaFeed />
        </div>
      </div>
      <Overview
        flipped={true}
        imageOne={{
          src: 'https://www.planetware.com/wpimages/2020/12/canada-ontario-prince-edward-county-top-things-to-do-source-lake-on-the-mountain.jpg',
          alt: 'Lovley bed and breakfast located in stunning pine forest.',
        }}
        imageTwo={{
          src: 'http://www.ontarioaway.com/wp-content/uploads/2020/06/things-to-do-in-prince-edward-county-shops-downtown-picton.jpg',
          alt: 'Detail of building, showing modern materials and homely tmosphere.',
        }}
        title="Leave no stone unturned."
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et arcu
          justo. Sed congue nibh nibh, eu laoreet metus imperdiet non. Proin
          quis dignissim turpis. Vestibulum vitae ligula et orci elementum
          varius.
        </p>
        <p>
          Mauris vel ornare massa. Donec placerat ut risus eget pretium. In et
          dolor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis et arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet
          non. augue. augue.
        </p>
      </Overview>
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
