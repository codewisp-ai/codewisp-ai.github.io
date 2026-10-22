import React from 'react';
import { Server, Cpu, Database, Layout, Activity, Check, Code } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-amber-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Skills & System Toolchain
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A comprehensive overview of my backend competencies, distributed protocols, caching topologies, and AI infrastructure.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.title}</h3>
                    <span className="text-[11px] font-mono text-cyan-400">Production Tested</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors ${
                        skill.highlight
                          ? 'bg-cyan-950/30 border border-cyan-900/50 text-cyan-200'
                          : 'bg-slate-900/60 border border-slate-800/70 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Check className={`w-3.5 h-3.5 ${skill.highlight ? 'text-cyan-400' : 'text-slate-500'}`} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        skill.highlight ? 'bg-cyan-900/60 text-cyan-300' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                {cat.skills.length} Core Competencies
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
