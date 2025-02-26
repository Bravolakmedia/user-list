import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetails";
import "./App.css"; // Import the global styles

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
