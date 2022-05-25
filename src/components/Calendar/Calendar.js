import styled from 'styled-components';
import { fetchLodgifyAvailabilityData } from '../../services/lodgifyApi';
import { useEffect, useState } from 'react';
import CalendarDate from './CalendarDate';
const dayjs = require('dayjs');

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

  const isDateUnAvailable = (date, lodifyData) => {
    const availableDates = lodifyData?.filter(
      (bookingPeriod) => bookingPeriod.is_available,
    );
    return availableDates?.every((booking) => {
      const startDate = dayjs(booking.period_start);
      const endDate = dayjs(booking.period_end);
      if (date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) {
        return false;
      }
      if (date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day')) {
        return false;
      }
      return true;
    });
  };

  let daysInMonth = [...Array(42).keys()].map((key) => {
    key = key - firstDayOfMonth;
    let day = props.initialDate.date(1).add(key, 'day');
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
        addData={() => 'clicked'}
        dateNum={day.date()}
        isCurrentMonth={isCurrentMonth}
        isUnAvailable={isDateUnAvailable(day, availability[props.selectedRoom])}
        onClick={() => {
          console.log('clicked');
        }}
      />
    );
  });

  return (
    <Wrapper>
      <h4>{props.initialDate.format('MMM-YYYY')}</h4>
      <table className="calendar">
        <thead>
          <tr className="weekdays">
            <th>s</th>
            <th>m</th>
            <th>t</th>
            <th>w</th>
            <th>t</th>
            <th>f</th>
            <th>s</th>
          </tr>
        </thead>
        <tbody>
          <tr>{daysInMonth.slice(0, 7)}</tr>
          <tr>{daysInMonth.slice(7, 14)}</tr>
          <tr>{daysInMonth.slice(14, 21)}</tr>
          <tr>{daysInMonth.slice(21, 28)}</tr>
          <tr>{daysInMonth.slice(28, 35)}</tr>
          <tr>{daysInMonth.slice(35, 42)}</tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  padding: 1rem;
  width: 100%;
  max-width: 30rem;
  text-align: center;
  .calendar {
    width: 100%;
  }

  .weekdays > * {
    height: 4rem;
    width: 4rem;
  }
`;

export default Calendar;
