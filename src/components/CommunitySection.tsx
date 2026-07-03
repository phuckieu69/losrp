import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, BookOpen } from 'lucide-react';

export default function CommunitySection() {
  const discordRules = [
    'No spamming or encouraging spam',
    'No harassment or abusive behavior',
    'No advertising or unauthorized promotion',
    'No discrimination or hate speech',
    'No threats, including death threats',
    'No sharing of private or personal information',
    'No impersonation of other members or staff',
    'No ban evasion under any circumstances',
    'No providing false or misleading information to staff',
    'No posting unnecessary or malicious links'
  ];

  const erlcRules = [
    {
      category: 'Community Conduct',
      rules: [
        'Treat all players and staff with respect',
        'No harassment, discrimination, or toxic behavior',
        'Follow Discord Terms of Service at all times'
      ]
    },
    {
      category: 'Roleplay Standards',
      rules: [
        'Maintain a serious roleplay environment',
        'No trolling or unrealistic behavior',
        'Follow proper scene priority'
      ]
    },
    {
      category: 'Fail Roleplay',
      rules: [
        'No unrealistic driving without valid reason',
        'Do not ignore injuries or consequences',
        'No random or forced escalation of situations'
      ]
    },
    {
      category: 'New Life Rule',
      desc: 'After death:',
      rules: [
        'Do not return to the same scene',
        'Do not remember previous events',
        'No revenge or retaliation'
      ]
    },
    {
      category: 'RDM & VDM',
      rules: [
        'Random deathmatch or vehicle attacks without valid roleplay reason are strictly prohibited'
      ]
    },
    {
      category: 'Pursuits',
      rules: [
        'No unrealistic stunts or maneuvers',
        'Do not prolong pursuits unrealistically',
        'Surrender when realistically apprehended'
      ]
    },
    {
      category: 'Metagaming & Powergaming',
      rules: [
        'Using external information or forcing unrealistic actions is not allowed'
      ]
    },
    {
      category: 'Scene Management',
      rules: [
        'Do not interrupt ongoing roleplay scenes',
        'Resolve disputes after the scene concludes'
      ]
    }
  ];

  return (
    <section className="relative z-20 py-20 lg:py-28 bg-[#020611] border-t border-slate-900/60" id="community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-16">
          <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase block mb-2 font-mono">
            PEOPLE & STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            COMMUNITY PORTAL
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Discord Rules */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col h-[580px] bg-[#030915] border border-slate-900 rounded-lg overflow-hidden"
          >
            <div className="p-5 border-b border-slate-900/60 bg-[#040d1e]/40 flex items-center gap-3">
              <Users size={18} className="text-white" />
              <div>
                <h3 className="text-xs font-black tracking-widest text-white uppercase font-mono">
                  DISCORD RULES
                </h3>
                <span className="text-[10px] text-slate-500 font-medium">CHAT REGULATIONS</span>
              </div>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                To maintain a respectful and safe community environment, all members must follow the guidelines below:
              </p>

              <div className="space-y-2.5">
                {discordRules.map((rule, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 bg-[#051126] border border-slate-900/30 p-3.5 rounded-sm hover:border-slate-800 transition-colors"
                  >
                    <span className="text-[10px] font-mono font-bold text-white mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-slate-300 font-light leading-snug">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: ERLC Rules */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col h-[580px] bg-[#030915] border border-slate-900 rounded-lg overflow-hidden"
          >
            <div className="p-5 border-b border-slate-900/60 bg-[#040d1e]/40 flex items-center gap-3">
              <Shield size={18} className="text-white" />
              <div>
                <h3 className="text-xs font-black tracking-widest text-white uppercase font-mono">
                  ERLC RULES
                </h3>
                <span className="text-[10px] text-slate-500 font-medium">IN-GAME STANDARDS</span>
              </div>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-slate-800">
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                To maintain a realistic and immersive experience, all members must follow the rules below:
              </p>

              <div className="space-y-4">
                {erlcRules.map((category, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-xs font-bold text-white block uppercase tracking-wider font-mono text-blue-400/90">
                      {category.category}
                    </span>
                    {category.desc && (
                      <span className="text-[10px] italic text-slate-400 block -mt-1">
                        {category.desc}
                      </span>
                    )}
                    <div className="space-y-1.5 pl-2">
                      {category.rules.map((rule, ruleIdx) => (
                        <div key={ruleIdx} className="flex items-start gap-2 text-[11px] text-slate-300 font-light leading-relaxed">
                          <span className="text-white/60 mt-1 flex-shrink-0">•</span>
                          <span>{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3: About Us */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col h-[580px] bg-[#030915] border border-slate-900 rounded-lg overflow-hidden"
          >
            <div className="p-5 border-b border-slate-900/60 bg-[#040d1e]/40 flex items-center gap-3">
              <BookOpen size={18} className="text-white" />
              <div>
                <h3 className="text-xs font-black tracking-widest text-white uppercase font-mono">
                  ABOUT US
                </h3>
                <span className="text-[10px] text-slate-500 font-medium">OUR COMMUNITY</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-white block uppercase tracking-wider font-mono text-blue-400/95">
                  Los Angeles Roleplay
                </span>
                
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Welcome to Los Angeles Roleplay, an immersive Emergency Response: Liberty County roleplay community. We are dedicated to providing players with a realistic, highly engaging, and professional environment to simulate civil services, emergency response agencies, and vibrant civilian life.
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Guided by structured departments, dedicated leadership, and clear standards of conduct, our members experience unparalleled simulation quality. Whether you join the thin blue line of the LAPD, patrol state highways with the CHP, manage crucial public works with Caltrans, or build your legacy in civilian operations, your journey starts here.
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Our community prioritizes high-quality roleplay scenarios, detailed training academies, and inclusive engagement, making it one of the most professional roleplay spaces available.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
