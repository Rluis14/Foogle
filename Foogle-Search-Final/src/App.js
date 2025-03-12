import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Page/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./Page/Profile/Profile";
import CombinedSearchPage from "./Page/Searchpage/CombinedSearchPage";
import app from "./firebaseConfig"; // Import Firebase

console.log("Firebase Initialized:", app); // Log to verify Firebase is connected

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<CombinedSearchPage />} />
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
