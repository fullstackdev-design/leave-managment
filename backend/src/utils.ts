import { LeaveRequest } from './types';

export function parseISODate(d: string): Date {
  return new Date(d + 'T00:00:00');
}

export function daysBetween(start: string, end: string): number {
  const s = parseISODate(start);
  const e = parseISODate(end);
  const msPerDay = 24*60*60*1000;
  return Math.round((e.getTime() - s.getTime())/msPerDay) + 1;
}

export function isPastDate(d: string): boolean {
  const today = new Date();
  today.setHours(0,0,0,0);
  return parseISODate(d) < today;
}

export function overlaps(aStart: string, aEnd: string, bStart: string, bEnd: string): boolean {
  const aS = parseISODate(aStart).getTime();
  const aE = parseISODate(aEnd).getTime();
  const bS = parseISODate(bStart).getTime();
  const bE = parseISODate(bEnd).getTime();
  return aS <= bE && bS <= aE;
}

export function hasOverlapWithExisting(leave: LeaveRequest, list: LeaveRequest[]): boolean {
  for (const l of list) {
    if (l.applicantId !== leave.applicantId) continue;
    if (l.status === 'Rejected') continue;
    if (overlaps(leave.startDate, leave.endDate, l.startDate, l.endDate)) return true;
  }
  return false;
}
