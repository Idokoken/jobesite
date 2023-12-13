import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  Login,
  Register,
  Landing,
  ProtectedRoute,
  Profile,
  Home,
} from "./pages/Index";
import { AddJobs, AllJobs, SharedLayout, Stats } from "./pages/dashboard/Index";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
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
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
