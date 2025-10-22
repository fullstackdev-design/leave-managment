import React, { useState } from 'react';

export default function EmployeeForm({ userId }: { userId: string }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    try {
      const res = await fetch('http://localhost:4000/leave/apply', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ applicantId: userId, startDate, endDate, reason })
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Error');
      setMsg('Applied successfully: ' + j.id);
    } catch (err:any) {
      setMsg('Error: ' + err.message);
    }
  }

  return (
    <div>
      <h3>Apply for Leave</h3>
      <form onSubmit={submit}>
        <div>
          <label>Start Date: <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} required /></label>
        </div>
        <div>
          <label>End Date: <input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} required /></label>
        </div>
        <div>
          <label>Reason: <input value={reason} onChange={e=>setReason(e.target.value)} /></label>
        </div>
        <button type="submit">Apply</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
