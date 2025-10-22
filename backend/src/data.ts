// In-memory mock data
import { User, LeaveRequest } from './types';
import { v4 as uuidv4 } from 'uuid';

export const users: User[] = [
  { id: 'u-emp-1', name: 'Alice Employee', role: 'Employee', leaveBalance: 10 },
  { id: 'u-emp-2', name: 'Bob Employee', role: 'Employee', leaveBalance: 5 },
  { id: 'u-mgr-1', name: 'Carol Manager', role: 'Manager', leaveBalance: 15 }
];

export const leaves: LeaveRequest[] = [
  // sample existing leave
];
