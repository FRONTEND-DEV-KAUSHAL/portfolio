import { useState } from 'react';
export default function Contact() {
  const [draftOpened, setDraftOpened] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      'Portfolio inquiry from ' + fields.get('name'),
    );
    const body = encodeURIComponent(
      fields.get('message') +
        '\n\nFrom: ' +
        fields.get('name') +
        '\nEmail: ' +
        fields.get('email'),
    );
    window.location.href =
      'mailto:gohilkaushal16@gmail.com?subject=' + subject + '&body=' + body;
    setDraftOpened(true);
  }
  return (
    <section
      className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start py-4 scroll-mt-24"
      id="contact"
    >
      <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4">
        <div className="inline-flex items-center gap-2 bg-surface-lime border-[2px] border-stroke-obsidian px-3 py-1 rounded-full self-start shadow-[3px_3px_0px_#0B0F19]">
          <span className="w-2.5 h-2.5 rounded-full bg-stroke-obsidian animate-ping"></span>
          <span className="font-label-code text-xs text-stroke-obsidian uppercase font-bold">
            COMMUNICATION LINK OPEN
          </span>
        </div>
        <h2 className="font-display-hero text-4xl sm:text-6xl md:text-7xl lg:text-display-hero text-stroke-obsidian uppercase tracking-tighter leading-none break-words">
          Excited to know more?
          <br />
          <span className="bg-surface-lime px-3 sm:px-4 py-1 rounded-lg border-[3px] sm:border-[4px] border-stroke-obsidian shadow-[4px_4px_0px_#0B0F19] inline-block mt-2 sm:mt-3 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] transition-all">
            Let’s talk!
          </span>
        </h2>
        <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-lg mt-1 sm:mt-2">
          Have a full-stack project, an AI integration, or an engineering
          opportunity in mind? Get in touch to discuss how I can help.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2 font-label-code text-sm sm:text-body-md text-stroke-obsidian break-all">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px] sm:text-[22px] text-surface-violet font-bold flex-shrink-0"
            >
              mail
            </span>
            <a
              className="font-bold underline hover:text-surface-violet hover:bg-surface-lime transition-colors"
              href="mailto:gohilkaushal16@gmail.com"
            >
              gohilkaushal16@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 font-label-code text-xs sm:text-body-sm text-stroke-obsidian">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px] sm:text-[22px] text-surface-violet font-bold flex-shrink-0"
            >
              call
            </span>
            <a
              href="tel:+918799303752"
              className="font-bold underline hover:text-surface-violet"
            >
              (+91) 8799303752
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2 pt-2 border-t-[2px] border-stroke-obsidian/30 flex-wrap">
            <a
              href="https://github.com/FRONTEND-DEV-KAUSHAL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-surface-lime text-stroke-obsidian border-[2px] border-stroke-obsidian px-3 py-1 rounded font-label-badge text-xs font-bold shadow-[2px_2px_0px_#0B0F19] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] transition-all"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/kaushal-gohil-242362224/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-pure-white text-stroke-obsidian border-[2px] border-stroke-obsidian px-3 py-1 rounded font-label-badge text-xs font-bold shadow-[2px_2px_0px_#0B0F19] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#0B0F19] transition-all"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 bg-pure-white border-[3px] sm:border-[4px] border-stroke-obsidian rounded-xl p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19]">
        <form
          className="flex flex-col gap-4 sm:gap-5"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label
              className="font-headline-sm text-base sm:text-body-lg text-stroke-obsidian font-bold"
              htmlFor="contact-name"
            >
              Name
            </label>
            <input
              className="w-full bg-canvas-cream border-[3px] border-stroke-obsidian rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 font-body-md text-stroke-obsidian placeholder:text-gray-500 shadow-[3px_3px_0px_#0B0F19] focus:outline-none focus:bg-pure-white focus:shadow-[6px_6px_0px_#0B0F19] transition-all"
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="font-headline-sm text-base sm:text-body-lg text-stroke-obsidian font-bold"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              className="w-full bg-canvas-cream border-[3px] border-stroke-obsidian rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 font-body-md text-stroke-obsidian placeholder:text-gray-500 shadow-[3px_3px_0px_#0B0F19] focus:outline-none focus:bg-pure-white focus:shadow-[6px_6px_0px_#0B0F19] transition-all"
              id="contact-email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="font-headline-sm text-base sm:text-body-lg text-stroke-obsidian font-bold"
              htmlFor="contact-message"
            >
              Message
            </label>
            <textarea
              className="w-full bg-canvas-cream border-[3px] border-stroke-obsidian rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 font-body-md text-stroke-obsidian placeholder:text-gray-500 shadow-[3px_3px_0px_#0B0F19] focus:outline-none focus:bg-pure-white focus:shadow-[6px_6px_0px_#0B0F19] transition-all resize-none"
              id="contact-message"
              name="message"
              placeholder="Tell me about your project, role, or timeline..."
              required
              rows="4"
            ></textarea>
          </div>
          <p className="font-label-code text-xs text-on-surface-variant">
            Opens a draft in your email app. You can review it before sending.
          </p>

          <button
            className="w-full sm:w-auto self-end bg-surface-lime text-stroke-obsidian border-[3px] border-stroke-obsidian px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-headline-sm text-lg sm:text-headline-sm shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] transition-all cursor-pointer uppercase flex items-center justify-center gap-2 font-extrabold"
            id="submit-btn"
            type="submit"
          >
            <span>Open Email</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px] sm:text-[24px]"
            >
              send
            </span>
          </button>

          <div
            className={`${draftOpened ? '' : 'hidden'} p-3 bg-surface-violet text-pure-white border-[2px] border-stroke-obsidian rounded font-label-code text-xs sm:text-label-code text-center font-bold shadow-[3px_3px_0px_#0B0F19]`}
            id="form-toast"
            role="status"
          >
            Your email draft is ready. Send it from your email app to complete
            your message.
          </div>
        </form>
      </div>
    </section>
  );
}
