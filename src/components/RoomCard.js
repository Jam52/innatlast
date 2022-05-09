import styled from 'styled-components';

const RoomCard = (props) => {
  return (
    <Wrapper>
      <img
        className="image"
        src={`/images/${props.image.src}`}
        alt={props.image.alt}
      ></img>
      <h3 className="bg-dark">{props.title}</h3>
      <div className="details flow">
        {props.details.map((detail, index) => {
          return (
            <div key={index} className="details-item space">
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
  clip-path: polygon(5vh 0%, 100% 0%, 100% 100%, 0% 100%, 0% 5vh);
  width: 100%;
  max-width: 20rem;
  margin: auto;
  background: var(--gradient-white);
  transition: all 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 10px #888888;
    background: white;

    h3 {
      filter: brightness(1);
    }

    .image {
    }
  }

  h3 {
    width: 100%;
    transition: all 1s;
    min-height: 3rem;
    margin: 0;
    padding: 1rem 2rem;
    filter: brightness(1.3);
  }

  .image {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }

  .details {
    padding: 1.5rem 1rem 2rem 1rem;
  }

  .details-item {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      width: 2rem;
    }
  }
`;

export default RoomCard;
