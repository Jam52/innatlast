import styled from 'styled-components';

const RoomCard = (props) => {
  return (
    <Wrapper>
      <img src={`/images/${props.image.src}`} alt={props.image.alt}></img>
      <h3>{props.title}</h3>
      <div className="details flow flow--md">
        {props.details.map((detail, index) => {
          return (
            <div key={index} className="detail space">
              <img src={`/images/${detail.src}`} alt={detail.alt} />
              <p>{detail.text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%);
  width: 100%;
  background: var(--gradient-white);
  transition: all 0.3s;
  &:hover {
    box-shadow: var(--box-shadow);
    background: white;
  }

  img {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }

  .detail {
    margin: 0.5rem 2rem;
    flex-direction: row;
    align-items: center;
    max-width: 15rem;
    img {
      width: 2rem;
    }
  }
`;

export default RoomCard;
