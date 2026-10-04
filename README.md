# Kaushal's portfolio

React + Tailwind CSS + Vite. The supplied single-page design is preserved in small section components, with React state for the mobile menu, project filters, dice, soundboard, and contact form.

## Develop

Use Node.js 22.12+ (or 20.19+).

```sh
npm install
npm run dev
```

Open the URL printed in your terminal. Edits update automatically. Run `npm run format` to format source files, or `npm run format:check` to check formatting.

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static host. No backend or routing configuration needed.

## Edit

- `src/components/`: page sections and their content.
- `src/App.jsx`: section order and the unavailable-link dialog.
- `src/hooks/`: dice and Web Audio interactions.
- `src/styles.css`: custom styling, focus states, and motion.
- `tailwind.config.js`: palette, typography, and spacing from the HTML.
- `DESIGN.md`: original reference notes. The HTML's lime/violet palette takes precedence over the document's earlier yellow/lilac palette.

## Content to finish before publishing

Portfolio content reflects the supplied résumé: full-stack MERN/MEAN development, Surat location, work history, education, skills, and four selected projects. `Experience.jsx` holds work history and education. The CV controls download `public/kaushal-gohil-resume.pdf`.

The résumé includes only generic GitHub/LinkedIn homepages, so social links still show an availability dialog. Replace their URLs in `Footer.jsx` and remove `onClick={onUnavailable}` when personal profile URLs are available. Voyager AI, PulseCheck.ai, and SQL Visualizer have live demo links. SQL Visualizer also links to its GitHub repository. Other project actions and source inquiries link to Contact until their URLs are supplied.

The contact form opens a prefilled email draft with `mailto:` and requires an email app. It does not send email itself or clear your draft. To deliver messages directly, connect a form service or backend.

Fonts/icons load from Google Fonts. Voyager AI, PulseCheck.ai, and SQL Visualizer screenshots are stored in `public/images/`. SQL Visualizer replaces the previous Real-Time Chat card. The portrait and TNT preview retain their original URLs; TNT is labeled as a design placeholder. Tailwind is compiled locally, without the browser CDN runtime.
