import React, { useState } from 'react';
import Login from './components/Login';
import EmployeeForm from './components/EmployeeForm';
import ManagerDashboard from './components/ManagerDashboard';

export default function App() {
  const [user, setUser] = useState<{id:string, name:string, role:string} | null>(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div style={{padding:20,fontFamily:'Arial'}}>
      <h2>Welcome, {user.name} ({user.role})</h2>
      <button onClick={()=>setUser(null)}>Logout</button>
      <hr/>
      {user.role === 'Employee' ? (
        <EmployeeForm userId={user.id} />
      ) : (
        <ManagerDashboard managerId={user.id} />
      )}
    </div>
  );
}
