import { useEffect, useState } from 'react';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        if (menuOpen) document.getElementById('mobile-menu-btn').focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);
  useEffect(() => {
    const desktop = matchMedia('(min-width: 1024px)');
    const resize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener('change', resize);
    let frame;
    const update = () => {
      frame = null;
      let current = 'home';
      document.querySelectorAll('section[id]').forEach((section) => {
        if (section.getBoundingClientRect().top <= 160) current = section.id;
      });
      setActive(current);
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      desktop.removeEventListener('change', resize);
      window.removeEventListener('scroll', scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 px-3 sm:px-6 lg:px-8">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 bg-pure-white border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl shadow-[4px_4px_0px_#0B0F19] transition-all">
        <a
          className="flex items-center gap-2 no-underline group"
          data-path="home"
          aria-current={active === 'home' ? 'location' : undefined}
          href="#"
        >
          <div className="bg-surface-lime border-[2px] border-stroke-obsidian px-2 py-1 rounded shadow-[2px_2px_0px_#0B0F19] flex items-center transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:shadow-[3px_3px_0px_#0B0F19] group-active:translate-x-0.5 group-active:translate-y-0.5 group-active:shadow-none">
            <span className="font-label-code text-xs sm:text-label-code text-stroke-obsidian font-bold">
              KG//DEV
            </span>
          </div>
          <span className="font-headline-sm text-sm sm:text-base lg:text-lg text-stroke-obsidian tracking-tight font-extrabold">
            KAUSHAL GOHIL
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-canvas-cream border-[2px] border-stroke-obsidian rounded-full px-2 py-1 shadow-[2px_2px_0px_#0B0F19]">
          <a
            className="font-label-badge text-xs px-3 py-1 rounded-full transition-all text-stroke-obsidian border-[2px] border-transparent font-bold hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] active:translate-y-0.5 active:shadow-none"
            data-path="home"
            aria-current={active === 'home' ? 'location' : undefined}
            href="#"
          >
            Home
          </a>
          <a
            className="font-label-badge text-xs text-on-surface-variant hover:text-stroke-obsidian hover:bg-surface-lime border-[2px] border-transparent hover:border-stroke-obsidian hover:shadow-[2px_2px_0px_#0B0F19] px-3 py-1 rounded-full transition-all font-bold"
            data-path="about"
            aria-current={active === 'about' ? 'location' : undefined}
            href="#about"
          >
            About
          </a>
          <a
            className="font-label-badge text-xs text-on-surface-variant hover:text-stroke-obsidian hover:bg-surface-lime border-[2px] border-transparent hover:border-stroke-obsidian hover:shadow-[2px_2px_0px_#0B0F19] px-3 py-1 rounded-full transition-all font-bold"
            data-path="skills"
            aria-current={active === 'skills' ? 'location' : undefined}
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-label-badge text-xs text-on-surface-variant hover:text-stroke-obsidian hover:bg-surface-lime border-[2px] border-transparent hover:border-stroke-obsidian hover:shadow-[2px_2px_0px_#0B0F19] px-3 py-1 rounded-full transition-all font-bold"
            data-path="projects"
            aria-current={active === 'projects' ? 'location' : undefined}
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-label-badge text-xs text-on-surface-variant hover:text-stroke-obsidian hover:bg-surface-lime border-[2px] border-transparent hover:border-stroke-obsidian hover:shadow-[2px_2px_0px_#0B0F19] px-3 py-1 rounded-full transition-all font-bold"
            data-path="interactive-lab"
            aria-current={active === 'interactive-lab' ? 'location' : undefined}
            href="#interactive-lab"
          >
            Lab
          </a>
          <a
            className="font-label-badge text-xs text-on-surface-variant hover:text-stroke-obsidian hover:bg-surface-lime border-[2px] border-transparent hover:border-stroke-obsidian hover:shadow-[2px_2px_0px_#0B0F19] px-3 py-1 rounded-full transition-all font-bold"
            data-path="contact"
            aria-current={active === 'contact' ? 'location' : undefined}
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xl:flex items-center gap-2 bg-pure-white border-[2px] border-stroke-obsidian px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#0B0F19]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-surface-lime"></span>
            </span>
            <span className="font-label-code text-[11px] text-stroke-obsidian uppercase font-bold tracking-wider">
              Full Stack / AI
            </span>
          </div>
          <a
            aria-label="GitHub Profile"
            className="p-1.5 sm:p-2 bg-pure-white border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center transition-all duration-150"
            href="https://github.com/FRONTEND-DEV-KAUSHAL"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-stroke-obsidian text-[18px] sm:text-[20px]"
            >
              terminal
            </span>
          </a>
          <a
            className="hidden sm:flex items-center gap-1.5 bg-surface-lime text-stroke-obsidian border-[2px] border-stroke-obsidian px-3 py-1.5 rounded shadow-[3px_3px_0px_#0B0F19] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#0B0F19] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#0B0F19] transition-all font-label-badge text-xs uppercase font-bold"
            href="/kaushal-gohil-resume.pdf"
            download
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px]"
            >
              download
            </span>
            <span>Download CV</span>
          </a>

          <button
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-1.5 bg-surface-lime border-[2px] border-stroke-obsidian rounded shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
            id="mobile-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-stroke-obsidian text-[22px]"
              id="mobile-menu-icon"
            >
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`${menuOpen ? 'flex' : 'hidden'} max-w-7xl mx-auto mt-2 bg-pure-white border-[3px] border-stroke-obsidian rounded-xl shadow-[5px_5px_0px_#0B0F19] p-3 flex-col gap-2 transition-all`}
        id="mobile-menu"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <a
            className="px-3 py-2 bg-canvas-cream hover:bg-surface-lime border-[2px] border-stroke-obsidian rounded font-headline-sm text-xs font-bold text-center shadow-[2px_2px_0px_#0B0F19]"
            href="#about"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ABOUT
          </a>
          <a
            className="px-3 py-2 bg-canvas-cream hover:bg-surface-lime border-[2px] border-stroke-obsidian rounded font-headline-sm text-xs font-bold text-center shadow-[2px_2px_0px_#0B0F19]"
            href="#skills"
            onClick={() => setMenuOpen((open) => !open)}
          >
            SKILLS
          </a>
          <a
            className="px-3 py-2 bg-canvas-cream hover:bg-surface-lime border-[2px] border-stroke-obsidian rounded font-headline-sm text-xs font-bold text-center shadow-[2px_2px_0px_#0B0F19]"
            href="#projects"
            onClick={() => setMenuOpen((open) => !open)}
          >
            PROJECTS
          </a>
          <a
            className="px-3 py-2 bg-canvas-cream hover:bg-surface-lime border-[2px] border-stroke-obsidian rounded font-headline-sm text-xs font-bold text-center shadow-[2px_2px_0px_#0B0F19]"
            href="#interactive-lab"
            onClick={() => setMenuOpen((open) => !open)}
          >
            LAB
          </a>
          <a
            className="px-3 py-2 bg-canvas-cream hover:bg-surface-lime border-[2px] border-stroke-obsidian rounded font-headline-sm text-xs font-bold text-center shadow-[2px_2px_0px_#0B0F19]"
            href="#contact"
            onClick={() => setMenuOpen((open) => !open)}
          >
            CONTACT
          </a>
          <a
            className="px-3 py-2 bg-surface-lime border-[2px] border-stroke-obsidian rounded font-headline-sm text-xs font-bold text-center shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center gap-1"
            href="/kaushal-gohil-resume.pdf"
            download
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[14px]"
            >
              download
            </span>{' '}
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </header>
  );
}
