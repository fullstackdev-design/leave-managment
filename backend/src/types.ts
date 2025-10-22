export type Role = 'Employee' | 'Manager';

export interface User {
  id: string;
  name: string;
  role: Role;
  leaveBalance: number; // days
}

export type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

export interface LeaveRequest {
  id: string;
  applicantId: string;
  startDate: string; // ISO
  endDate: string;   // ISO
  days: number;
  reason?: string;
  status: LeaveStatus;
  managerId?: string;
  createdAt: string;
}
