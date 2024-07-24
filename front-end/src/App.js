import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupForm from './components/Auth/SignupForm';
import LoginForm from './components/Auth/LoginForm';
import NavBar from './components/Common/NavBar';
import LandingPage from './components/Home/LandingPage';
import Footer from './components/Common/Footer';
import HospitalDetailsPage from './pages/Hospital/HospitalDetailsPage';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        {/* <Route path="/hospital/:id" element={<HospitalDetailsPage />} /> */}
        {/* Add other routes here */}
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
