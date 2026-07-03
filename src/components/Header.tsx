import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Users, Compass, Shield, HelpCircle } from 'lucide-react';
import websiteLogo from '../assets/images/website_logo_transparent.png';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'DEPARTMENTS', id: 'departments' },
    { label: 'COMMUNITY', id: 'community' },
    { label: 'MEDIA', id: 'media' },
    { label: 'STAFF', id: 'staff' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Group */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="header-logo-group"
          >
            <img
              src={websiteLogo}
              alt="Los Angeles Roleplay Logo"
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-slate-100 font-display group-hover:text-blue-400 transition-colors duration-200">
                LOS ANGELES
              </span>
              <span className="text-xs font-medium tracking-[0.35em] text-blue-400/80 -mt-1 group-hover:text-blue-300 transition-colors duration-200">
                ROLEPLAY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-xs font-semibold tracking-widest text-slate-300 hover:text-white transition-colors duration-200 py-2 cursor-pointer"
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Join CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://discord.gg/losrp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-slate-700 hover:border-blue-500 rounded-sm text-xs font-bold tracking-widest text-slate-100 hover:text-blue-400 hover:bg-blue-950/20 shadow-sm transition-all duration-300 cursor-pointer inline-block text-center"
              id="header-join-button"
            >
              JOIN LOSRP
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              id="header-mobile-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-6 space-y-3"
            id="header-mobile-drawer"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 text-xs font-bold tracking-wider rounded-sm ${
                      isActive 
                        ? 'bg-blue-950/40 text-blue-400 border-l-2 border-blue-500' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                    } transition-all duration-200`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-900">
                <a
                  href="https://discord.gg/losrp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-slate-100 rounded-sm text-xs font-bold tracking-widest transition-colors duration-200 block text-center"
                >
                  JOIN LOSRP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
