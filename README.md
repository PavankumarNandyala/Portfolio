# Pavankumar Nandyala – Portfolio (React + Vite)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

```
src/
  data.js              all content (edit here)
  App.jsx              page layout
  index.css            styles, theme tokens, animations
  hooks/
    useInView.js       IntersectionObserver, reveal once
    useReducedMotion.js
  components/
    Nav.jsx            links + light/dark toggle
    Hero.jsx           intro, photo ring
    Typewriter.jsx     cycling role text
    Stats.jsx          count-up numbers
    Reveal.jsx         fade-up-on-scroll wrapper
    Experience.jsx     timeline
    Projects.jsx       project cards
    Skills.jsx         skill pills
    AskMe.jsx          Q&A chips
    Contact.jsx        footer links
public/profile.jpg     portrait
```

## Deploy

Push to GitHub and import into Vercel or Netlify (build: `npm run build`, output: `dist`).
