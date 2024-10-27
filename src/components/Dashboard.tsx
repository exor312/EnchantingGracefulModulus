// src/components/Dashboard.tsx
import React from 'react';
import './Dashboard.css'; // Ensure CSS import for styles

export default function Dashboard() {
  const userEmail = localStorage.getItem('registeredEmail');

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome to your fitness dashboard!</p>
      {userEmail && <p>Logged in as: {userEmail}</p>}
    </div>
  );
}