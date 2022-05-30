import { useState } from 'react';
import styled from 'styled-components';
import Divider from '../components/Divider';
import { DefaultButton } from '../components/buttons';
import Calendar from '../components/Calendar/Calendar';
import { isSelectedDatesValid } from '../components/Calendar/dateSelectLogic';
const dayjs = require('dayjs');

const AvailabilityPage = (props) => {
  const [selectedRoom, setSelectedRoom] = useState(props?.room || 'journey');
  const [displayDate, setDisplayDate] = useState(dayjs());
  const [selectedDates, setSelectedDates] = useState([]);
  const currentMonth = displayDate.format('M');

  const season =
    currentMonth > 11 || currentMonth < 3
      ? 'winter'
      : currentMonth < 6
      ? 'spring'
      : currentMonth < 10
      ? 'summer'
      : 'fall';

  const handleDisplayDateChange = (forward) => {
    if (forward) {
      setDisplayDate(displayDate.add(1, 'M'));
      return;
    }
    setDisplayDate(displayDate.subtract(1, 'M'));
  };

  const handleDateSelect = (date, lodifyRoomData, isDateUnAvailable) => {
    if (isDateUnAvailable) return;
    const dateIsAlreadySelected = selectedDates.some((selectedDate) =>
      date.isSame(selectedDate),
    );
    if (dateIsAlreadySelected) {
      const dates = selectedDates.filter(
        (selectedDate) => !selectedDate.isSame(date),
      );
      console.log(dates);
      setSelectedDates([...dates]);
      return;
    }

    if (selectedDates.length === 0) {
      setSelectedDates([date]);
      return;
    }

    let newDates = [...selectedDates, date];

    if (newDates.length > 2) {
      newDates = [newDates[0], newDates[2]];
    }
    newDates = newDates.sort((a, b) => {
      if (a.isBefore(b)) {
        return -1;
      }
      if (b.isBefore(a)) {
        return 1;
      }
      return 0;
    });
    const minimumStay = 2;
    const datesValid = isSelectedDatesValid(
      newDates,
      minimumStay,
      lodifyRoomData[selectedRoom],
    );
    if (datesValid) {
      setSelectedDates(newDates);
    }
  };

  return (
    <Wrapper className="section flow flow--lg" season={season}>
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

      <div className="calendar-background">
        <div className="overlay" />
        <div className="container">
          <div className="hflow hflow--between ">
            <button
              className="btn--image test"
              onClick={() => handleDisplayDateChange(false)}
            >
              <img src="/images/arrow2.svg" alt="" className="arrow"></img>
            </button>
            <div className="hflow test selected-dates">
              <p className="from-to">From:</p>
              <p>
                {selectedDates.length > 0
                  ? selectedDates[0].format('MMM-D')
                  : null}
              </p>
              <p className="from-to">To:</p>
              <p>
                {selectedDates.length > 1
                  ? selectedDates[1].format('MMM-D')
                  : null}
              </p>
              <button
                className="btn--image reset"
                onClick={() => setSelectedDates([])}
              >
                <img
                  className="reset-img"
                  src="/images/reset.png"
                  alt="reset dates"
                />
              </button>
            </div>
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

          <div className="calendar-container hflow hflow--around">
            <Calendar
              selectedRoom={selectedRoom}
              initialDate={displayDate}
              handleDateSelect={handleDateSelect}
              selectedDates={selectedDates}
            />
            <div className="calendar-two">
              <Calendar
                selectedRoom={selectedRoom}
                initialDate={displayDate.add(1, 'month')}
                handleDateSelect={handleDateSelect}
                selectedDates={selectedDates}
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

  .test {
    z-index: 5;
  }

  .calendar-background {
    padding: 2rem 0;
    background-image: ${({ season }) => `url(/images/${season}.jpg)`};
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .overlay {
    background-image: var(--gradient-light);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .selected-dates {
    width: auto;
  }
  .from-to {
    font-weight: 700;
  }
  .reset-img {
    height: 2rem;
  }

  .calendar-container {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 2rem 0;
    z-index: 5;
  }

  .calendar-two {
    display: none;
    max-width: 40rem;
    margin: auto;
    z-index: 5;
  }

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
    z-index: 5;
  }

  .button-container > * + * {
    margin: 1rem 0 0 0;
  }

  @media (min-width: 900px) {
    .button-container {
      flex-direction: row;
    }

    .button-container > * + * {
      margin: 0 0 0 2rem;
    }

    .calendar-two {
      width: 100%;
      display: block;
    }
  }
`;

export default AvailabilityPage;
