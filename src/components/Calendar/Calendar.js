import styled from 'styled-components';
import { fetchLodgifyAvailabilityData } from '../../services/lodgifyApi';
import { useEffect, useState } from 'react';
import CalendarDate from './CalendarDate';
import { isDateUnAvailable } from './dateSelectLogic';

const Calendar = (props) => {
  const [availability, setAvailability] = useState({ tribe: [] });

  useEffect(() => {
    const getDates = async () => {
      let lodigyData = {};
      const tribeData = await fetchLodgifyAvailabilityData('309275');
      const honeyMoonData = await fetchLodgifyAvailabilityData('314112');
      lodigyData.tribe = tribeData;
      lodigyData.honeymoon = honeyMoonData;
      setAvailability(lodigyData);
    };

    getDates();
  }, []);

  let firstDayOfMonth = Number(props.initialDate.date(1).format('d'));
  let numDaysInMonth = props.initialDate.daysInMonth();

  let daysInMonth = [...Array(42).keys()].map((key) => {
    key = key - firstDayOfMonth;
    let day = props.initialDate.date(1).add(key, 'day');
    const dateIsUnavailable = isDateUnAvailable(
      day,
      availability[props.selectedRoom],
    );
    let isCurrentMonth = true;
    if (key + 1 <= 0) {
      day = props.initialDate.date(1).subtract(Math.abs(key), 'day');
      isCurrentMonth = false;
    }
    if (key + 1 > numDaysInMonth) {
      isCurrentMonth = false;
    }
    return (
      <CalendarDate
        dateNum={day.date()}
        isCurrentMonth={isCurrentMonth}
        isUnAvailable={dateIsUnavailable}
        onClick={() => {
          props.handleDateSelect(day, availability, dateIsUnavailable);
        }}
        isSelected={props.selectedDates.some((date) => date.isSame(day))}
        isBetweenSelected={
          day.isAfter(props.selectedDates[0]) &&
          day.isBefore(props.selectedDates[1])
        }
      />
    );
  });

  return (
    <Wrapper className="flow">
      <h4>{props.initialDate.format('MMM-YYYY')}</h4>
      <div className="calendar">
        <ul className="weekdays hflow hflow--between">
          <p>s</p>
          <p>m</p>
          <p>t</p>
          <p>w</p>
          <p>t</p>
          <p>f</p>
          <p>s</p>
        </ul>

        <div className="flow">
          <ul className="dates hflow hflow--between">
            {daysInMonth.slice(0, 7)}
          </ul>
          <ul className="dates hflow hflow--between">
            {daysInMonth.slice(7, 14)}
          </ul>
          <ul className="dates hflow hflow--between">
            {daysInMonth.slice(14, 21)}
          </ul>
          <ul className="dates hflow hflow--between">
            {daysInMonth.slice(21, 28)}
          </ul>
          <ul className="dates hflow hflow--between">
            {daysInMonth.slice(28, 35)}
          </ul>
          <ul className="dates hflow hflow--between">
            {daysInMonth.slice(35, 42)}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  text-align: center;
  width: 100%;
  max-width: 40rem;
  margin: auto;
  z-index: 5;

  .calendar {
    width: 100%;
  }

  .dates {
    margin: 0;
    padding: 0;
  }

  .weekdays {
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .weekdays > * {
    width: 2rem;
    font-weight: 700;
  }
`;

export default Calendar;
