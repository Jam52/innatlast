import styled from 'styled-components';
import { useState } from 'react';

const LargeImageContainer = ({ imageOne, imageTwo }) => {
  const [isTop, toggleTop] = useState(true);
  return (
    <Wrapper>
      <Image className="image-one" isTop={isTop}>
        <img
          src={imageOne.src}
          alt={imageOne.alt}
          onClick={() => toggleTop(!isTop)}
        />
      </Image>
      <Image className="image-two" isTop={!isTop}>
        <img
          src={imageTwo.src}
          alt={imageTwo.alt}
          onClick={() => toggleTop(!isTop)}
        />
      </Image>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 70vh;
  width: 80vh;
  max-width: 80vw;
  max-height: 80vw;
  grid-area: image;

  .image-one {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
  }
  .image-two {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90%;
    height: 90%;
  }
`;

const Image = styled.div`
  background-color: var(--primary);
  z-index: ${({ isTop }) => (isTop ? 2 : 1)};
  img {
    transition: all 0.3s;
    object-fit: cover;
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: ${({ isTop }) => (isTop ? 1 : 0.3)};
  }
`;

export default LargeImageContainer;
