import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import NewContextProvider from "./contexts/NewContext";
import UserContextProvider from "./contexts/UserContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NewContextProvider>
          <UserContextProvider>
            <AppRouter />
          <ToastContainer/>

          </UserContextProvider>
        </NewContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
