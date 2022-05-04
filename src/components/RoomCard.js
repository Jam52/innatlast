import styled from 'styled-components';

const RoomCard = (props) => {
  return (
    <Wrapper>
      <img src={props.image.src} alt={props.image.alt}></img>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  min-height: 25rem;
  background: white;
  img {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }
`;

export default RoomCard;
