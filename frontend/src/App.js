import React, { useState } from "react";
import Form from "./components/Form";
import ApplicantList from "./components/ApplicantList";
import "./App.css";

function App() {
  const [view, setView] = useState("form");

  return (
    <div className="container">
      <header>
        <h1>☁️ Cloud Resume Portal</h1>
        <p className="subtitle">Submit your application & view submissions — demo project</p>
      </header>

      <div className="menu">
        <button onClick={() => setView("form")} className={view === "form" ? "active" : ""}>
          Submit Application
        </button>
        <button onClick={() => setView("list")} className={view === "list" ? "active" : ""}>
          View Submissions
        </button>
      </div>

      {view === "form" ? <Form /> : <ApplicantList />}
      <footer>
        <small>Built by Naveen — AWS SAA portfolio demo</small>
      </footer>
    </div>
  );
}

export default App;
