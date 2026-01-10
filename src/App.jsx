import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { JobProvider } from './context/JobContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ExploreJobs from './pages/ExploreJobs';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import CompanyProfile from './pages/CompanyProfile';
import Messages from './pages/Messages';
import Login from './pages/Login';
import RegisterJobSeeker from './pages/RegisterJobSeeker';
import RegisterJobLister from './pages/RegisterJobLister';
import RegisterSelection from './pages/RegisterSelection';

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterSelection />} />
            <Route path="/register/seeker" element={<RegisterJobSeeker />} />
            <Route path="/register/employer" element={<RegisterJobLister />} />

            <Route element={<Layout><Outlet /></Layout>}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/explore" element={<ExploreJobs />} />
              <Route path="/dashboard" element={<JobSeekerDashboard />} />
              <Route path="/employer" element={<EmployerDashboard />} />
              <Route path="/company-profile" element={<CompanyProfile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/employer/messages" element={<Messages />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
