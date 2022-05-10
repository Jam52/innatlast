import styled, { css } from 'styled-components';
import Divider from './Divider';
import LargeImageContainer from './LargeImageContainer';

const Overview = (props) => {
  return (
    <div className="section container">
      <Wrapper flipped={props.flipped}>
        <div className="header align flow flow--md">
          <h1 className="para">{props.title}</h1>
          <Divider right={!props.flipped} />
        </div>
        <div className="image">
          <LargeImageContainer
            imageOne={props.imageOne}
            imageTwo={props.imageTwo}
          />
        </div>
        <div className="paragraph align flow">{props.children}</div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 80vmin auto;
  grid-template-areas:
    'header'
    'image'
    'para';
  row-gap: 5rem;

  .image {
    grid-area: image;
    width: 80vw;
    height: 80vw;
  }

  .paragraph {
    grid-area: para;
  }
  .header {
    grid-area: header;
  }

  .align {
    ${({ flipped }) =>
      flipped
        ? css`
            margin-right: 10vw;
          `
        : css`
            margin-left: 10vw;
          `}
  }

  @media (min-width: 550px) {
    row-gap: 7rem;
  }

  @media (min-width: 850px) {
    grid-template-rows: auto 1fr;
    ${({ flipped }) =>
      flipped
        ? css`
            grid-template-columns: auto 1fr;
            grid-template-areas:
              'header image'
              'para image';
          `
        : css`
            grid-template-columns: 1fr auto;
            grid-template-areas:
              'image header'
              'image para';
          `};
    column-gap: 20vmin;
    row-gap: 5rem;
    .align {
      margin-left: 0;
      margin-right: 0;
    }
    .image {
      width: 40vw;
      height: 40vw;
    }
  }
`;

export default Overview;
