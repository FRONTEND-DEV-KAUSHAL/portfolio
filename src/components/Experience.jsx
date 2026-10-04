const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Appgambit',
    dates: 'June 2024 — Present',
    detail:
      'Architecting TNT cash-transfer workflows, designing MySQL schemas, and shipping React + Node.js features with third-party API integrations, role-based access control, and audit trails.',
  },
  {
    role: 'MEAN / MERN Stack Developer',
    company: 'Daydreamsoft Infotech LLP',
    dates: 'October 2022 — June 2024',
    detail:
      'Co-developed an accessible video-call platform with Janus.js and WebRTC, built real-time chat reactions for Gamerznet.net with Socket.io, and collaborated on production fixes, code reviews, and reliable deployments.',
  },
  {
    role: 'Lab Coordinator',
    company: 'Red and White Multimedia Institute',
    dates: 'May 2021 — October 2022',
    detail:
      'Mentored students in HTML, CSS, JavaScript, and basic frameworks, with hands-on technical troubleshooting and guidance on modern web development practices.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full flex flex-col scroll-mt-24">
      <div className="inline-flex items-center gap-2 bg-pure-white border-[3px] border-b-0 border-stroke-obsidian px-4 py-2 rounded-t-xl self-start z-10 -mb-[3px] shadow-[4px_0px_0px_#0B0F19]">
        <h2 className="font-headline-sm text-lg sm:text-headline-sm uppercase font-extrabold">
          Experience &amp; Education
        </h2>
      </div>
      <div className="bg-pure-white border-[3px] sm:border-[4px] border-stroke-obsidian rounded-b-xl rounded-tr-xl p-4 sm:p-8 md:p-10 shadow-[6px_6px_0px_#0B0F19] flex flex-col gap-5">
        {experience.map((job) => (
          <article
            key={job.company}
            className="bg-canvas-cream border-[3px] border-stroke-obsidian rounded-lg p-5 sm:p-6 shadow-[3px_3px_0px_#0B0F19]"
          >
            <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
              <div>
                <h3 className="font-headline-sm text-xl sm:text-2xl font-bold">
                  {job.role}
                </h3>
                <p className="font-bold mt-1">{job.company} · Surat, Gujarat</p>
              </div>
              <span className="font-label-code text-xs bg-surface-lime border-2 border-stroke-obsidian rounded px-2 py-1">
                {job.dates}
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-on-surface-variant">
              {job.detail}
            </p>
          </article>
        ))}
        <div className="bg-surface-violet text-white border-[3px] border-stroke-obsidian rounded-lg p-5 sm:p-6 shadow-[3px_3px_0px_#0B0F19]">
          <p className="font-label-code text-xs uppercase mb-2">Education</p>
          <h3 className="font-headline-sm text-xl sm:text-2xl font-bold">
            Diploma in Computer Science
          </h3>
          <p className="mt-2">
            Mahavir Swami College of Polytechnic · Surat, Gujarat
          </p>
        </div>
      </div>
    </section>
  );
}
