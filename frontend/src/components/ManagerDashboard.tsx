import React, { useEffect, useState } from 'react';

export default function ManagerDashboard({ managerId } : { managerId: string }) {
  const [pending, setPending] = useState<any[]>([]);
  const [msg, setMsg] = useState<string | null>(null);

  async function load() {
    const res = await fetch('http://localhost:4000/leave/pending');
    const j = await res.json();
    setPending(j);
  }

  useEffect(()=>{ load(); }, []);

  async function act(id: string, approve: boolean) {
    setMsg(null);
    try {
      const res = await fetch('http://localhost:4000/leave/approve/' + id, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ managerId, approve })
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Error');
      setMsg('Success: ' + j.status);
      load();
    } catch (err:any) {
      setMsg('Error: ' + err.message);
    }
  }

  return (
    <div>
      <h3>Pending Requests</h3>
      {pending.length === 0 && <p>No pending requests</p>}
      <ul>
        {pending.map(p=>(
          <li key={p.id}>
            <b>{p.applicantId}</b>: {p.startDate} → {p.endDate} ({p.days} days)
            <div>
              <button onClick={()=>act(p.id,true)}>Approve</button>
              <button onClick={()=>act(p.id,false)}>Reject</button>
            </div>
          </li>
        ))}
      </ul>
      {msg && <p>{msg}</p>}
    </div>
  );
}
