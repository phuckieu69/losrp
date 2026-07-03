import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Department, Application } from '../types';

interface DepartmentDetailModalProps {
  department: Department | null;
  onClose: () => void;
  onApplicationSubmit?: (app: Application) => void;
}

export default function DepartmentDetailModal({ department, onClose }: DepartmentDetailModalProps) {
  if (!department) return null;

  const hasLink = !!department.discordLink;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="dept-modal-wrapper">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative bg-[#040e21] border border-slate-900 shadow-2xl rounded-lg w-full max-w-xl flex flex-col overflow-hidden z-10"
          id={`modal-window-${department.id}`}
        >
          {/* Header Section */}
          <div className="px-6 py-6 border-b border-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                {department.logo}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-black tracking-wider text-white font-display uppercase">
                  {department.name}
                </h3>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-0.5">
                  {department.fullName}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
              id="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body: Description as flowing sentences */}
          <div className="p-8 space-y-6" id="modal-body-content">
            {department.tagline && (
              <div className="bg-[#051126]/40 border-l-2 border-slate-600 py-3 px-4 rounded-r-md">
                <p className="text-sm italic text-slate-300 font-sans">
                  "{department.tagline}"
                </p>
              </div>
            )}

            <div className="space-y-4">
              <h4 className="text-[10px] font-black tracking-[0.2em] text-blue-500 uppercase font-mono">
                DEPARTMENT OVERVIEW
              </h4>
              
              <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-line">
                {department.longDesc}
              </p>
            </div>
          </div>

          {/* Footer: JOIN THE DEPARTMENT Action */}
          <div className="px-6 py-5 border-t border-slate-900/40 flex flex-col gap-2">
            {hasLink ? (
              <a
                href={department.discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-sm text-xs font-black tracking-widest text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-950/20"
                id="join-dept-btn"
              >
                JOIN THE DEPARTMENT
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <button
                disabled
                className="w-full py-3.5 bg-slate-900 text-slate-500 rounded-sm text-xs font-black tracking-widest text-center cursor-not-allowed flex items-center justify-center gap-2 border border-slate-800"
                id="join-dept-btn-disabled"
              >
                JOIN THE DEPARTMENT (COMING SOON)
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
