import express from 'express';
import { applyLeave, listPending, approveLeave, monthlySummary } from '../services/leaveService';

export const router = express.Router();

router.post('/apply', (req, res) => {
  try {
    const { applicantId, startDate, endDate, reason } = req.body;
    const nr = applyLeave(applicantId, startDate, endDate, reason);
    res.json(nr);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/pending', (req, res) => {
  res.json(listPending());
});

router.post('/approve/:id', (req, res) => {
  try {
    const managerId = req.body.managerId;
    const approve = req.body.approve === true;
    const updated = approveLeave(managerId, req.params.id, approve);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/summary', (req, res) => {
  const month = parseInt(req.query.month as string) || (new Date().getMonth()+1);
  const year = parseInt(req.query.year as string) || new Date().getFullYear();
  res.json(monthlySummary(month, year));
});
