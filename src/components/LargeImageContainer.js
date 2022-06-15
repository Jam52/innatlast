import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

const LargeImageContainer = ({ imageOne, imageTwo, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHidden(false);
      }, delay);
    }
  });

  const [isTop, toggleTop] = useState(true);

  return (
    <Wrapper ref={ref} isHidden={isHidden}>
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
  height: 100%;
  width: 100%;

  ${({ isHidden }) =>
    isHidden
      ? css`
          .image-one {
            opacity: 0;
            transform: translateX(-30px);
          }
          .image-two {
            opacity: 0;
            transform: translateX(30px);
          }
        `
      : css`
          .image-one .image-two {
            opacity: 1;
            transform: translateX(0);
          }
        `}

  .image-one {
    transition: all 1.5s;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
  }
  .image-two {
    transition: all 1.5s;
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
