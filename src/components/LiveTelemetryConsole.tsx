import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Pause, Trash2, Zap, Radio, CheckCircle, ShieldAlert } from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  service: 'SystemSketch' | 'CatalogForge' | 'CiviScan' | 'VortexMQ' | 'AegisGate';
  level: 'INFO' | 'SUCCESS' | 'WARN';
  message: string;
  latency?: string;
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: '1',
    timestamp: '17:14:02.102',
    service: 'CatalogForge',
    level: 'SUCCESS',
    message: 'Cache-Aside Hit: GET /api/v1/catalog/category/electronics (ESR index { category: 1, price: 1, stock: 1 })',
    latency: '3.1ms'
  },
  {
    id: '2',
    timestamp: '17:14:02.348',
    service: 'SystemSketch',
    level: 'INFO',
    message: 'LLM Agent parsed architecture constraint: "50k QPS read-heavy social feed". Decomposed 4 microservices + Redis cache tier.',
    latency: '1.9s'
  },
  {
    id: '3',
    timestamp: '17:14:02.890',
    service: 'CiviScan',
    level: 'SUCCESS',
    message: 'Gemini Vision multi-modal inference: image classified as "Severe Asphalt Fissure". Severity: 0.91. Auto-assigned: Public Works.',
    latency: '1.4s'
  },
  {
    id: '4',
    timestamp: '17:14:03.115',
    service: 'VortexMQ',
    level: 'INFO',
    message: 'XREADGROUP worker-pool-east consumed 50 messages from "events:notification:stream".',
    latency: '9.2ms'
  },
  {
    id: '5',
    timestamp: '17:14:03.560',
    service: 'CatalogForge',
    level: 'SUCCESS',
    message: 'ACID Transaction Committed: Order #CF-98211. Stock atomically decremented. Zero race conditions detected.',
    latency: '34.8ms'
  },
  {
    id: '6',
    timestamp: '17:14:04.012',
    service: 'VortexMQ',
    level: 'INFO',
    message: 'XAUTOCLAIM routine executed: Reclaimed 0 stalled messages from Pending Entries List (PEL). DLQ depth: 0.',
    latency: '4.5ms'
  },
  {
    id: '7',
    timestamp: '17:14:04.450',
    service: 'AegisGate',
    level: 'SUCCESS',
    message: 'Redis Lua HTB Rate Limiter: Tenant tier "enterprise" ALLOW (tokens remaining: 984/1000).',
    latency: '0.7ms'
  }
];

const SIMULATED_STREAM: Omit<LogEntry, 'id' | 'timestamp'>[] = [
  {
    service: 'CatalogForge',
    level: 'SUCCESS',
    message: 'Cache hit on product query #8129: TTL auto-refreshed (Cache hit ratio 93.4%).',
    latency: '2.8ms'
  },
  {
    service: 'SystemSketch',
    level: 'INFO',
    message: 'Generated gRPC protobuf interface contracts for OrderService <-> InventoryService.',
    latency: '620ms'
  },
  {
    service: 'CiviScan',
    level: 'SUCCESS',
    message: 'Socket.IO broadcasted civic dispatch alert to municipal dashboard. Leaflet coordinate: (27.8974, 78.0880).',
    latency: '82ms'
  },
  {
    service: 'VortexMQ',
    level: 'INFO',
    message: 'ZSET delay queue evaluated: dispatched 12 scheduled retry payloads with exponential backoff & jitter.',
    latency: '11.4ms'
  },
  {
    service: 'AegisGate',
    level: 'SUCCESS',
    message: 'Asynchronous PostgreSQL ledger logged 1,000 throughput units for billing tenant #201.',
    latency: '5.2ms'
  },
  {
    service: 'CatalogForge',
    level: 'INFO',
    message: 'Refresh token rotation triggered: new session family cookie emitted; previous refresh token invalidated.',
    latency: '18.1ms'
  },
  {
    service: 'SystemSketch',
    level: 'SUCCESS',
    message: 'Directed Acyclic Graph (DAG) cycle verification passed: No circular microservice dependencies.',
    latency: '310ms'
  }
];

