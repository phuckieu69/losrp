import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Departments from './components/Departments';
import DepartmentDetailModal from './components/DepartmentDetailModal';
import CommunitySection from './components/CommunitySection';
import MediaSection from './components/MediaSection';
import StaffSection from './components/StaffSection';
import { Department, Application } from './types';

// Import our custom generated background image
import bgImage from './assets/images/la_skyline_night_1782985927260.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const lastManualTimeRef = React.useRef(0);

  const handleActiveTabChange = (tabId: string) => {
    lastManualTimeRef.current = Date.now();
    setActiveTab(tabId);
  };

  // Load applications from localStorage on initial boot
  useEffect(() => {
    const savedApps = localStorage.getItem('losrp_applications');
    if (savedApps) {
      try {
        setApplications(JSON.parse(savedApps));
      } catch (err) {
        console.error('Error parsing saved applications from localStorage', err);
      }
    }
  }, []);

  // Set up highly reliable scroll spy using window scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Ignore scroll spy updates briefly if a manual click occurred
      if (Date.now() - lastManualTimeRef.current < 1000) {
        return;
      }

      const sectionIds = ['home', 'departments', 'community', 'media', 'staff'];
      
      // If we are close to the absolute bottom of the document, default to 'staff'
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveTab('staff');
        return;
      }

      const focalOffset = 150; // Offset from viewport top matching sticky header focus area
      let currentSection = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // The section is considered active if its top edge has scrolled past the focal offset
          if (rect.top <= focalOffset) {
            currentSection = id;
          }
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set active tab on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sync state to localStorage on modification
  const handleApplicationSubmit = (newApp: Application) => {
    const updatedApps = [newApp, ...applications];
    setApplications(updatedApps);
    localStorage.setItem('losrp_applications', JSON.stringify(updatedApps));
  };

  const handleRetractApplication = (id: string) => {
    const updatedApps = applications.filter((app) => app.id !== id);
    setApplications(updatedApps);
    localStorage.setItem('losrp_applications', JSON.stringify(updatedApps));
  };

  const scrollToSection = (id: string) => {
    lastManualTimeRef.current = Date.now();
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white" id="main-app-container">
      
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleActiveTabChange} 
      />

      {/* Hero Section */}
      <Hero 
        bgImagePath={bgImage}
        onExploreClick={() => scrollToSection('departments')}
      />

      {/* Horizontal Stats metrics bar */}
      <StatsBar />

      {/* Departments Grid & search section */}
      <Departments 
        onSelectDepartment={(dept) => setSelectedDepartment(dept)} 
      />

      {/* Community Section rules and live status list */}
      <CommunitySection />

      {/* Media Gallery captures */}
      <MediaSection />

      {/* Administration Command structure roster */}
      <StaffSection />

      {/* Footer Branding Area */}
      <footer className="relative bg-[#010307] border-t border-slate-900/80 py-12 text-slate-500 text-xs mt-auto" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6">
            
            {/* Brand alignment */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-slate-300 tracking-wider">LOS ANGELES ROLEPLAY</span>
              </div>
              <p className="text-[11px] text-slate-500 font-light max-w-sm">
                A community-centric roleplay portal. Immersive emergencies, detailed department frameworks, and realistic law enforcement simulation.
              </p>
            </div>

          </div>

          <div className="pt-8 mt-8 border-t border-slate-900/50 flex flex-col items-center justify-center gap-2 text-[10px] text-slate-600">
            <span>&copy; {new Date().getFullYear()} Los Angeles Roleplay Community. All rights reserved.</span>
            <span>
              Powered by <span className="text-slate-400 font-semibold">Nexaros Studios</span> —{' '}
              <a
                href="https://discord.gg/TsruaeUrmD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                join here to get yours
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive Modal: Department Detail Popup */}
      <DepartmentDetailModal 
        department={selectedDepartment} 
        onClose={() => setSelectedDepartment(null)} 
        onApplicationSubmit={handleApplicationSubmit}
      />

    </div>
  );
}
