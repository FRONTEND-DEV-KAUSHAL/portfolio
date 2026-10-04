export default function Footer({ onUnavailable }) {
  return (
    <footer className="w-full bg-pure-white border-t-[3px] sm:border-t-[4px] border-stroke-obsidian mt-12 sm:mt-16">
      <div className="bg-surface-lime border-b-[3px] border-stroke-obsidian py-2 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-center gap-2 text-center max-w-7xl mx-auto">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-stroke-obsidian text-[18px]"
          >
            info
          </span>
          <span className="font-label-code text-xs text-stroke-obsidian uppercase tracking-wide font-bold">
            “A developer is never late, nor is he early; he deploys precisely
            when intended.”
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="bg-stroke-obsidian text-surface-lime px-2 py-0.5 rounded font-label-code text-xs font-bold shadow-[2px_2px_0px_#CEFD10]">
              PORTFOLIO_ROOT
            </div>
            <span className="font-headline-sm text-base sm:text-headline-sm text-stroke-obsidian font-extrabold">
              KAUSHAL GOHIL
            </span>
          </div>
          <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant max-w-md">
            Engineered with tactile joy, high-voltage contrast, and zero generic
            corporate gradients.
          </p>
          <span className="font-label-code text-xs text-on-surface-variant">
            © <span>{new Date().getFullYear()}</span> Kaushal Gohil. All rights
            reserved.
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            className="px-3 sm:px-4 py-1.5 bg-surface-lime text-stroke-obsidian border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] font-label-badge text-xs font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="#contact"
            onClick={onUnavailable}
          >
            GitHub
          </a>
          <a
            className="px-3 sm:px-4 py-1.5 bg-pure-white text-stroke-obsidian border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] font-label-badge text-xs font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="#contact"
            onClick={onUnavailable}
          >
            LinkedIn
          </a>
          <a
            className="px-3 sm:px-4 py-1.5 bg-surface-violet text-pure-white border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] font-label-badge text-xs font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="/kaushal-gohil-resume.pdf"
            download
          >
            Résumé
          </a>
          <a
            aria-label="Back to top"
            className="p-2 bg-surface-lime text-stroke-obsidian border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center transition-all"
            href="#"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-stroke-obsidian text-[18px]"
            >
              arrow_upward
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
