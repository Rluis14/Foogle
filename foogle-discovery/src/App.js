import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Page/Home/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
