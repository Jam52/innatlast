import styled from 'styled-components';

const CountyCard = (props) => {
  return (
    <Wrapper>
      <img
        className="image"
        src={`/images/${props.image}`}
        alt={props.image.alt}
      ></img>
      <div className="info flow">
        <h3>{props.header}</h3>
        <p>{props.text}</p>
      </div>
      {props.map ? (
        <div className="map">
          <a href={props.map} target="_blank" rel="noreferrer">
            map
          </a>
          <img
            src="/images/external.png"
            alt="external link"
            className="icon icon--sm"
          />
        </div>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  clip-path: polygon(3rem 0%, 100% 0%, 100% 100%, 0% 100%, 0% 3rem);
  width: 100%;
  height: 100%;
  max-width: 18rem;
  margin: auto;
  background-image: var(--gradient-light);
  transition: all 1s;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 5px 10px #888888;
    background: var(--primary);
    .header {
      filter: brightness(1);
    }
  }

  .info {
    background-image: var(--gradient-light);
    padding: 1rem 1rem 2rem 1rem;
    height: 100%;
    font-size: 0.8rem;
  }

  .image {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }

  .map {
    margin: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default CountyCard;
