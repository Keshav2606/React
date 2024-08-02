import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile"

function App() {
  return (
    <UserContextProvider>
      <h1>Login Page</h1>
      <div id="login-container">
        <Login />
      </div>
      <div id="profile">
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
