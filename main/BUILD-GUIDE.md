# Tivi Forge Website — Component Build Guide

This is a modular website repository where each section is organized as an independent component file. This allows for easy modification and version control.

## Repository Structure

```
Executive-_Website_-Forge/
├── index.html                 # Master file (orchestration only, ~150 lines)
├── components/
│   ├── 00-meta.html          # Head tags, meta, JSON-LD, analytics
│   ├── 01-styles.html        # All CSS styles
│   ├── 01-loading-screen.html # Loading animation
│   ├── 02-nav.html           # Navigation bar
│   ├── 03-hero.html          # Hero section with stats
│   ├── 04-trust-bar.html     # Trust badges & marquee
│   ├── 05-services.html      # 3 service lanes
│   ├── 06-who-we-serve.html  # ICP section
│   ├── 07-philosophy.html    # Monetization philosophy
│   ├── 08-portfolio.html     # Featured work/projects
│   ├── 09-case-studies.html  # Before/after case studies
│   ├── 10-proof.html         # Metrics/proof section
│   ├── 11-process.html       # How we work section
│   ├── 12-skills.html        # Skills/capabilities
│   ├── 13-pricing.html       # Pricing section (5 tiers)
│   ├── 14-faq.html           # FAQ accordion
│   ├── 15-testimonials.html  # Client testimonials
│   ├── 16-team.html          # Team section
│   ├── 17-about-cta.html     # About CTA section
│   ├── 18-contact.html       # Contact form
│   ├── 19-newsletter.html    # Newsletter signup
│   ├── 20-footer.html        # Footer
│   ├── 21-modals.html        # Modals (project, lead magnet)
│   ├── 22-widgets.html       # Chat, cookies, back-to-top
│   └── 23-scripts.html       # Alpine.js + all JavaScript
├── BUILD-GUIDE.md            # This file
├── COMPONENT-REFERENCE.md    # Component documentation
└── README.md                 # Project overview
```

## How to Use This Repository

### Option 1: HTML File Includes (Recommended for Static Sites)
If using a static site generator or build tool that supports includes:

```html
<!-- In index.html -->
<!-- @include components/00-meta.html -->
<!-- @include components/01-styles.html -->
<!-- @include components/02-nav.html -->
<!-- @include components/23-scripts.html -->
```

Then use a build tool like:
- **Gulp** with `gulp-file-include`
- **Webpack** with `include-loader`
- **11ty** (Eleventy) with template systems
- **Jekyll** with `{% include %}`

### Option 2: Manual Assembly
1. Open `index.html`
2. Copy-paste the contents of each component file into the appropriate `<!-- @include ... -->` comment
3. Save and test

### Option 3: Server-Side Includes (SSI)
For servers that support SSI:

```html
<!-- #include virtual="components/00-meta.html" -->
```

### Option 4: Use a Build Tool
Create a `build.js` script:

```javascript
const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('index.html', 'utf8');

// Find all @include comments
const includeRegex = /<!-- @include (.*?) -->/g;
html = html.replace(includeRegex, (match, filePath) => {
  const file = path.join('components', filePath.trim());
  return fs.readFileSync(file, 'utf8');
});

fs.writeFileSync('dist/index.html', html);
console.log('Build complete!');
```

Run with: `node build.js`

## Component Naming Convention

- **00-meta.html**: Meta tags and head content
- **01-xxx.html**: Structural elements (styles, nav, hero)
- **0X-xxx.html**: Main content sections
- **20-footer.html**: Footer
- **21-modals.html**: Modal overlays
- **22-widgets.html**: Floating widgets
- **23-scripts.html**: JavaScript and Alpine.js

## Modifying Components

Each component is self-contained. To modify:

1. Open the component file (e.g., `components/05-services.html`)
2. Edit the HTML, keeping Alpine.js directives and Tailwind classes intact
3. Don't modify the Alpine.js data structure unless you understand how it maps to `23-scripts.html`
4. Test by including the component in your build

### Example: Updating the Services Section

**File**: `components/05-services.html`

To add a new service in Lane 01:
```javascript
// In 23-scripts.html, find serviceLanes[0].services array
// Add: { icon: '🎨', title: 'New Service', desc: 'Description here.' }
```

Then the HTML will automatically render the new item.

## Alpine.js Data Structure

All dynamic content is controlled by the `siteApp()` function in `23-scripts.html`.

### Key Data Objects:

```javascript
stats: [ { value: '50+', label: 'Brands Built' }, ... ]
serviceLanes: [ { services: [ { icon, title, desc } ] } ]
projects: [ { title, metrics, challenge, solution, stack } ]
pricing: [...]
testimonials: [...]
faqs: [...]
```

### To Add New Content:
1. Add data to the object in `23-scripts.html`
2. Add the template in the component HTML using `x-for="item in arrayName"`

## Deployment

### GitHub Pages
1. Push all files to your repository
2. Enable GitHub Pages in Settings → Pages
3. Use the build approach that outputs to `index.html` in root

### Netlify
1. Connect your repo
2. Build command: `node build.js` (if using build script)
3. Publish directory: `.` or `dist/`

### Traditional Hosting
1. Run your build tool to generate final `index.html`
2. Upload to web server
3. All assets are CDN-hosted (Tailwind, Alpine, Font Awesome, etc.)

## External Dependencies

All dependencies are CDN-hosted:
- **Tailwind CSS**: `cdn.tailwindcss.com`
- **Alpine.js**: `cdn.jsdelivr.net/npm/alpinejs`
- **AOS**: `unpkg.com/aos`
- **Font Awesome**: `cdnjs.cloudflare.com`
- **Google Fonts**: `fonts.googleapis.com`

No npm install required. The site works as-is.

## Customization Checklist

- [ ] Update meta tags in `00-meta.html` (title, description, og image)
- [ ] Replace email `consultation@tiviforge.com` throughout (use grep/find-replace)
- [ ] Update phone number `+15558743920`
- [ ] Update team information in `16-team.html`
- [ ] Update testimonials in `15-testimonials.html`
- [ ] Update projects/case studies in `08-portfolio.html` and `09-case-studies.html`
- [ ] Update pricing in `13-pricing.html` and `23-scripts.html` (revenueLadder array)
- [ ] Update FAQ items in `14-faq.html` and `23-scripts.html` (faqs array)
- [ ] Replace company logo/name references as needed
- [ ] Set up analytics tracking in `00-meta.html`
- [ ] Configure form submission endpoint (currently: `formsubmit.co/ajax/consultation@tiviforge.com`)

## Form Setup

The site uses FormSubmit.co for free form submissions. To change:

1. Replace `consultation@tiviforge.com` with your email
2. First submission from your site will verify your address
3. All future submissions route to that email

For custom email setup, see `18-contact.html` and `23-scripts.html` submitForm() method.

## Chat Widget Setup

The AI chat is powered by Alpine.js with static responses. To connect a real AI:

1. In `23-scripts.html`, find `getBotResponse()` method
2. Replace with API call to your AI service (OpenAI, Anthropic, etc.)
3. Example integration in comments within that function

## Support & Questions

If modifying this template:
- Check `COMPONENT-REFERENCE.md` for detailed component documentation
- All CSS is in `01-styles.html` — organized by section
- All data is in `23-scripts.html` — organized by object type
- All HTML structure is in individual component files — each is ~50-200 lines

Happy building! 🚀
