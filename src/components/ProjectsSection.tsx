import React, { useState } from 'react';
import { Layers, ArrowRight, Database, Cpu, Radio, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import type { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'microservices' | 'distributed'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return p.category === 'ai';
    if (filter === 'microservices') return p.category === 'microservices';
    if (filter === 'distributed') return p.category === 'distributed';
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      case 'microservices':
        return <Database className="w-3.5 h-3.5 text-cyan-400" />;
      case 'distributed':
        return <Radio className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Systems Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Backend & AI Architectures
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Systems designed for throughput, transactional reliability, fault tolerance, and multi-modal intelligence.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Architectures' },
              { id: 'ai', label: 'AI Integrations' },
              { id: 'microservices', label: 'Microservices & DB' },
              { id: 'distributed', label: 'Distributed & Queues' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-[#0c121e] border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden group ${
                project.featured
                  ? 'border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-950/40'
                  : 'border-slate-800/80 hover:border-slate-700 hover:shadow-slate-900/50'
              }`}
            >
              <div className="p-6 space-y-4">
                
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">{project.category}</span>
                  </div>

                  {project.metrics[0] && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-800 text-cyan-400">
                      {project.metrics[0].value}
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <ul className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/70">
                      <div className="text-xs font-mono font-bold text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
