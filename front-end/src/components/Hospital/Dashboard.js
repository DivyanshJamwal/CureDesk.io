import React from 'react';
import { useAuth } from '../../Context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <p>You are not logged in</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>You are logged in as {user.email}</p>
    </div>
  );
}

export default Dashboard;