/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import FloatingDock from './components/layout/FloatingDock';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 relative overflow-x-hidden">
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingDock />
      </div>
    </Router>
  );
}
