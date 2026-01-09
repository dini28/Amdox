import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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

function App() {
  return (
    <JobProvider>
      <Router>
        <Routes>
          <Route element={<Layout><Outlet /></Layout>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/explore" element={<ExploreJobs />} />
            <Route path="/dashboard" element={<JobSeekerDashboard />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </JobProvider>
  );
}

export default App;
