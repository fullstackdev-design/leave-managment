import { leaves, users } from '../data';
import { LeaveRequest, User } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { daysBetween, isPastDate, hasOverlapWithExisting } from '../utils';

export function applyLeave(applicantId: string, startDate: string, endDate: string, reason?: string) {
  // validate dates
  if (isPastDate(startDate) || isPastDate(endDate)) {
    throw new Error('Dates cannot be in the past');
  }
  if (new Date(startDate) > new Date(endDate)) {
    throw new Error('Start date must be before end date');
  }

  const days = daysBetween(startDate, endDate);
  const newLeave: LeaveRequest = {
    id: uuidv4(),
    applicantId,
    startDate,
    endDate,
    days,
    reason,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  if (hasOverlapWithExisting(newLeave, leaves)) {
    throw new Error('Overlaps with existing leave');
  }

  leaves.push(newLeave);
  return newLeave;
}

export function listPending() {
  return leaves.filter(l => l.status === 'Pending');
}

export function approveLeave(managerId: string, leaveId: string, approve: boolean) {
  const lr = leaves.find(l => l.id === leaveId);
  if (!lr) throw new Error('Leave not found');

  const mgr = users.find(u => u.id === managerId && u.role === 'Manager');
  if (!mgr) throw new Error('Only managers can approve');

  if (lr.status !== 'Pending') throw new Error('Only pending leaves can be acted upon');

  if (!approve) {
    lr.status = 'Rejected';
    lr.managerId = managerId;
    return lr;
  }

  // check balance
  const user = users.find(u => u.id === lr.applicantId);
  if (!user) throw new Error('Applicant not found');

  if (user.leaveBalance < lr.days) {
    throw new Error('Insufficient leave balance');
  }

  user.leaveBalance -= lr.days;
  lr.status = 'Approved';
  lr.managerId = managerId;
  return lr;
}

export function monthlySummary(month: number, year: number) {
  // month: 1-12
  const summary = {};
  for (const l of leaves) {
    const d = new Date(l.startDate);
    if (d.getMonth()+1 === month && d.getFullYear() === year) {
      summary[l.applicantId] = (summary[l.applicantId] || 0) + l.days;
    }
  }
  return summary;
}
