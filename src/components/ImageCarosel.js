import styled, { css } from 'styled-components';
import { useState } from 'react';

const ImageCarosel = ({ images }) => {
  const [centerImageIndex, setCenterImageIndex] = useState(0);

  console.log(-55 + centerImageIndex * 70);
  return (
    <Wrapper translate={centerImageIndex * 71}>
      <div className="fade" />
      <div className="inner">
        <CarouselImage
          className="image"
          src={images[images.length - 1].src}
          alt=""
          onClick={() => setCenterImageIndex(images.length - 1)}
        />
        {images.map(({ src, alt }, index) => {
          console.log(`index: ${index} centerIndex: ${centerImageIndex}`);
          return (
            <CarouselImage
              className="image"
              src={src}
              alt={alt}
              onClick={() => setCenterImageIndex(index)}
              center={index === centerImageIndex}
            />
          );
        })}
        <CarouselImage
          className="image"
          src={images[0].src}
          alt=""
          onClick={() => setCenterImageIndex(0)}
        />
      </div>
      <div className="fade--left" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .inner {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    display: flex;
    transform: ${({ translate }) => `translateX(-${translate + 57}%)`};
  }

  .inner > * {
    margin-left: 1%;
  }

  .fade {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 15%;
    z-index: 10;
    background: var(--gradient-light-right);
    pointer-events: none;
  }
  .fade--left {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 15%;
    z-index: 10;
    background: var(--gradient-light-left);
    pointer-events: none;
  }
`;

const CarouselImage = styled.img`
  display: block;
  width: 70%;
  height: 100%;
  object-fit: cover;

  ${({ center }) =>
    center
      ? css`
          opacity: 1;
        `
      : css`
          cursor: pointer;
          opacity: 0.7;
        `}
`;

export default ImageCarosel;