export const LiveTelemetryConsole: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [isStreaming, setIsStreaming] = useState<boolean>(true);
  const [serviceFilter, setServiceFilter] = useState<string>('ALL');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      const randomEvent = SIMULATED_STREAM[Math.floor(Math.random() * SIMULATED_STREAM.length)];
      const now = new Date();
      const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;

      const newLog: LogEntry = {
        ...randomEvent,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: timeStr
      };

      setLogs((prev) => [...prev.slice(-30), newLog]);
    }, 2800);

    return () => clearInterval(interval);
  }, [isStreaming]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const triggerSpike = () => {
    const now = new Date();
    const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;

    const burstLogs: LogEntry[] = [
      {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: timeStr,
        service: 'AegisGate',
        level: 'WARN',
        message: 'TRAFFIC BURST: 5,000 concurrent requests arriving. HTB elastic borrowing activated.',
        latency: '0.9ms'
      },
      {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: timeStr,
        service: 'VortexMQ',
        level: 'INFO',
        message: 'Redis Streams consumer auto-scaled 4 additional worker instances under high PEL load.',
        latency: '14.1ms'
      },
      {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: timeStr,
        service: 'CatalogForge',
        level: 'SUCCESS',
        message: 'Redis Cache-Aside absorbed 94.8% of spike traffic. Database CPU remained at 12%.',
        latency: '3.4ms'
      }
    ];

    setLogs((prev) => [...prev, ...burstLogs]);
  };

  const filteredLogs = logs.filter((log) => {
    if (serviceFilter === 'ALL') return true;
    return log.service === serviceFilter;
  });

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'SystemSketch':
        return 'text-purple-400 bg-purple-950/70 border-purple-800';
      case 'CatalogForge':
        return 'text-cyan-400 bg-cyan-950/70 border-cyan-800';
      case 'CiviScan':
        return 'text-sky-400 bg-sky-950/70 border-sky-800';
      case 'VortexMQ':
        return 'text-emerald-400 bg-emerald-950/70 border-emerald-800';
      default:
        return 'text-amber-400 bg-amber-950/70 border-amber-800';
    }
  };

  return (
    <section id="telemetry" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Simulated System Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Backend Event & AI Telemetry Console
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real-time trace logs demonstrating Redis Cache-Aside hits, Gemini Vision inference latency, XAUTOCLAIM stream recovery, and atomic rate limit validation.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#080d17] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Terminal Window Header Bar */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>telemetry@codewisp-backend: ~ / cluster-stream</span>
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsStreaming(!isStreaming)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-[11px] transition-colors cursor-pointer ${
                  isStreaming
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {isStreaming ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isStreaming ? 'Streaming' : 'Paused'}</span>
              </button>

              <button
                onClick={triggerSpike}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 hover:bg-cyan-900/60 border border-cyan-800 text-[11px] transition-colors cursor-pointer"
                title="Simulate high-concurrency traffic burst"
              >
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>Simulate Spike</span>
              </button>

              <button
                onClick={() => setLogs([])}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                title="Clear Logs"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/80 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-slate-500">Filter Service:</span>
            {['ALL', 'SystemSketch', 'CatalogForge', 'CiviScan', 'VortexMQ', 'AegisGate'].map((srv) => (
              <button
                key={srv}
                onClick={() => setServiceFilter(srv)}
                className={`px-2.5 py-0.5 rounded cursor-pointer transition-colors ${
                  serviceFilter === srv
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {srv}
              </button>
            ))}
          </div>

          {/* Logs Viewport */}
          <div
            ref={scrollRef}
            className="p-5 h-96 overflow-y-auto space-y-2.5 leading-relaxed bg-[#060a12]"
          >
            {filteredLogs.length === 0 ? (
              <div className="text-slate-500 py-12 text-center">
                No logs matching filter. Click "Simulate Spike" or resume streaming.
              </div>
            ) : (
              filteredLogs.map((log) => (
                <div key={log.id} className="flex flex-wrap sm:flex-nowrap items-start gap-2.5 text-xs hover:bg-slate-900/40 p-1 rounded transition-colors">
                  <span className="text-slate-500 flex-shrink-0 select-none">
                    [{log.timestamp}]
                  </span>

                  <span className={`px-2 py-0.5 rounded text-[10px] border font-bold flex-shrink-0 ${getServiceColor(log.service)}`}>
                    {log.service}
                  </span>

                  <span className={`flex-1 break-words ${
                    log.level === 'WARN' ? 'text-amber-300' : 'text-slate-300'
                  }`}>
                    {log.message}
                  </span>

                  {log.latency && (
                    <span className="text-cyan-400/90 text-[11px] font-semibold flex-shrink-0 bg-cyan-950/30 px-1.5 py-0.5 rounded">
                      {log.latency}
                    </span>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Terminal Footer Info */}
          <div className="px-5 py-2.5 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Event telemetry stream connected • 0% packet loss</span>
            </span>
            <span className="text-slate-500">
              Total events recorded: {logs.length}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
