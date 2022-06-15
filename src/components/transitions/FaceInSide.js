import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

const FadeInSide = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHidden(false);
      }, props.delay);
    }
  });

  return (
    <Wrapper
      ref={ref}
      fromLeft={props.fromLeft}
      isHidden={isHidden}
      delay={props.delay}
    >
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 1s;
  ${({ isHidden }) =>
    isHidden
      ? css`
          opacity: 0;
          transform: translateX(
            ${({ fromLeft }) => (fromLeft ? '-50px' : '50px')}
          );
        `
      : css`
          opacity: 1;
          transform: translateX(0);
        `}
`;

export default FadeInSide;
