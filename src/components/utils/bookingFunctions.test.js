import { initializeTimes, timesReducer } from '../BookingPage/BookingPage';

test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('timesReducer returns the same value provided in the state', () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const action = { type: 'UPDATE_TIMES', date: '2023-10-01' };
  const result = timesReducer(state, action);
  expect(result).toEqual(state);
});
