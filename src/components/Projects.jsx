import { useState } from 'react';
export default function Projects() {
  const [filter, setFilter] = useState('all');
  return (
    <section className="w-full flex flex-col scroll-mt-24" id="projects">
      <div className="inline-flex items-center gap-2 bg-pure-white border-[3px] border-b-0 border-stroke-obsidian px-4 py-2 rounded-t-xl self-start z-10 -mb-[3px] shadow-[4px_0px_0px_#0B0F19]">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-stroke-obsidian text-[22px]"
        >
          folder
        </span>
        <span className="font-headline-sm text-lg sm:text-headline-sm text-stroke-obsidian uppercase font-extrabold">
          Projects
        </span>
      </div>

      <div className="w-full bg-surface-violet border-[3px] sm:border-[4px] border-stroke-obsidian rounded-b-xl rounded-tr-xl p-4 sm:p-8 md:p-10 shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19] flex flex-col gap-6 sm:gap-10">
        <p className="font-label-code text-xs text-white">
          Selected projects. Voyager AI, PulseCheck.ai, and SQL Visualizer show
          actual product screenshots; TNT is an enterprise confidential project.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 bg-pure-white border-[3px] border-stroke-obsidian p-3 sm:p-4 rounded-lg shadow-[4px_4px_0px_#0B0F19]">
          <span className="font-label-code text-xs sm:text-label-code text-stroke-obsidian font-bold uppercase flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[18px]"
            >
              filter_list
            </span>
            FILTER BUILDS:
          </span>
          <div
            className="flex flex-wrap items-center gap-1.5 sm:gap-2"
            id="filter-container"
          >
            <button
              className={`project-filter-btn px-3 py-1 text-stroke-obsidian border-[2px] border-stroke-obsidian rounded font-label-badge text-xs shadow-[2px_2px_0px_#0B0F19] cursor-pointer font-bold transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 ${filter === 'all' ? 'bg-surface-lime' : 'bg-canvas-cream'}`}
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              data-filter="all"
            >
              ALL (4)
            </button>
            <button
              className={`project-filter-btn px-3 py-1 text-stroke-obsidian border-[2px] border-stroke-obsidian rounded font-label-badge text-xs shadow-[2px_2px_0px_#0B0F19] hover:bg-surface-lime transition-all cursor-pointer font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 ${filter === 'react' ? 'bg-surface-lime' : 'bg-canvas-cream'}`}
              onClick={() => setFilter('react')}
              aria-pressed={filter === 'react'}
              data-filter="react"
            >
              REACT
            </button>
            <button
              className={`project-filter-btn px-3 py-1 text-stroke-obsidian border-[2px] border-stroke-obsidian rounded font-label-badge text-xs shadow-[2px_2px_0px_#0B0F19] hover:bg-surface-lime transition-all cursor-pointer font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 ${filter === 'next' ? 'bg-surface-lime' : 'bg-canvas-cream'}`}
              onClick={() => setFilter('next')}
              aria-pressed={filter === 'next'}
              data-filter="next"
            >
              NEXT.JS
            </button>
            <button
              className={`project-filter-btn px-3 py-1 text-stroke-obsidian border-[2px] border-stroke-obsidian rounded font-label-badge text-xs shadow-[2px_2px_0px_#0B0F19] hover:bg-surface-lime transition-all cursor-pointer font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 ${filter === 'api' ? 'bg-surface-lime' : 'bg-canvas-cream'}`}
              onClick={() => setFilter('api')}
              aria-pressed={filter === 'api'}
              data-filter="api"
            >
              APIs / REAL-TIME
            </button>
          </div>
        </div>

        {(filter === 'all' || ['next', 'api'].includes(filter)) && (
          <div
            className="project-card bg-surface-lime border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl p-4 sm:p-6 md:p-8 shadow-[5px_5px_0px_#0B0F19] sm:shadow-[6px_6px_0px_#0B0F19] flex flex-col lg:flex-row gap-6 items-stretch hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#0B0F19] transition-all duration-200"
            data-categories="next api"
          >
            <div className="w-full lg:w-7/12 bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-2 sm:p-3 shadow-[4px_4px_0px_#0B0F19] overflow-hidden group flex flex-col">
              <div className="bg-canvas-cream border-[2px] border-stroke-obsidian rounded p-2 flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-coral-dark border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-lime border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-cyan border border-stroke-obsidian"></span>
                </div>
                <span className="font-label-code text-[11px] sm:text-label-code text-stroke-obsidian font-bold truncate max-w-[200px] sm:max-w-none">
                  VOYAGER AI
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[16px] text-stroke-obsidian"
                >
                  lock
                </span>
              </div>
              <div className="w-full flex-1 overflow-hidden rounded border-[2px] border-stroke-obsidian bg-stroke-obsidian">
                <img
                  loading="lazy"
                  width="1817"
                  height="916"
                  decoding="async"
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-contain transition-transform duration-300"
                  alt="Voyager AI travel planning interface with personalized itineraries, local curation, and budget planning."
                  src="/images/voyager-ai.png"
                />
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-stroke-obsidian text-pure-white px-2 py-0.5 rounded font-label-code text-xs uppercase font-bold">
                    PROJECT // 01
                  </span>
                  <span className="bg-surface-violet text-pure-white font-label-badge text-xs px-2 py-0.5 rounded border border-stroke-obsidian font-bold">
                    AI TRAVEL SAAS
                  </span>
                </div>
                <h4 className="font-display-hero text-2xl sm:text-headline-md md:text-headline-lg text-stroke-obsidian uppercase leading-tight tracking-tight mb-3 break-words">
                  Voyager AI
                </h4>
                <div className="bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-3 sm:p-4 shadow-[3px_3px_0px_#0B0F19] mb-4">
                  <p className="font-body-md text-xs sm:text-body-md text-stroke-obsidian">
                    An AI-powered travel itinerary SaaS with freemium
                    monetization and authentication gates. I built a prompt
                    pipeline with structured JSON and TypeScript schemas,
                    integrated Claude and OpenAI models through OpenRouter, and
                    added Leaflet maps with Google Maps route optimization.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-[2px] border-stroke-obsidian">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    Next.js
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    OpenRouter / Claude
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    Supabase
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="p-2 bg-pure-white border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 flex items-center transition-all"
                    href="#contact"

                    title="Ask about this project"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px] sm:text-[20px] text-stroke-obsidian"
                    >
                      code
                    </span>
                  </a>
                  <a
                    className="px-3 sm:px-4 py-1.5 bg-stroke-obsidian text-surface-lime rounded border-[2px] border-stroke-obsidian shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 font-label-badge text-xs uppercase flex items-center gap-1 font-bold transition-all"
                    href="https://voyager-ai-weld.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px] sm:text-[16px]"
                    >
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {(filter === 'all' || ['react', 'api'].includes(filter)) && (
          <div
            className="project-card bg-surface-lime border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl p-4 sm:p-6 md:p-8 shadow-[5px_5px_0px_#0B0F19] sm:shadow-[6px_6px_0px_#0B0F19] flex flex-col lg:flex-row gap-6 items-stretch hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#0B0F19] transition-all duration-200"
            data-categories="react api"
          >
            <div className="w-full lg:w-7/12 bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-2 sm:p-3 shadow-[4px_4px_0px_#0B0F19] overflow-hidden group flex flex-col">
              <div className="bg-canvas-cream border-[2px] border-stroke-obsidian rounded p-2 flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-coral-dark border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-lime border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-cyan border border-stroke-obsidian"></span>
                </div>
                <span className="font-label-code text-[11px] sm:text-label-code text-stroke-obsidian font-bold truncate max-w-[200px] sm:max-w-none">
                  PULSECHECK.AI
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[16px] text-stroke-obsidian"
                >
                  lock
                </span>
              </div>
              <div className="w-full flex-1 overflow-hidden rounded border-[2px] border-stroke-obsidian bg-stroke-obsidian">
                <img
                  loading="lazy"
                  width="1505"
                  height="910"
                  decoding="async"
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-contain transition-transform duration-300"
                  alt="PulseCheck.ai habit dashboard showing daily quests, Duo Aura Score, streaks, and overall XP."
                  src="/images/pulsecheck-ai.png"
                />
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-stroke-obsidian text-pure-white px-2 py-0.5 rounded font-label-code text-xs uppercase font-bold">
                    PROJECT // 02
                  </span>
                  <span className="bg-surface-cyan text-stroke-obsidian font-label-badge text-xs px-2 py-0.5 rounded border border-stroke-obsidian font-bold">
                    AI HABIT TRACKER
                  </span>
                </div>
                <h4 className="font-display-hero text-2xl sm:text-headline-md md:text-headline-lg text-stroke-obsidian uppercase leading-tight tracking-tight mb-3 break-words">
                  PulseCheck.ai
                </h4>
                <div className="bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-3 sm:p-4 shadow-[3px_3px_0px_#0B0F19] mb-4">
                  <p className="font-body-md text-xs sm:text-body-md text-stroke-obsidian">
                    An AI-powered habit tracking application that uses
                    LLM-generated summaries and personalized guidance to help
                    users build consistent routines. Built with React, Node.js,
                    and the OpenAI API.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-[2px] border-stroke-obsidian">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    React
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    Node.js
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    OpenAI API
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="p-2 bg-pure-white border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 flex items-center transition-all"
                    href="#contact"

                    title="Ask about this project"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px] sm:text-[20px] text-stroke-obsidian"
                    >
                      code
                    </span>
                  </a>
                  <a
                    className="px-3 sm:px-4 py-1.5 bg-stroke-obsidian text-surface-lime rounded border-[2px] border-stroke-obsidian shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 font-label-badge text-xs uppercase flex items-center gap-1 font-bold transition-all"
                    href="https://habitpulse-1c2ae.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px] sm:text-[16px]"
                    >
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {(filter === 'all' || ['react', 'api'].includes(filter)) && (
          <div
            className="project-card bg-surface-lime border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl p-4 sm:p-6 md:p-8 shadow-[5px_5px_0px_#0B0F19] sm:shadow-[6px_6px_0px_#0B0F19] flex flex-col lg:flex-row gap-6 items-stretch hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#0B0F19] transition-all duration-200"
            data-categories="react api"
          >
            <div className="w-full lg:w-7/12 bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-2 sm:p-3 shadow-[4px_4px_0px_#0B0F19] overflow-hidden group flex flex-col">
              <div className="bg-canvas-cream border-[2px] border-stroke-obsidian rounded p-2 flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-coral-dark border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-lime border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-cyan border border-stroke-obsidian"></span>
                </div>
                <span className="font-label-code text-[11px] sm:text-label-code text-stroke-obsidian font-bold truncate max-w-[200px] sm:max-w-none">
                  CONFIDENTIAL PROJECT
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[16px] text-stroke-obsidian"
                >
                  lock
                </span>
              </div>
              <div className="w-full flex-1 overflow-hidden rounded border-[2px] border-stroke-obsidian bg-stroke-obsidian">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Confidential enterprise project - TNT Track & Trace Cash"
                  src="/images/tnt-confidential.jpg"
                />
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-stroke-obsidian text-pure-white px-2 py-0.5 rounded font-label-code text-xs uppercase font-bold">
                    PROJECT // 03
                  </span>
                  <span className="bg-surface-coral-dark text-pure-white font-label-badge text-xs px-2 py-0.5 rounded border border-stroke-obsidian font-bold">
                    FINTECH
                  </span>
                </div>
                <h4 className="font-display-hero text-2xl sm:text-headline-md md:text-headline-lg text-stroke-obsidian uppercase leading-tight tracking-tight mb-3 break-words">
                  TNT — Track & Trace Cash
                </h4>
                <div className="bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-3 sm:p-4 shadow-[3px_3px_0px_#0B0F19] mb-4">
                  <p className="font-body-md text-xs sm:text-body-md text-stroke-obsidian">
                    At Appgambit, I am architecting secure, multi-step cash transfer
                    workflows for enterprise clients. The application combines
                    encryption, audit logs, role-based access, and MySQL
                    database design to support high-volume financial transaction
                    processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-[2px] border-stroke-obsidian">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    Angular / React
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    Node.js
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    MySQL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="p-2 bg-pure-white border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 flex items-center transition-all"
                    href="#contact"

                    title="Ask about this project"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px] sm:text-[20px] text-stroke-obsidian"
                    >
                      code
                    </span>
                  </a>
                  <a
                    className="px-3 sm:px-4 py-1.5 bg-stroke-obsidian text-surface-lime rounded border-[2px] border-stroke-obsidian shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 font-label-badge text-xs uppercase flex items-center gap-1 font-bold transition-all"
                    href="#contact"
                  >
                    <span>DISCUSS PROJECT</span>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px] sm:text-[16px]"
                    >
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {(filter === 'all' || ['react'].includes(filter)) && (
          <div
            className="project-card bg-surface-lime border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl p-4 sm:p-6 md:p-8 shadow-[5px_5px_0px_#0B0F19] sm:shadow-[6px_6px_0px_#0B0F19] flex flex-col lg:flex-row gap-6 items-stretch hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#0B0F19] transition-all duration-200"
            data-categories="react"
          >
            <div className="w-full lg:w-7/12 bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-2 sm:p-3 shadow-[4px_4px_0px_#0B0F19] overflow-hidden group flex flex-col">
              <div className="bg-canvas-cream border-[2px] border-stroke-obsidian rounded p-2 flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-coral-dark border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-lime border border-stroke-obsidian"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-surface-cyan border border-stroke-obsidian"></span>
                </div>
                <span className="font-label-code text-[11px] sm:text-label-code text-stroke-obsidian font-bold truncate max-w-[200px] sm:max-w-none">
                  SQL VISUALIZER / QUERYLENS
                </span>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[16px] text-stroke-obsidian"
                >
                  lock
                </span>
              </div>
              <div className="w-full flex-1 overflow-hidden rounded border-[2px] border-stroke-obsidian bg-stroke-obsidian">
                <img
                  loading="lazy"
                  width="1917"
                  height="912"
                  decoding="async"
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-contain transition-transform duration-300"
                  alt="QueryLens SQL Visualizer showing a SQL editor, execution results, and an interactive graph of table scans, joins, filters, results, and sorting."
                  src="/images/sql-visualizer.png"
                />
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-stroke-obsidian text-pure-white px-2 py-0.5 rounded font-label-code text-xs uppercase font-bold">
                    PROJECT // 04
                  </span>
                  <span className="bg-surface-violet text-pure-white font-label-badge text-xs px-2 py-0.5 rounded border border-stroke-obsidian font-bold">
                    DEVELOPER TOOL
                  </span>
                </div>
                <h4 className="font-display-hero text-2xl sm:text-headline-md md:text-headline-lg text-stroke-obsidian uppercase leading-tight tracking-tight mb-3 break-words">
                  SQL Visualizer
                </h4>
                <div className="bg-pure-white border-[3px] border-stroke-obsidian rounded-lg p-3 sm:p-4 shadow-[3px_3px_0px_#0B0F19] mb-4">
                  <p className="font-body-md text-xs sm:text-body-md text-stroke-obsidian">
                    An interactive SQL visualizer built with React and
                    TypeScript. Paste a query or load a sample to explore table
                    reads, joins, filters, and aggregates as a node-based graph.
                    Inspect each step, switch layouts and detail levels, and
                    export the graph as an image.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-[2px] border-stroke-obsidian">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    React 19
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    TypeScript
                  </span>
                  <span className="font-label-badge text-[11px] sm:text-xs bg-pure-white border border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[1px_1px_0px_#0B0F19]">
                    React Flow
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="p-2 bg-pure-white border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 flex items-center transition-all"
                    href="https://github.com/FRONTEND-DEV-KAUSHAL/sql_visulizer"
                    target="_blank"
                    rel="noopener noreferrer"

                    title="SQL Visualizer source code"
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px] sm:text-[20px] text-stroke-obsidian"
                    >
                      code
                    </span>
                  </a>
                  <a
                    className="px-3 sm:px-4 py-1.5 bg-stroke-obsidian text-surface-lime rounded border-[2px] border-stroke-obsidian shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 font-label-badge text-xs uppercase flex items-center gap-1 font-bold transition-all"
                    href="https://sql-visulizer-red.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px] sm:text-[16px]"
                    >
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
