import styled, { css } from 'styled-components';

const CalendarDate = (props) => {
  return <Wrapper {...props}>{props.dateNum}</Wrapper>;
};

const Wrapper = styled.button`
  width: 2rem;
  height: 3rem;
  border: none;
  background: none;
  text-align: center;
  opacity: ${({ isCurrentMonth }) => (!isCurrentMonth ? 0.4 : 1)};
  background-image: ${({ isUnAvailable }) =>
    isUnAvailable ? 'url(/images/calendar_unavailable.svg)' : ''};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: ${({ isUnAvailable }) => (isUnAvailable ? 'not-allowed' : 'pointer')};
`;

export default CalendarDate;
