const dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

export const isSelectedDatesValid = (
  selectedDates,
  minimumStay,
  lodgifyAvailabilityData,
) => {
  if (selectedDates[1].isBefore(selectedDates[0].add(minimumStay, 'day'))) {
    alert('Minimum 2 nights stay.');
    return false;
  }
  const unavailablePeriods = lodgifyAvailabilityData.filter(
    (period) => !period.is_available,
  );

  const doesContainUnavilablePeriod = unavailablePeriods.some((period) => {
    const start = dayjs(period.period_start);
    const end = dayjs(period.period_end);
    if (start.isAfter(selectedDates[0]) && end.isBefore(selectedDates[1]))
      return true;
    return false;
  });
  if (doesContainUnavilablePeriod) {
    alert('Must not contain unavilable dates.');
    return false;
  }
  return true;
};

export const removeDate = () => {
  return [];
};

export const isDateUnAvailable = (date, lodifyData) => {
  if (!lodifyData) return;
  const availableDates = lodifyData.filter(
    (bookingPeriod) => bookingPeriod.is_available,
  );
  return availableDates.every((booking) => {
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
