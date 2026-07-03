import React from 'react';
import { motion } from 'motion/react';
import ownershipIcon from '../assets/images/staff_ownership.png';
import boardIcon from '../assets/images/staff_board.png';
import cosIcon from '../assets/images/staff_cos.png';
import oversightIcon from '../assets/images/staff_oversight.png';
import managementIcon from '../assets/images/staff_management.png';
import iaIcon from '../assets/images/staff_ia.png';
import adminIcon from '../assets/images/staff_admin.png';
import moderationIcon from '../assets/images/staff_moderation.png';

interface CommandLevel {
  id: string;
  name: string;
  description: string;
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  icon: React.ReactNode;
}

export default function StaffSection() {
  const chainOfCommand: CommandLevel[] = [
    {
      id: 'ownership',
      name: 'Ownership Team',
      description: 'Directs the absolute community vision and long-term strategy. Oversees technical systems, infrastructure, and game assets, while handling all final policy approvals.',
      color: 'from-[#ff9233] to-[#ff5231]',
      borderColor: 'border-orange-500/20',
      textColor: 'text-[#f5ad31]',
      bgColor: 'bg-orange-500/5',
      icon: (
        <img src={ownershipIcon} alt="Ownership Team" className="w-7 h-7 object-contain" />
      )
    },
    {
      id: 'board',
      name: 'Board of Directors',
      description: 'Oversees higher-level server operations, assists with major operational decisions, and actively maintains Discord and in-game activity.',
      color: 'from-[#76f2ff] to-[#1b75ff]',
      borderColor: 'border-cyan-500/20',
      textColor: 'text-[#1c74fd]',
      bgColor: 'bg-cyan-500/5',
      icon: <img src={boardIcon} alt="Board of Directors" className="w-7 h-7 object-contain" />
    },
    {
      id: 'cos',
      name: 'Chief of Staff',
      description: 'Oversees overall staff team structure and performance, coordinates closely with Oversight and Management, and handles major staff-related concerns.',
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-500/25',
      textColor: 'text-[#8c60fb]',
      bgColor: 'bg-purple-500/5',
      icon: <img src={cosIcon} alt="Chief of Staff" className="w-7 h-7 object-contain" />
    },
    {
      id: 'oversight',
      name: 'Oversight Team',
      description: 'Supervises assigned operation areas, oversees general Staff, Departments, or Community matters, and reports major concerns directly to the Chief of Staff or Board of Directors.',
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500/20',
      textColor: 'text-[#a51232]',
      bgColor: 'bg-blue-500/5',
      icon: <img src={oversightIcon} alt="Oversight Team" className="w-7 h-7 object-contain" />
    },
    {
      id: 'management',
      name: 'Management Team',
      description: 'Oversees daily staff performance, reviews active status, tickets, and logs, and provides general operational support to the staff team.',
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-[#f9dd47]',
      bgColor: 'bg-emerald-500/5',
      icon: <img src={managementIcon} alt="Management Team" className="w-7 h-7 object-contain" />
    },
    {
      id: 'ia',
      name: 'Internal Affairs Team',
      description: 'Monitors staff conduct and policy compliance, handles official staff-related reports, and issues internal discipline when needed.',
      color: 'from-red-500 to-orange-600',
      borderColor: 'border-red-500/20',
      textColor: 'text-[#173bfe]',
      bgColor: 'bg-red-500/5',
      icon: <img src={iaIcon} alt="Internal Affairs Team" className="w-7 h-7 object-contain" />
    },
    {
      id: 'admin',
      name: 'Administrative Team',
      description: 'Handles advanced server moderation, assists lower-ranking staff members with documentation, and supports general server quality.',
      color: 'from-teal-500 to-emerald-600',
      borderColor: 'border-teal-500/20',
      textColor: 'text-[#e52636]',
      bgColor: 'bg-teal-500/5',
      icon: <img src={adminIcon} alt="Administrative Team" className="w-7 h-7 object-contain" />
    },
    {
      id: 'moderation',
      name: 'Moderation Team',
      description: 'Handles basic in-game and community moderation, responds to player support reports, and maintains day-to-day order.',
      color: 'from-sky-500 to-indigo-600',
      borderColor: 'border-sky-500/20',
      textColor: 'text-[#6cd57c]',
      bgColor: 'bg-sky-500/5',
      icon: <img src={moderationIcon} alt="Moderation Team" className="w-7 h-7 object-contain" />
    }
  ];

  return (
    <section className="relative z-20 py-20 lg:py-28 bg-[#020611] border-t border-slate-900/60" id="staff">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase block mb-2 font-mono">
            STAFF CODES & HIERARCHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            CHAIN OF COMMAND
          </h2>
          <p className="text-slate-400 text-xs mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Our structured team hierarchy ensures clear operational responsibilities, transparent lines of communication, and seamless community support.
          </p>
        </div>

        {/* Vertical Hierarchy Flowchart */}
        <div className="relative space-y-6" id="staff-hierarchy-flow">
          
          {/* Aesthetic Background Line Connecting All Cards */}
          <div className="absolute left-[34px] md:left-1/2 md:-translate-x-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#ff9233]/40 via-purple-500/20 to-sky-500/40 pointer-events-none" />

          {chainOfCommand.map((group, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                id={`chain-level-${group.id}`}
              >
                {/* Line Occluder - prevents the connecting line from passing through the icon */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-4 md:top-auto w-10 h-10 rounded-full bg-[#020611] z-[5]" />

                {/* Node Icon Container */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-4 md:top-auto w-8 h-8 flex items-center justify-center z-10">
                  {group.icon}
                </div>

                {/* Left Spacing / Content for Desktop Grid */}
                <div className="w-full md:w-1/2 pr-0 md:pr-10 text-left md:text-right hidden md:block">
                  {isEven && (
                    <div className="space-y-1 flex flex-col md:items-end">
                      <h3 className={`text-sm font-black tracking-wide ${group.textColor} uppercase font-display`}>
                        {group.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed max-w-sm ml-auto">
                        {group.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Spacing / Content for Desktop Grid */}
                <div className="w-full md:w-1/2 pl-14 md:pl-10 text-left">
                  {/* Mobile content */}
                  <div className="block md:hidden space-y-1 flex flex-col items-start">
                    <h3 className={`text-sm font-black tracking-wide ${group.textColor} uppercase font-display`}>
                      {group.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Desktop Right Side Content */}
                  {!isEven && (
                    <div className="hidden md:block space-y-1 flex flex-col items-start">
                      <h3 className={`text-sm font-black tracking-wide ${group.textColor} uppercase font-display`}>
                        {group.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed max-w-sm">
                        {group.description}
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
