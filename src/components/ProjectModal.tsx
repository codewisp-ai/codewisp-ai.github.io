import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Server, Layers, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d131f] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>{project.category.toUpperCase()} • PRODUCTION ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-base text-cyan-300 font-medium">
            {project.tagline}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed pt-1">
            {project.architectureOverview}
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-cyan-400 font-bold font-mono text-lg">{m.value}</div>
              <div className="text-slate-400 text-xs mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* System Design Blueprint Details */}
        {project.systemDesignSpecs && (
          <div className="my-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              Production System Blueprint
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-cyan-400 font-mono block">Pattern:</span>
                <span className="text-slate-300">{project.systemDesignSpecs.pattern}</span>
              </div>
              <div>
                <span className="text-cyan-400 font-mono block">Latency / SLA:</span>
                <span className="text-slate-300">{project.systemDesignSpecs.throughputOrLatency}</span>
              </div>
              <div>
                <span className="text-cyan-400 font-mono block">Resilience:</span>
                <span className="text-slate-300">{project.systemDesignSpecs.resilience}</span>
              </div>
              <div>
                <span className="text-cyan-400 font-mono block">Persistence & Caching:</span>
                <span className="text-slate-300">{project.systemDesignSpecs.storage}</span>
              </div>
            </div>
          </div>
        )}

        {/* Execution Flow Steps */}
        <div className="my-6 space-y-3">
          <h4 className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Step-by-Step Data Flow
          </h4>
          <div className="space-y-2.5">
            {project.architectureFlow.map((flow) => (
              <div key={flow.step} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                  {flow.step}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-white">{flow.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                      {flow.technology}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {flow.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="my-6 space-y-2">
          <h4 className="text-xs font-mono uppercase text-slate-400">
            Key Architecture Innovations & Rigor
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="my-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20"
            >
              <Github className="w-4 h-4" />
              <span>View Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          ) : (
            <span className="text-xs text-slate-500 font-mono">Team/Hackathon Project</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
