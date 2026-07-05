# Puneet Kumar — Portfolio

A single-page React portfolio with smooth-scroll navigation, animated
particle background, typewriter role animation, and an animated looping
"code demo" visual in the hero (built with CSS/JS — no video file needed,
loops like a GIF).

## Sections (all on one page, nav scrolls to each)

Home → About → Skills → Experience (+ Education) → Projects → Contact

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Build for production

```bash
npm run build
```

## Personalize

Almost all content lives in one file:

```
src/data.js
```

Edit roles, skills, experience bullet points, education, and project links
there.

### Real project links already wired up

- Venuemonk Website → https://www.venuemonk.com/
- Venuemonk CRM (Play Store)
- Venuemonk Biz App (Play Store)
- Partner Portal → https://partner.venuemonk.com/
- Slide Dating App (Play Store)
- WeddingPe → marked "Internal Product" since no public link was given

### Replace placeholder images

- `public/images/avatar.svg` → swap in your real photo (same filename, or
  update the `src` in `src/sections/About.js`)
- `public/images/project-placeholder-*.svg` → swap in real project
  screenshots, or update the `image` field per project in `src/data.js`

## Deploy to GitHub Pages

1. `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. `npm run deploy`

## Wiring up the contact form

`src/sections/Contact.js` currently just shows a success message locally.
Connect it to Formspree, EmailJS, or your own API to actually send messages.
