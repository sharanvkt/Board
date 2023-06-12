import "./App.css";

import Dashboard from "/src/pages/Dashboard";

import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
