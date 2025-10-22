import React from 'react';

const mockUsers = [
  { id: 'u-emp-1', name: 'Alice Employee', role: 'Employee' },
  { id: 'u-emp-2', name: 'Bob Employee', role: 'Employee' },
  { id: 'u-mgr-1', name: 'Carol Manager', role: 'Manager' }
];

export default function Login({ onLogin } : { onLogin: (u:any)=>void }) {
  return (
    <div style={{padding:20}}>
      <h3>Mock Login</h3>
      <p>Choose a user to continue:</p>
      {mockUsers.map(u=>(
        <div key={u.id}>
          <button onClick={()=>onLogin(u)} style={{margin:5}}>{u.name} ({u.role})</button>
        </div>
      ))}
    </div>
  );
}
