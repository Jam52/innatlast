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
  position: relative;
  margin: 2.5rem 0;
  height: 3.5px;
  width: 105%;
  background-color: var(--accent);
  transform: ${({ left }) =>
    left ? ' translateY(-49.5%) scaleX(-1) translateX(5%)' : ''};

  img {
    width: 7rem;
    position: absolute;
    transform: translateY(-49.5%);
    right: -7rem;
  }
`;

export default Divider;
