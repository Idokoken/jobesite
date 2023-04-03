import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage, Login, Register, Dashboard, Landing } from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
