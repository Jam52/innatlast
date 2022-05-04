import styled from 'styled-components';
import Divider from './Divider';
import LargeImageContainer from './LargeImageContainer';

const Overview = (props) => {
  return (
    <div className="section container">
      <Wrapper>
        <div className="heading align">
          <h1 className="header para">You made it, AT LAST!</h1>
          <Divider left />
        </div>

        <LargeImageContainer
          imageOne={props.imageOne}
          imageTwo={props.imageTwo}
        />
        <div className="paragraph align">{props.children}</div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    'header'
    'divider'
    'image'
    'para';
  row-gap: 3rem;

  .align {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .paragraph {
    grid-area: para;
  }
  .header {
    grid-area: header;
  }

  @media (min-width: 786px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'image header'
      'image divider'
      'image para';
    row-gap: 1.5rem;
    column-gap: 1rem;
  }
`;

export default Overview;
