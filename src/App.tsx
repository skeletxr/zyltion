/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import FloatingDock from "./components/layout/FloatingDock";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SmoothScroll from "./components/layout/SmoothScroll";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we're on home page and there's a hash, the FloatingDock will handle scrolling
    if (pathname === "/" && hash) {
      return;
    }
    // Otherwise scroll to top with a slight delay to ensure it works
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen overflow-x-hidden bg-[#fafafa] font-sans text-gray-900 relative">
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </SmoothScroll>
      <FloatingDock />
    </Router>
  );
}
