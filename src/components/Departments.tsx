import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Department } from '../types';
import { DEPARTMENTS_DATA } from '../data/departments';

interface DepartmentsProps {
  onSelectDepartment: (dept: Department) => void;
}

export default function Departments({ onSelectDepartment }: DepartmentsProps) {
  return (
    <section className="relative z-20 py-20 lg:py-28 bg-[#020813]" id="departments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex-1">
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase block mb-2 font-mono">
              OUR AGENCIES
            </span>
            <div className="flex items-center gap-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                DEPARTMENTS
              </h2>
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="departments-grid">
          {DEPARTMENTS_DATA.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col bg-[#051126] border border-slate-900/50 hover:border-slate-800 rounded-md p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-950/10 cursor-pointer"
              onClick={() => onSelectDepartment(dept)}
              id={`dept-card-${dept.id}`}
            >
              {/* Badge Center Logo */}
              <div className="flex justify-center mb-6 transform group-hover:scale-105 transition-transform duration-300">
                {dept.logo}
              </div>

              {/* Typography Stack */}
              <div className="text-center flex flex-col flex-grow">
                <h3 className="text-base font-black tracking-wider text-white font-display mb-1 group-hover:text-blue-400 transition-colors">
                  {dept.name}
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-4 h-7 flex items-center justify-center line-clamp-2">
                  {dept.fullName}
                </span>
                
                {/* Divider line */}
                <div className="w-8 h-[2px] bg-slate-800 group-hover:bg-blue-500/50 mx-auto mb-4 transition-colors duration-300" />
                
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-6 line-clamp-4 text-center">
                  {dept.shortDesc}
                </p>
              </div>

              {/* Bottom Arrow action link */}
              <div className="mt-auto pt-4 border-t border-slate-900/40 flex items-center justify-center gap-1.5 text-[10px] font-black tracking-widest text-slate-400 group-hover:text-white transition-colors">
                VIEW DEPARTMENT
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
