import { useRef } from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import InteractiveLab from './components/InteractiveLab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSound } from './hooks/useSound';

export default function App() {
  const { playChime, soundStatus } = useSound();
  const linkDialog = useRef(null);
  function showUnavailable(event) {
    event.preventDefault();
    linkDialog.current.showModal();
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        className="w-full pt-20 sm:pt-24 bg-canvas-cream min-h-screen"
      >
        <Marquee />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col gap-12 sm:gap-16 lg:gap-24">
          <Hero />
          <About playChime={playChime} />
          <Skills />
          <Experience />
          <Projects />
          <InteractiveLab playChime={playChime} soundStatus={soundStatus} />
          <Contact />
        </div>
      </main>
      <Footer onUnavailable={showUnavailable} />
      <dialog
        ref={linkDialog}
        className="link-dialog"
        aria-labelledby="link-dialog-title"
      >
        <h2
          id="link-dialog-title"
          className="font-headline-sm text-headline-sm font-bold mb-3"
        >
          More details coming soon.
        </h2>
        <p className="mb-5">
          This link isn't available yet. Get in touch for project details or to
          connect.
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="#contact"
            onClick={() => linkDialog.current.close()}
            className="font-bold underline"
          >
            Let's talk
          </a>
          <button
            onClick={() => linkDialog.current.close()}
            className="bg-surface-lime border-2 border-stroke-obsidian rounded px-4 py-2 font-bold"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
