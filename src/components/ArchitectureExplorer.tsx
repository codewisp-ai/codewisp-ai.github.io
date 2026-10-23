import React, { useState } from 'react';
import { Layers, CheckCircle2, Shield, Activity, Database, Cpu, Zap, Radio, Server, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('systemsketch');
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  const handleProjectSelect = (id: string) => {
    setSelectedId(id);
    setActiveStep(1);
  };

  return (
    <section id="architecture" className="py-20 relative bg-slate-950/60 border-y border-slate-900">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive System Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend Architecture & Microservices Explorer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Deep dive into the architectural mechanics behind my production systems, event-driven pipelines, and AI orchestrations.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'systemsketch', label: 'SystemSketch', badge: 'AI Microservices', icon: Cpu },
            { id: 'catalogforge', label: 'CatalogForge', badge: 'Redis + ACID', icon: Database },
            { id: 'civiscan', label: 'CiviScan', badge: 'Gemini Vision AI', icon: Zap },
            { id: 'vortexmq', label: 'VortexMQ', badge: 'Redis Streams', icon: Radio },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleProjectSelect(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-black/25 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Canvas */}
        <div className="bg-[#0c121e] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Canvas Bar */}
          <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400">
                  {selectedProject.tagline}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {selectedProject.architectureOverview}
              </p>
            </div>

            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/80 border border-cyan-800/60 transition-colors"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Left Column: Interactive Visual Topology Flow */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Request Execution Flow & Component Topology
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  Step {activeStep} of {selectedProject.architectureFlow.length}
                </span>
              </div>

              {/* Step Navigation Cards */}
              <div className="space-y-3">
                {selectedProject.architectureFlow.map((flow) => {
                  const isActive = activeStep === flow.step;
                  return (
                    <div
                      key={flow.step}
                      onClick={() => setActiveStep(flow.step)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-950/40 to-slate-900 border-cyan-500/60 shadow-md shadow-cyan-950/50 translate-x-1'
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                            isActive
                              ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-400'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            0{flow.step}
                          </div>
                          <div>
                            <h4 className={`text-sm font-semibold ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                              {flow.title}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400">
                              Tech: {flow.technology}
                            </span>
                          </div>
                        </div>

                        {isActive && (
                          <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800 rounded">
                            ACTIVE NODE
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-xs text-slate-300 leading-relaxed pl-10">
                        {flow.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Key Architecture Highlights */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  Engineering Decisions & Trade-Offs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: System Design Specifications & Production Metrics */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900/30 space-y-6">
              
              {/* Telemetry Metrics Grid */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <Server className="w-4 h-4 text-cyan-400" />
                  Live Operational Telemetry
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-lg font-bold font-mono text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Design Specifications */}
              {selectedProject.systemDesignSpecs && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    System Design Specifications
                  </span>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 block">Architectural Pattern</span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {selectedProject.systemDesignSpecs.pattern}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 block">Throughput & Latency SLA</span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {selectedProject.systemDesignSpecs.throughputOrLatency}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 block">Resilience & Failover</span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {selectedProject.systemDesignSpecs.resilience}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 block">Data Tier & Indexing</span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {selectedProject.systemDesignSpecs.storage}
                    </p>
                  </div>
                </div>
              )}

              {/* Technologies in this Architecture */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Core Architectural Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 border border-slate-700/80 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
