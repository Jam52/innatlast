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

  ${({ isUnAvailable }) =>
    isUnAvailable
      ? css`
          background-image: url(/images/calendar_unavailable.svg);
        `
      : ''};

  ${({ isSelected }) =>
    isSelected
      ? css`
          background-image: url(/images/calendar_selected.svg);
          color: white;
          opacity: 1;
        `
      : ''};
  ${({ isBetweenSelected }) =>
    isBetweenSelected
      ? css`
          background-image: url(/images/calendar_selected.svg);
          opacity: 0.5;
          color: white;
        `
      : ''};

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: ${({ isUnAvailable }) => (isUnAvailable ? 'not-allowed' : 'pointer')};
`;

export default CalendarDate;
