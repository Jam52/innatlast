import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeInTransition = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [isHidden, setHidden] = useState('hidden');

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHidden('hidden fade_in');
      }, props.delay);
    }
  });

  return (
    <Wrapper>
      <div ref={ref} className={isHidden} delay={props.delay}>
        {props.children}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hidden {
    opacity: 0;
    transform: translateY(100px);
  }

  .fade_in {
    opacity: 1;
    transform: translateY(0);
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default FadeInTransition;
