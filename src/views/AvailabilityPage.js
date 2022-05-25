import { useState } from 'react';
import styled from 'styled-components';
import Divider from '../components/Divider';
import { DefaultButton } from '../components/buttons';
import Calendar from '../components/Calendar/Calendar';
const dayjs = require('dayjs');

const AvailabilityPage = (props) => {
  const [selectedRoom, setSelectedRoom] = useState(props?.room || 'journey');
  const [displayDate, setDisplayDate] = useState(dayjs());
  const currentMonth = displayDate.format('M');

  const season =
    currentMonth > 11 || currentMonth < 3
      ? 'Winter'
      : currentMonth < 6
      ? 'Spring'
      : currentMonth < 10
      ? 'Summer'
      : 'Fall';

  const handleDisplayDateChange = (forward) => {
    if (forward) {
      setDisplayDate(displayDate.add(1, 'M'));
      console.log(displayDate);
      return;
    }
    setDisplayDate(displayDate.subtract(1, 'M'));
  };

  return (
    <Wrapper className="section flow flow--lg">
      <div className=" container">
        <div className="header align flow flow--md">
          <h1 className="para">Book Your Stay.</h1>
          <Divider />
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet non.
            Proin quis dignissim turpis. Vestibulum vitae ligula et orci
            elementum varius.
          </p>
        </div>
      </div>
      <div className="button-container space container">
        <ButtonWrapper
          selected={selectedRoom === 'journey'}
          onClick={() => setSelectedRoom('journey')}
        >
          The Journey
        </ButtonWrapper>
        <ButtonWrapper
          selected={selectedRoom === 'tribe'}
          onClick={() => setSelectedRoom('tribe')}
        >
          The Tribe
        </ButtonWrapper>
        <ButtonWrapper
          selected={selectedRoom === 'honeymoon'}
          onClick={() => setSelectedRoom('honeymoon')}
        >
          The Honeymoon
        </ButtonWrapper>
      </div>

      <div className="bg-primary">
        <div className="container">
          <div className="hflow hflow--between">
            <button
              className="btn--image"
              onClick={() => handleDisplayDateChange(false)}
            >
              <img src="/images/arrow2.svg" alt="" className="arrow"></img>
            </button>

            <button
              className="btn--image"
              onClick={() => handleDisplayDateChange(true)}
            >
              <img
                src="/images/arrow2.svg"
                alt=""
                className="arrow arrow--right"
              ></img>
            </button>
          </div>

          <div className="calendar-container">
            <Calendar selectedRoom={selectedRoom} initialDate={displayDate} />
            <div className="calendar-two">
              <Calendar
                selectedRoom={selectedRoom}
                initialDate={displayDate.add(1, 'month')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header align flow flow--md para para--right">
          <h1>{season}</h1>
          <Divider right option="3" />
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            arcu justo. Sed congue nibh nibh, eu laoreet metus imperdiet non.
            Proin quis dignissim turpis. Vestibulum vitae ligula et orci
            elementum varius.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const ButtonWrapper = styled(DefaultButton)`
  width: 15rem;
  background-color: ${({ selected }) => (selected ? 'var(--dark)' : null)};
`;

const Wrapper = styled.section`
  padding-top: 8rem;

  .arrow {
    height: 2rem;
  }
  .arrow--right {
    transform: rotate(180deg);
  }

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-container > * + * {
    margin: 1rem 0 0 0;
  }

  .calendar-container {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }

  .calendar-two {
    display: none;
  }

  @media (min-width: 786px) {
    .button-container {
      flex-direction: row;
    }

    .button-container > * + * {
      margin: 0 0 0 2rem;
    }

    .calendar-two {
      display: block;
    }
  }
`;

export default AvailabilityPage;
