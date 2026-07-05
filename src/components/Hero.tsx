import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldAlert, ArrowRight, ArrowDown } from 'lucide-react';
import discordIcon from '../assets/images/discord_icon.png';
import robloxIcon from '../assets/images/roblox_icon.png';

interface HeroProps {
  bgImagePath: string;
  onExploreClick: () => void;
}

export default function Hero({ bgImagePath, onExploreClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden bg-slate-950"
    >
      {/* Background Image with Rich Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImagePath}
          alt="Los Angeles Skyline at Night"
          className="w-full h-full object-cover object-center opacity-95 scale-100 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Deep navy and slate linear/radial mask overlays to match screenshot color grading exactly, lightened to make background more visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,transparent_0%,rgba(2,6,23,0.5)_95%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="max-w-3xl">
          
          {/* Sub-tag: ESTABLISHED 2026 */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="h-[2px] w-6 bg-blue-500 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.4em] text-blue-400 font-mono uppercase">
              ESTABLISHED 2026
            </span>
          </motion.div>

          {/* Core Typography Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 flex flex-col"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[0.95]">
              LOS ANGELES
            </h1>
            <span className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-normal text-blue-900 font-display uppercase -mt-1 leading-none select-none">
              ROLEPLAY
            </span>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light"
          >
            A structured Emergency Response: Liberty County community dedicated to realistic law enforcement, fire service, and emergency operations across Los Angeles.
          </motion.p>

          {/* Action Buttons Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center"
            id="hero-cta-group"
          >
            {/* Join Discord Button */}
            <a
              href="https://discord.gg/losrp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111214] hover:bg-[#1e1f22] text-white px-5 py-3 rounded-md border border-slate-800/80 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-left group"
              id="discord-cta"
            >
              <img src={discordIcon} alt="Discord" className="w-6 h-6 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-xs font-extrabold tracking-wider text-slate-100">JOIN DISCORD</span>
                <span className="text-[10px] text-slate-400 font-medium mt-0.5">discord.gg/losrp</span>
              </div>
            </a>

            {/* Join ERLC Server Button */}
            <a
              href="https://www.roblox.com/games/start?launchData=%7B%5C%22psCode%5C%22%3A%5C%22LOSRRPPP%5C%22%7D&placeId=2534724415"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111214] hover:bg-[#1e1f22] text-white px-5 py-3 rounded-md border border-slate-800/80 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-left group"
              id="erlc-cta"
            >
              <img src={robloxIcon} alt="Roblox" className="w-7 h-7 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-xs font-extrabold tracking-wider text-slate-100">JOIN ERLC SERVER</span>
                <span className="text-[10px] text-sky-400 font-bold font-mono mt-0.5">LOSRRPPP</span>
              </div>
            </a>

            {/* Explore Departments Button */}
            <button
              onClick={onExploreClick}
              className="flex items-center justify-center gap-2 px-6 py-4 border border-slate-700 hover:border-slate-300 rounded-md text-xs font-bold tracking-widest text-slate-100 hover:text-white transition-all duration-300 cursor-pointer"
              id="explore-cta"
            >
              EXPLORE DEPARTMENTS
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
