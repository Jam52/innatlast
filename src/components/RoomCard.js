import styled from 'styled-components';

const RoomCard = (props) => {
  return (
    <Wrapper>
      <img
        className="image"
        src={`/images/${props.image.src}`}
        alt={props.image.alt}
      ></img>
      <h3 className="header bg-dark">{props.title}</h3>
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
  clip-path: polygon(8vh 0%, 100% 0%, 100% 100%, 0% 100%, 0% 8vh);
  width: 100%;
  max-width: 18rem;
  margin: auto;
  background: white;
  transition: all 1s;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 10px #888888;
    background: white;
    .header {
      filter: brightness(1);
    }
  }

  .header {
    width: 100%;
    transition: all 1s;
    min-height: 3rem;
    margin: 0;
    padding: 1rem 2rem;
    text-align: center;
    filter: brightness(1.4);
  }

  .image {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }

  .details {
    padding: 2rem 2rem;
  }

  .details-item {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--dark);
    img {
      width: 2rem;
    }
  }

  @media (min-width: 786px) {
    background: var(--gradient-white);
  }
`;

export default RoomCard;
