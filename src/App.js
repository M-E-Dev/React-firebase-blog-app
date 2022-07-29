import React from "react";
// import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContextProvider";
import AppRouter from "./router/AppRouter";
// import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
