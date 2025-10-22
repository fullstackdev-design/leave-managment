import { isPastDate, daysBetween, overlaps } from './utils';

test('daysBetween calculates inclusive days', () => {
  expect(daysBetween('2025-01-01','2025-01-01')).toBe(1);
  expect(daysBetween('2025-01-01','2025-01-03')).toBe(3);
});

test('overlaps detects overlapping ranges', () => {
  expect(overlaps('2025-01-01','2025-01-05','2025-01-04','2025-01-06')).toBe(true);
  expect(overlaps('2025-01-01','2025-01-02','2025-01-03','2025-01-04')).toBe(false);
});
