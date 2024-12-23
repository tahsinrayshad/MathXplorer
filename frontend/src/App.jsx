import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './assets/pages/Signin';
import Signup from './assets/pages/Signup';
import BlogHome from './assets/pages/BlogHome';
import BlogWrite from './assets/pages/BlogWrite';
import BlogPostDisplay from './assets/pages/BlogDisplay'; 
import Home from './assets/pages/Home';
import AllProblems from './assets/pages/AllProblem';
import Individualproblem from './assets/pages/IndividualProblem';
import ProtectedRoute from './assets/components/protectedroute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<BlogHome />} />
        
        {/* Protect the /blog/write route */}
        <Route
          path="/blog/write"
          element={
            <ProtectedRoute>
              <BlogWrite />
            </ProtectedRoute>
          }
        />
        
        <Route path="/blog/:id" element={<BlogPostDisplay />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problem/all" element={<AllProblems />} />
        <Route path="/problem/:id" element={<Individualproblem />} />
      </Routes>
    </Router>
  );
}

export default App;
