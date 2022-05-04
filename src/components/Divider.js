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
  margin: 2.5rem 0 0 0;
  width: 100%;
  transform: ${({ left }) =>
    left ? ' translateY(-49.5%) scaleX(-1) translateX(5%)' : ''};
  &::before {
    content: '';
    position: absolute;
    right: 0;
    height: 3.5px;
    width: 50rem;
    background-color: var(--accent);
  }
  img {
    width: 5rem;
    position: absolute;
    transform: translateY(-49.5%);
    right: -5rem;
  }

  @media (min-width: 786px) {
    img {
      width: 7rem;
      right: -7rem;
    }
  }
`;

export default Divider;
