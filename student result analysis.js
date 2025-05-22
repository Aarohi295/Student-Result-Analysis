
import React, { useState } from "react";
import Login from "./Login";
import ResultForm from "./ResultForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>Welcome to Student Result Analysis</h1>
          <ResultForm />
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;

