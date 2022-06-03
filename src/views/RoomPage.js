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
        <section className="flow flow--sm">
          <Dropdown header="Room details">
            <div className="details">
              {room.roomDetails.map((detail) => {
                return (
                  <div className="details-detail">
                    <img
                      src={`/images/${detail.image}`}
                      alt=""
                      className="icon"
                    />
                    <p>{detail.text}</p>
                  </div>
                );
              })}
            </div>
          </Dropdown>
          <Dropdown header="Rules">
            <p className="para rules">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lorem ipsum, cursus ac nunc id, varius bibendum dolor. Donec sit
              amet eros eu risus dictum ultricies at at justo.
            </p>
          </Dropdown>
          <Dropdown header="Cancellations">
            <p className="para rules">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lorem ipsum, cursus ac nunc id, varius bibendum dolor. Donec sit
              amet eros eu risus dictum ultricies at at justo.
            </p>
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

  .details {
    width: 90%;
    margin-left: auto;
    margin-right: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 2rem;
  }
  .details-detail {
    width: 15rem;
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
  }

  .rules {
    margin-left: 3rem;
  }

  @media (min-width: 1000px) {
    .details {
      width: 80%;
    }
  }
`;

export default RoomPage;
