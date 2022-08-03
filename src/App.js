import React from "react";
// import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { BlogContextProvider } from "./contexts/BlogContextProvider";
import AppRouter from "./router/AppRouter";
// import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App" style={{  
      backgroundColor:"#536872",
      height:"100vh",
    }}>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
