import React from 'react';
import { ArrowRight, Terminal, Database, Cpu, ShieldCheck, Zap, Award, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow & Grid Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/60 text-cyan-300 text-xs font-mono shadow-inner shadow-cyan-950">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Full Stack & Backend Systems Engineer • 9.8 CGPA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Building Resilient <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Microservices
              </span> & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400">
                Production AI
              </span> Architectures.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hey, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I design high-throughput distributed systems, event-driven pipelines (Redis Streams), ACID transactional databases, and production multi-modal AI workflows like <span className="text-cyan-400 font-medium">SystemSketch</span>, <span className="text-sky-300 font-medium">CatalogForge</span>, and <span className="text-purple-300 font-medium">CiviScan</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Architecture Explorer</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900/80 hover:text-white hover:bg-slate-800 border border-slate-700/80 backdrop-blur-sm transition-all"
              >
                <span>View Featured Projects</span>
              </a>

              <a
                href="#telemetry"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-mono text-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 border border-cyan-800/40 transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>Live Logs</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {PERSONAL_INFO.quickStats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-3">
                  <div className="text-cyan-400 font-extrabold text-lg sm:text-xl font-mono">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d131f]/90 border border-slate-800 shadow-2xl p-5 overflow-hidden backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">arch-core-cluster.sys</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400">
                  HEALTHY • 99.98% SLA
                </span>
              </div>

              {/* Core System Highlights in Visual Stack */}
              <div className="py-4 space-y-3 font-mono text-xs">
                {/* SystemSketch Node */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-purple-900/40 hover:border-purple-500/50 transition-colors group">
                  <div className="flex items-center justify-between text-purple-300 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-purple-400" />
                      SystemSketch AI Engine
                    </span>
                    <span className="text-[10px] text-purple-400/80 bg-purple-950/60 px-1.5 py-0.5 rounded">3rd Place</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    LLM topology synthesis decomposing microservice boundaries, gRPC contracts & broker topologies.
                  </p>
                </div>

                {/* CatalogForge Node */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40 hover:border-cyan-500/50 transition-colors group">
                  <div className="flex items-center justify-between text-cyan-300 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      CatalogForge Engine
                    </span>
                    <span className="text-[10px] text-cyan-400/80 bg-cyan-950/60 px-1.5 py-0.5 rounded">&lt;4ms Cache</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Redis Cache-Aside + MongoDB ESR compound indexing + ACID multi-document inventory deduction.
                  </p>
                </div>

                {/* CiviScan Node */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-sky-900/40 hover:border-sky-500/50 transition-colors group">
                  <div className="flex items-center justify-between text-sky-300 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-sky-400" />
                      CiviScan Vision Pipeline
                    </span>
                    <span className="text-[10px] text-sky-400/80 bg-sky-950/60 px-1.5 py-0.5 rounded">AWS Deployed</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Gemini Vision multi-modal triage + spatial deduplication + real-time Socket.IO municipal dispatch.
                  </p>
                </div>

                {/* AegisGate & VortexMQ */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      VortexMQ & AegisGate
                    </span>
                    <span className="text-[10px] text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded">10k+ QPS</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Redis Streams consumer groups, XAUTOCLAIM recovery, and atomic Redis Lua HTB rate limiting.
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  3x Hackathon Placements
                </span>
                <span className="font-mono text-cyan-400">Node.js • Python • Redis • Go/C++</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
