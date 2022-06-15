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
    <Wrapper ref={ref} fromLeft={props.fromLeft} isHidden={isHidden}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: all 1s;
  opacity: 0;
  ${({ isHidden }) =>
    isHidden
      ? css`
          opacity: 0;
          transform: translateX(
            ${({ fromLeft }) => (fromLeft ? '-80px' : '80px')}
          );
        `
      : css`
          opacity: 1;
          transform: translateX(0);
        `};
`;

export default FadeInSide;
