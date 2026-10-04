export default function Skills() {
  return (
    <section className="w-full flex flex-col scroll-mt-24" id="skills">
      <div className="inline-flex items-center gap-2 bg-pure-white border-[3px] border-b-0 border-stroke-obsidian px-4 py-2 rounded-t-xl self-start z-10 -mb-[3px] shadow-[4px_0px_0px_#0B0F19]">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-stroke-obsidian text-[22px]"
        >
          code
        </span>
        <span className="font-headline-sm text-lg sm:text-headline-sm text-stroke-obsidian uppercase font-extrabold">
          Skills
        </span>
      </div>

      <div className="w-full bg-pure-white border-[3px] sm:border-[4px] border-stroke-obsidian rounded-b-xl rounded-tr-xl p-4 sm:p-8 md:p-10 shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 border-b-[2px] border-stroke-obsidian">
          <div>
            <h3 className="font-headline-md text-lg sm:text-2xl md:text-headline-md text-stroke-obsidian font-extrabold">
              CORE CAPABILITIES &amp; RUNTIME ARSENAL
            </h3>
            <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mt-0.5">
              Battle-tested tools leveraged to ship resilient, fast, and
              accessible digital products.
            </p>
          </div>
          <span className="font-label-code text-xs sm:text-label-code bg-surface-lime border-[2px] border-stroke-obsidian px-3 py-1 rounded self-start sm:self-auto shadow-[2px_2px_0px_#0B0F19] font-bold">
            10+ PRODUCTION TOOLS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              html
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              HTML5
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              Semantic/A11y
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              css
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              CSS3
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              Modern Grid/Flex
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              javascript
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              JavaScript
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              ES6+ Async
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:rotate-45 transition-transform"
            >
              all_inclusive
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              React
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              Hooks/State
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              arrow_forward
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              Next.js
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              App Router/SSR
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              bolt
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              Supabase
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              PostgreSQL/Auth
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              local_fire_department
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              Firebase
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              Firestore/Rules
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              air
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              Tailwind
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              Config/Tokens
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              data_object
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              TypeScript
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              Strict Typing
            </span>
          </div>

          <div className="bg-surface-lime border-[3px] border-stroke-obsidian rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-1.5 shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] hover:bg-surface-lime-light transition-all duration-150 cursor-pointer group select-none">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[36px] sm:text-[44px] text-stroke-obsidian group-hover:scale-110 transition-transform"
            >
              layers
            </span>
            <span className="font-headline-sm text-sm sm:text-body-lg text-stroke-obsidian font-bold">
              Angular
            </span>
            <span className="font-label-code text-[10px] sm:text-xs text-stroke-obsidian bg-pure-white border border-stroke-obsidian px-1.5 py-0.5 rounded font-bold text-center">
              NGRX / Material
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            [
              'Backend & Real-Time',
              'Node.js, Express.js, REST APIs, Socket.io, WebRTC / Janus.js; NestJS and GraphQL basics.',
            ],
            ['Databases', 'MongoDB, MySQL; PostgreSQL and Redis basics.'],
            [
              'AI / LLM Integration',
              'OpenAI API, Anthropic Claude API, OpenRouter, prompt engineering, structured JSON schemas.',
            ],
            [
              'Cloud & Developer Tools',
              'Firebase, Vercel, Netlify, CI/CD, Git, GitHub, GitLab, Postman; AWS S3 and Docker basics.',
            ],
          ].map(([title, detail]) => (
            <div
              key={title}
              className="bg-canvas-cream border-[3px] border-stroke-obsidian rounded-lg p-4 shadow-[3px_3px_0px_#0B0F19]"
            >
              <h3 className="font-headline-sm text-lg font-bold mb-2">
                {title}
              </h3>
              <p className="text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
