import styled from 'styled-components';

const CarouselButtons = ({ numImages, currentSelectedIndex, onClick }) => {
  console.log(currentSelectedIndex);
  return (
    <Wrapper>
      {[...Array(numImages)].map((num, index) => {
        console.log(index === currentSelectedIndex);
        return (
          <DotWrap
            key={index}
            className="dot"
            selected={index === currentSelectedIndex}
            onClick={() => onClick(index)}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DotWrap = styled.button`
  height: 1rem;
  width: 1rem;
  margin: 0 1rem;
  background-color: var(--dark);
  border: none;
  border-radius: 1000px;
  outline: ${({ selected }) => (selected ? '3px solid var(--accent)' : '')};
  outline-offset: 3px;
`;

export default CarouselButtons;
