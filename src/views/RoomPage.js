import styled from 'styled-components';
import Divider from '../components/Divider';
import ImageCarosel from '../components/ImageCarosel';

const RoomPage = ({ room }) => {
  return (
    <Wrapper className="flow flow--lg">
      <div className="container flow flow--md">
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
        <div className="container image-carousel">
          <ImageCarosel
            images={[
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
            ]}
          />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 8rem 0 0 0;
  .main-image {
    width: 100%;
    max-height: 90vh;
    object-fit: cover;
  }

  .image-carousel {
    padding: 4rem 0;
  }
`;

export default RoomPage;
