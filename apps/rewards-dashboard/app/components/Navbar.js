import { useState } from "react";

export default function Navbar({ setView }) {
  return (
    <div className="navbar">
      <img src="/lilypad-logo.svg" alt="Lilypad Logo" />
      <span className="navbar-links">
        <a
          href="#"
          className="navbar-link"
          onClick={() => setView("openSource")}
        >
          Open Source Rewards
        </a>
        <a
          href="#"
          className="navbar-link"
          onClick={() => setView("ambassador")}
        >
          Ambassador Rewards
        </a>
      </span>
    </div>
  );
}
