// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Fitness App</h1>
      </div>
      <div className="hamburger" onClick={toggleDrawer}>
        &#9776; {/* Hamburger icon for mobile */}
      </div>

      {/* Only render navbar links for desktop view */}
      {!isAuthPage && (
        <ul className="navbar-links">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/workout-log">Log Workout</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      )}

      {/* Drawer for mobile view */}
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <ul className="drawer-links">
          {!isAuthPage && (
            <>
              <li>
                <Link to="/dashboard" onClick={toggleDrawer}>Dashboard</Link>
              </li>
              <li>
                <Link to="/workout-log" onClick={toggleDrawer}>Log Workout</Link>
              </li>
              <li>
                <button onClick={() => {
                  handleLogout();
                  toggleDrawer();
                }} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}