import styled, { css } from 'styled-components';
import { useState } from 'react';
import CarouselButtons from './carouselButtons';
import { useSwipeable } from 'react-swipeable';

const ImageCarousel = ({ images }) => {
  const [centerImageIndex, setCenterImageIndex] = useState(images.length);
  const centerImage = centerImageIndex % images.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCenterImageIndex(centerImageIndex + 1);
    },
    onSwipedRight: () => setCenterImageIndex(centerImageIndex - 1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <Wrapper
      centerImageIndex={centerImage}
      numImages={images.length + 2}
      {...handlers}
    >
      <div className="fade" />
      <div className="outter">
        <div className="inner">
          <CarouselImage
            numImages={images.length + 2}
            className="image"
            src={images[images.length - 1].src}
            alt=""
            onClick={() => setCenterImageIndex(images.length - 1)}
          />
          {images.map(({ src, alt }, index) => {
            return (
              <CarouselImage
                numImages={images.length + 2}
                className="image"
                src={src}
                alt={alt}
                onClick={() => setCenterImageIndex(index)}
                center={index === centerImage}
              />
            );
          })}
          <CarouselImage
            numImages={images.length + 2}
            className="image"
            src={images[0].src}
            alt=""
            onClick={() => setCenterImageIndex(0)}
          />
        </div>
      </div>
      <div className="fade--left" />
      <CarouselButtons
        numImages={images.length}
        currentSelectedIndex={centerImage}
        onClick={setCenterImageIndex}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .outter {
    width: 100%;
    overflow: hidden;
  }

  .inner {
    width: ${({ numImages }) => `${numImages * 100}%`};
    transition: all 0.3s;
    display: flex;
    transform: ${({ numImages, centerImageIndex }) =>
      `translateX(-${
        100 / numImages + (100 / numImages) * centerImageIndex
      }%)`};
  }

  .fade {
    display: none;
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
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 15%;
    z-index: 10;
    background: var(--gradient-light-left);
    pointer-events: none;
  }

  @media (min-width: 786px) {
    .inner {
      width: ${({ numImages }) => `${numImages * 70}%`};
      transform: ${({ numImages, centerImageIndex }) =>
        `translateX(-${
          (100 / numImages) * 0.77 + (100 / numImages) * centerImageIndex
        }%)`};
    }

    .fade {
      display: block;
    }
    .fade--left {
      display: block;
    }
  }
`;

const CarouselImage = styled.img`
  object-fit: cover;
  width: ${({ numImages }) => `${100 / numImages}%`};
  flex-shrink: 1;
  ${({ center }) =>
    center
      ? css`
          opacity: 1;
        `
      : css`
          cursor: pointer;
          opacity: 0.5;
        `};
`;

export default ImageCarousel;
