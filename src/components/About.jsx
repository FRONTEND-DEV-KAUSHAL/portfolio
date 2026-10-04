export default function About({ playChime }) {
  return (
    <section className="w-full flex flex-col scroll-mt-24" id="about">
      <div className="inline-flex items-center gap-2 bg-pure-white border-[3px] border-b-0 border-stroke-obsidian px-4 py-2 rounded-t-xl self-start z-10 -mb-[3px] shadow-[4px_0px_0px_#0B0F19]">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-stroke-obsidian text-[22px]"
        >
          person
        </span>
        <span className="font-headline-sm text-lg sm:text-headline-sm text-stroke-obsidian uppercase font-extrabold">
          About
        </span>
      </div>

      <div className="w-full bg-surface-lime border-[3px] sm:border-[4px] border-stroke-obsidian rounded-b-xl rounded-tr-xl p-4 sm:p-8 md:p-10 shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-5 bg-surface-violet text-pure-white border-[3px] border-stroke-obsidian rounded-xl p-5 sm:p-6 shadow-[5px_5px_0px_#0B0F19] flex flex-col gap-3 sm:gap-4 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] transition-all">
            <div className="flex items-center justify-between pb-2 border-b-[2px] border-stroke-obsidian text-pure-white">
              <span className="font-label-code text-xs sm:text-label-code uppercase tracking-wider font-bold">
                // SYSTEM.BIO
              </span>
              <span className="font-label-code text-xs bg-stroke-obsidian text-surface-lime px-2 py-0.5 rounded border border-stroke-obsidian font-bold">
                v2.4
              </span>
            </div>
            <p className="font-body-md text-sm sm:text-body-md text-pure-white leading-relaxed">
              I'm Kaushal, a Full Stack Web Developer based in Surat, Gujarat. I
              build production-grade MERN and MEAN applications, from responsive
              interfaces to scalable backend services.
            </p>
            <p className="font-body-md text-sm sm:text-body-md text-pure-white leading-relaxed">
              At Appgambit, I work on secure financial transaction workflows,
              MySQL database design, third-party API integrations, and
              role-based access control across React and Node.js applications.
            </p>
            <p className="font-body-md text-sm sm:text-body-md text-pure-white leading-relaxed">
              Alongside professional work, I build AI-powered SaaS products
              including Voyager AI and PulseCheck.ai. My experience also spans
              Socket.io messaging, WebRTC video platforms, and TypeScript-first
              development.
            </p>
            <div className="mt-2 bg-pure-white text-stroke-obsidian border-[2px] border-stroke-obsidian p-2.5 rounded font-label-code text-xs sm:text-label-code text-center font-bold shadow-[2px_2px_0px_#0B0F19]">
              “From interface to infrastructure, I take ownership of the
              product.”
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-3 justify-center">
            <button
              className="w-full text-left group bg-surface-violet-dark text-pure-white border-[3px] border-stroke-obsidian px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#0B0F19] font-headline-sm text-sm sm:text-base flex items-center justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] cursor-pointer transition-all font-bold"
              onClick={() => playChime(150, 'Full Stack')}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-surface-lime group-hover:rotate-12 transition-transform"
                >
                  skull
                </span>
                <span>Proactive</span>
              </span>
              <span className="font-label-code text-xs bg-surface-lime text-stroke-obsidian px-1.5 py-0.5 rounded font-bold">
                01
              </span>
            </button>
            <button
              className="w-full text-left group bg-surface-coral-dark text-pure-white border-[3px] border-stroke-obsidian px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#0B0F19] font-headline-sm text-sm sm:text-base flex items-center justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] cursor-pointer transition-all font-bold"
              onClick={() => playChime(300, 'AI Integration')}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-pure-white group-hover:scale-125 transition-transform"
                >
                  electric_bolt
                </span>
                <span>AI Integration</span>
              </span>
              <span className="font-label-code text-xs bg-stroke-obsidian text-pure-white px-1.5 py-0.5 rounded font-bold">
                02
              </span>
            </button>
            <button
              className="w-full text-left group bg-surface-cyan text-stroke-obsidian border-[3px] border-stroke-obsidian px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#0B0F19] font-headline-sm text-sm sm:text-base flex items-center justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] cursor-pointer transition-all font-bold"
              onClick={() => playChime(520, 'Real-Time Apps')}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-stroke-obsidian group-hover:rotate-45 transition-transform"
                >
                  swords
                </span>
                <span>Real-Time Apps</span>
              </span>
              <span className="font-label-code text-xs bg-pure-white text-stroke-obsidian px-1.5 py-0.5 rounded font-bold">
                03
              </span>
            </button>
            <button
              className="w-full text-left group bg-pure-white text-stroke-obsidian border-[3px] border-stroke-obsidian px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#0B0F19] font-headline-sm text-sm sm:text-base flex items-center justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] cursor-pointer transition-all font-bold"
              onClick={() => playChime(640, 'Secure Workflows')}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-surface-violet group-hover:-rotate-12 transition-transform"
                >
                  palette
                </span>
                <span>Secure Workflows</span>
              </span>
              <span className="font-label-code text-xs bg-surface-violet text-pure-white px-1.5 py-0.5 rounded font-bold">
                04
              </span>
            </button>
            <button
              className="w-full text-left group bg-surface-violet text-pure-white border-[3px] border-stroke-obsidian px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#0B0F19] font-headline-sm text-sm sm:text-base flex items-center justify-between hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] cursor-pointer transition-all font-bold"
              onClick={() => playChime(440, 'Product Ownership')}
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[20px] text-surface-lime group-hover:scale-110 transition-transform"
                >
                  equalizer
                </span>
                <span>Product Ownership</span>
              </span>
              <span className="font-label-code text-xs bg-surface-lime text-stroke-obsidian px-1.5 py-0.5 rounded font-bold">
                05
              </span>
            </button>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center pt-2 sm:pt-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-[4px] sm:border-[5px] border-stroke-obsidian p-2 bg-gradient-to-tr from-surface-violet via-surface-coral-dark to-surface-lime shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19] flex items-center justify-center overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-300">
              <img
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-full border-[3px] border-stroke-obsidian bg-stroke-obsidian"
                alt="Kaushal Gohil - Full Stack Developer"
                src="/images/kaushal.jpg"
              />
            </div>
            <div className="mt-4 bg-pure-white border-[2px] border-stroke-obsidian px-4 py-1 rounded-full shadow-[3px_3px_0px_#0B0F19] flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] transition-all">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px] text-surface-violet"
              >
                verified
              </span>
              <span className="font-label-code text-xs sm:text-label-code text-stroke-obsidian font-bold">
                KAUSHAL GOHIL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
