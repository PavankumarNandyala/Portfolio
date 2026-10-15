# Pavankumar Nandyala – Portfolio (React + Vite + Tailwind CSS)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

```
tailwind.config.js     theme colours, fonts, shadows, keyframes/animations
postcss.config.js      runs Tailwind + Autoprefixer
src/
  index.css            Tailwind directives + light/dark colour variables
  ui.js                shared class strings (wrap, section, heading, pill...)
  data.js              all content (edit here)
  App.jsx              page layout
  hooks/               useInView, useReducedMotion
  components/          Nav, Hero, Typewriter, Stats, Reveal, Experience,
                       Projects, Skills, AskMe, Contact
public/profile.jpg     portrait
```

## Deploy

Push to GitHub and import into Vercel or Netlify (build: `npm run build`, output: `dist`).
