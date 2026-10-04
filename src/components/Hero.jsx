export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="w-full max-w-5xl bg-surface-lime border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl p-4 sm:p-8 md:p-12 shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_#0B0F19] transition-all duration-200 relative">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-pure-white border-[2px] border-stroke-obsidian px-2.5 sm:px-3 py-1 rounded-full shadow-[2px_2px_0px_#0B0F19] sm:shadow-[3px_3px_0px_#0B0F19]">
            <span className="w-2.5 h-2.5 rounded-full bg-surface-violet animate-pulse"></span>
            <span className="font-label-code text-[11px] sm:text-label-code text-stroke-obsidian uppercase font-bold tracking-tight sm:tracking-normal">
              LOCATION // SURAT, GUJARAT, INDIA
            </span>
          </div>
        </div>

        <div className="text-center my-1 sm:my-3">
          <p className="font-display-hero text-2xl sm:text-headline-sm md:text-headline-md text-stroke-obsidian tracking-tight leading-none uppercase">
            Hello
          </p>
          <p className="font-label-code text-sm sm:text-body-md md:text-body-lg text-stroke-obsidian font-bold uppercase tracking-wider mt-1">
            My name is
          </p>
        </div>

        <div className="bg-pure-white border-[3px] sm:border-[4px] border-stroke-obsidian rounded-lg p-3 sm:py-8 sm:px-6 md:py-10 md:px-12 my-2 sm:my-4 text-center shadow-[4px_4px_0px_#0B0F19] sm:shadow-[6px_6px_0px_#0B0F19] hover:bg-canvas-cream transition-colors">
          <h1 className="font-display-hero text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-stroke-obsidian uppercase tracking-tighter leading-none select-all break-words">
            KAUSHAL
            <br className="hidden sm:inline" /> GOHIL
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 pt-2 sm:pt-4 border-t-[2px] border-stroke-obsidian/40">
          <span className="font-label-code text-[11px] sm:text-label-code text-stroke-obsidian bg-pure-white border-[2px] border-stroke-obsidian px-2 py-0.5 rounded font-bold shadow-[2px_2px_0px_#0B0F19]">
            STATUS: WAITING FOR CREDIT RESET
          </span>
          <div className="flex items-center gap-2">
            <span className="font-label-code text-xs sm:text-label-code text-stroke-obsidian font-bold">
              // ROLE:
            </span>
            <span className="bg-surface-violet text-pure-white font-label-badge text-xs sm:text-label-badge px-2 py-0.5 rounded border border-stroke-obsidian font-bold shadow-[1px_1px_0px_#0B0F19]">
              FULL STACK DEVELOPER
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl text-center mt-6 sm:mt-10 flex flex-col items-center gap-4 sm:gap-6 px-2">
        <h2 className="font-headline-md text-xl sm:text-2xl md:text-headline-md text-stroke-obsidian leading-snug font-bold">
          I build full-stack web applications, AI-powered products, and
          real-time experiences with MERN and MEAN.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mt-1">
          <a
            className="inline-flex items-center justify-center gap-2 bg-surface-lime text-stroke-obsidian font-headline-sm text-base sm:text-body-lg border-[3px] border-stroke-obsidian px-6 sm:px-8 py-3 rounded-lg shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] transition-all no-underline font-extrabold"
            href="#projects"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[22px] sm:text-[24px]"
            >
              terminal
            </span>
            <span>EXPLORE WORK</span>
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 bg-pure-white text-stroke-obsidian font-headline-sm text-base sm:text-body-lg border-[3px] border-stroke-obsidian px-6 sm:px-8 py-3 rounded-lg shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] transition-all no-underline font-extrabold"
            href="#contact"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[22px] sm:text-[24px]"
            >
              send
            </span>
            <span>LET’S TALK</span>
          </a>
        </div>
      </div>
    </section>
  );
}
