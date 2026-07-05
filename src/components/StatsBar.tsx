import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Gift, Clock, Star } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      id: 'members',
      count: '1,500+',
      label: 'TOTAL MEMBERS',
      icon: <Users className="w-6.5 h-6.5 text-white" />,
    },
    {
      id: 'departments',
      count: '9',
      label: 'DEPARTMENTS',
      icon: <Shield className="w-6.5 h-6.5 text-white" />,
    },
    {
      id: 'giveaways',
      count: 'Regular',
      label: 'GIVEAWAYS',
      icon: <Gift className="w-6.5 h-6.5 text-white" />,
    },
    {
      id: 'sessions',
      count: 'Daily',
      label: 'DAILY SESSIONS',
      icon: <Clock className="w-6.5 h-6.5 text-white" />,
    },
    {
      id: 'established',
      count: '2026',
      label: 'ESTABLISHED',
      icon: <Star className="w-6.5 h-6.5 text-white" />,
    },
  ];

  return (
    <section className="relative z-20 bg-[#06111e] border-y border-slate-900/60 py-8 lg:py-10" id="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 text-left w-full max-w-[200px]"
              id={`stat-card-${stat.id}`}
            >
              {/* Standalone clean icon without any surrounding circles */}
              <div className="flex-shrink-0 flex items-center justify-center text-white">
                {stat.icon}
              </div>
              
              {/* Value and Label */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white leading-none">
                  {stat.count}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 mt-1 uppercase">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
