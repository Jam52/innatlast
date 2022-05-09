import styled from 'styled-components';

const Divider = (props) => {
  console.log(props);
  return (
    <Wrapper left={props.left} className="para">
      <img src={`images/pine-${props.option ?? 1}.svg`} alt=""></img>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: divider;
  position: relative;
  width: 90%;
  transform: ${({ left }) => (left ? ' translateY(-49.5%) scaleX(-1) ' : '')};
  &::before {
    content: '';
    position: absolute;
    right: 0;
    height: 3.5px;
    width: 100vw;
    background-color: var(--accent);
  }
  img {
    width: 16vmin;
    position: absolute;
    transform: translateY(-49.5%);
    right: -16vmin;
  }

  @media (min-width: 850px) {
  }
`;

export default Divider;
