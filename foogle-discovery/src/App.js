import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Page/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./Page/Profile/Profile";
import Login from "./Page/Login/login";
import Signup from "./Page/Signup/signup";
import Interaction from "./Page/Interaction/Interaction";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="interaction" element={<Interaction />} />
             {/* Protected Routes */}
            <Route path="profile" element={<Profile />} />
            {/* <Route element={<ProtectedRoute />}>
            </Route> */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
