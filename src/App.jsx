import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
import PostJob from './pages/PostJob';
import Placeholder from './pages/Placeholder';
import Candidates from './pages/Candidates';
import Settings from './pages/Settings';
import SavedItems from './pages/SavedItems';

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

              <Route path="/dashboard/seeker" element={<JobSeekerDashboard />} />
              <Route path="/explorejobs" element={<ExploreJobs />} />
              <Route path="/profile/seeker" element={<Profile />} />
              <Route path="/messages/seeker" element={<Messages />} />

              <Route path="/dashboard/employer" element={<EmployerDashboard />} />
              <Route path="/employer/postjob" element={<PostJob />} />
              <Route path="/profile/employer" element={<CompanyProfile />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/messages/employer" element={<Messages />} />

              <Route path="/settings" element={<Settings />} />
              <Route path="/saved" element={<SavedItems />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
