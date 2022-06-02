import styled from 'styled-components';

const EventPage = () => {
  return (
    <Wrapper className="section">
      <div className="container event flow flow">
        <h1 className="header">Private Events</h1>
        <div className="image-container flow">
          <img src="/images/event.jpg" alt="" className="image" />
          <div className="flow info">
            <p className="para">
              Looking to rent more than one room for a retreat, reunion, or
              small group getaway in Prince Edward County? Let InnAtLast be your
              host.
            </p>
            <p>Please contact us:</p>
            <a className="link" href="mailto:info@innatlast.ca">
              welcome@innatlast.com
            </a>
            <div className="background" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .event {
    margin-top: 3rem;
    position: relative;
    padding: 1.5rem;
  }

  .header {
    font-size: 2rem;
  }

  .image-container {
    display: flex;
    flex-direction: column;
  }

  .image {
    margin-left: auto;
    width: 100%;
    height: 90vmin;
    object-fit: cover;
  }

  .background {
    margin: 0;
    height: 90vmin;
    width: 100%;
    background-image: var(--gradient-light-right);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .link {
    color: var(--dark);
  }

  @media (min-width: 800px) {
    .image-container {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  @media (min-width: 1100px) {
    .header {
      font-size: 2.5rem;
    }
    .image {
      margin-left: auto;
      width: 70%;
      height: 70vmin;
      object-fit: cover;
    }
    .background {
      height: 70vmin;
    }
  }
`;

export default EventPage;
