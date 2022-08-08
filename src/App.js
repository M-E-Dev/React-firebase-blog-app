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
      // backgroundColor:"#536872",
      height:"100%",
      minHeight:"100vh",
      backgroundImage:
          "url(https://images.unsplash.com/photo-1650355984861-adc971b4343f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
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
