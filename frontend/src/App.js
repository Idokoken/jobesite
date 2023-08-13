import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  Login,
  Register,
  Landing,
  ProtectedRoute,
  Profile,
} from "./pages/Index";
import { AddJobs, AllJobs, SharedLayout, Stats } from "./pages/dashboard/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="alljobs" element={<AllJobs />} />
          <Route path="addjobs" element={<AddJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
