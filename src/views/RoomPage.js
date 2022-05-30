import styled from 'styled-components';
import Divider from '../components/Divider';
import ImageCarousel from '../components/Carousel/ImageCarousel';
import Dropdown from '../components/Dropdown';

const RoomPage = ({ room }) => {
  const images = [
    {
      src: 'https://picsum.photos/id/1018/1000/600/',
      alt: '',
    },
    {
      src: 'https://picsum.photos/id/1015/1000/600/',
      alt: '',
    },
    {
      src: 'https://picsum.photos/id/1019/1000/600/',
      alt: '',
    },
  ];
  return (
    <Wrapper>
      <div className="container section flow flow--md">
        <img
          src={room.mainImage.src}
          alt={room.mainImage.alt}
          className="main-image"
        />
        <div className="para para--right flow flow--md">
          <h2 className="h1">{room.title}</h2>
          <Divider option="3" right={true} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet non.
            Proin quis dignissim turpis. Vestibulum vitae ligula et orci
            elementum varius.
          </p>
        </div>
      </div>

      <section className="bg-primary">
        <div className="container flow flow--md carousel">
          <ImageCarousel images={images} />
        </div>
      </section>

      <section className="container section flow flow--lg">
        <div className="para flow flow--md">
          <h2 className="h1">Details</h2>
          <Divider option="2" right={false} />
          <div className="flow">
            <div>
              <h3>Max Occupancy</h3>
              <p>{room.maxOccupancy}</p>
            </div>
            <div>
              <h3>Price per night</h3>
              <p>${room.perNightRate}</p>
            </div>
          </div>
        </div>
        <section className="flow">
          <Dropdown header="Room details">
            {images.map(() => (
              <p>kasjbdkjadnakndkajsdnk</p>
            ))}
          </Dropdown>
          <Dropdown header="Whats included">
            {images.map(() => (
              <p>kasjbdkjadnakndkajsdnk</p>
            ))}
          </Dropdown>
          <Dropdown header="Rules">
            {images.map(() => (
              <p>kasjbdkjadnakndkajsdnk</p>
            ))}
          </Dropdown>
          <Dropdown header="Cancellations">
            {images.map(() => (
              <p>kasjbdkjadnakndkajsdnk</p>
            ))}
          </Dropdown>
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 3rem 0 0 0;
  .main-image {
    width: 100%;
    max-height: 90vh;
    object-fit: cover;
  }

  .carousel {
    padding: 4rem 0;
  }
`;

export default RoomPage;
