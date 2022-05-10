import styled from 'styled-components';

const Divider = (props) => {
  return (
    <Wrapper right={props.right} className="para">
      <img src={`images/pine-${props.option ?? 1}.svg`} alt=""></img>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: divider;
  position: relative;
  width: 100%;
  transform: ${({ right }) =>
    right ? 'translate(3%, -49.5%) scaleX(-1)' : 'translate(-3%, 0%)'};
  &::before {
    content: '';
    position: absolute;
    right: 0;
    height: 0.8vmin;
    width: 100vw;
    background-color: var(--accent);
  }
  img {
    width: 20vmin;
    position: absolute;
    transform: translateY(-49.5%);
    right: -20vmin;
  }

  @media (min-width: 850px) {
  }
`;

export default Divider;
