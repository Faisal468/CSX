// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//  import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Blog from './components/blog';
import Careers from './components/careers';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

// Import Service Pages
import WebAppsService from './pages/services/WebAppsService';
import MobileAppsService from './pages/services/MobileAppsService';
import AIService from './pages/services/AIService';
import AcademiaXService from './pages/services/AcademiaXService';
import MatlabService from './pages/services/MatlabService';
import UIUXService from './pages/services/UIUXService';
import AnsysService from './pages/services/AnsysService';
import AnalyticsService from './pages/services/AnalyticsService';
import ManagementService from './pages/services/ManagementService';
import BubbleService from './pages/services/BubbleService';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            } 
          />
          
          {/* Public Routes */}
          <Route path="*" element={
            <>
              <Navbar />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/careers" element={<Careers />} />
            
            {/* Protected Routes */}
            
            {/* Detailed Service Pages */}
            <Route path="/services/web-apps" element={<WebAppsService />} />
            <Route path="/services/mobile-apps" element={<MobileAppsService />} />
            <Route path="/services/ai" element={<AIService />} />
            <Route path="/services/academiax" element={<AcademiaXService />} />
            <Route path="/services/matlab" element={<MatlabService />} />
            <Route path="/services/uiux" element={<UIUXService />} />
            <Route path="/services/ansys" element={<AnsysService />} />
            <Route path="/services/analytics" element={<AnalyticsService />} />
            <Route path="/services/management" element={<ManagementService />} />
            <Route path="/services/bubble" element={<BubbleService />} />
          </Routes>
        </motion.div>
        <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;