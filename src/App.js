import StudentHome from "./routes/StudentHome";
import AdminHome from "./routes/AdminHome";
import Mainpage from "./routes/Mainpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Mainpage />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/student" element={<StudentHome />} />
        </Routes>
      </Router>
    </div>
  );
}
