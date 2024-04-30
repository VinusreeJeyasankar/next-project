"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
  const pathName = usePathname();

  const handleLogout = () => {
    localStorage.setItem('isUserLogged', false); // Set isUserLogged to false when logging out
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        {pathName === '/home' && (
          <a className="navbar-brand" href="/home">Dashboard</a>
        )}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {(pathName === '/login' || pathName === '/' || pathName === '') && (
                <li className="nav-item bg-warning rounded-2">
                  <a className="nav-link active" aria-current="page" href="/signup">Sign Up</a>
                </li>
              )}
              {pathName === '/signup' && (
                <li className="nav-item bg-warning rounded-2">
                  <a className="nav-link active" aria-current="page" href="/login">Login</a>
                </li>
              )}
              {pathName === '/home' && (
                <li className="nav-item bg-warning rounded-2">
                  <a className="nav-link active" aria-current="page" href="/" onClick={handleLogout}>Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
