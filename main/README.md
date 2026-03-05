# Tivi Forge — Digital Brand Architecture & Revenue Infrastructure

A modular, component-based website built for **founders, executives, and mission-driven organizations** who need to turn digital presence into revenue.

## 🎯 What's In This Repository

This is a **fully functional, production-ready website** broken down into independent, editable components. No frameworks. No build tools required. Just HTML, CSS, and Alpine.js.

```
Components breakdown:
├── 00-meta.html           Meta tags & JSON-LD
├── 01-styles.html         All CSS
├── 01-loading-screen.html Loading animation
├── 02-nav.html            Navigation
├── 03-hero.html           Hero section
├── 04-trust-bar.html      Trust badges
├── 05-services.html       3 service lanes
├── 06-20-xxx.html         Content sections
├── 21-modals.html         Modals & overlays
├── 22-widgets.html        Chat, cookie banner, widgets
└── 23-scripts.html        All JavaScript & data
```

## ✅ Quick Start

### Option 1: Use It As-Is (Fastest)
1. Clone this repo
2. Edit `components/23-scripts.html` to customize data
3. Edit individual component files for content
4. Deploy to GitHub Pages, Netlify, or any static host

### Option 2: Build Into Single File
Use a build tool to combine components into one `index.html`:

```bash
npm install gulp gulp-file-include --save-dev
```

Create `gulpfile.js`:
```javascript
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

gulp.task('build', () => {
  return gulp.src('index.html')
    .pipe(fileinclude({
      prefix: '<!-- @include ',
      suffix: ' -->',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('build'));
```

Run:
```bash
npm run build
```

## 🛠️ Customization Guide

### 1. Update Company Info (Everywhere)
Find and replace:
- `consultation@tiviforge.com` → your email
- `+15558743920` → your phone
- `Tivi Forge` → your company name
- `Los Angeles, CA` → your location

### 2. Customize Service Lanes
**File**: `components/23-scripts.html`

```javascript
serviceLanes: [
  {
    id: 'lane-01',
    services: [
      { icon: '🌐', title: 'Your Service', desc: 'Description' }
    ]
  }
]
```

### 3. Add Your Projects/Case Studies
**File**: `components/23-scripts.html`

```javascript
projects: [
  {
    title: 'Client Name — Role',
    industry: 'Industry · Context',
    metrics: ['+300% growth', 'Key metric'],
    challenge: 'What was the problem?',
    solution: 'What did you do?',
    stack: ['Tech 1', 'Tech 2']
  }
]
```

### 4. Update Pricing Tiers
**File**: `components/23-scripts.html`

```javascript
revenueLadder: [
  { tier: 'Entry', price: '$0', label: 'Free Audit', highlight: false }
]
```

Also update in `components/13-pricing.html` (the visual cards).

### 5. Update Testimonials
**File**: `components/23-scripts.html`

```javascript
testimonials: [
  {
    quote: 'Client feedback here...',
    name: 'Client Name',
    role: 'Title — Service Lane',
    color: '#06d6f5'
  }
]
```

### 6. Update Team
**File**: `components/23-scripts.html`

```javascript
team: [
  {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Bio here...',
    initials: 'YN',
    avatarBg: 'linear-gradient(135deg, color1, color2)'
  }
]
```

### 7. Update FAQ
**File**: `components/23-scripts.html`

```javascript
faqs: [
  { q: 'Question?', a: 'Answer...' }
]
```

## 🎨 Color Customization

All brand colors are defined in `components/01-styles.html` under Tailwind config:

```javascript
colors: {
  ink: '#080c14',        // Background (dark)
  surface: '#0d1526',    // Card background
  card: '#111827',       // Alternative card
  border: '#1e3a5f',     // Border color
  cyan: '#06d6f5',       // Primary accent
  cyandim: '#04a8c2',    // Primary hover
  lime: '#b2f724',       // Secondary accent
  muted: '#64748b',      // Text muted
  steel: '#334155'       // Text secondary
}
```

Change these values to match your brand.

## 📧 Form Submissions

The contact form uses **FormSubmit.co** (free, no code required):

1. User submits form
2. Email sent to your address
3. You reply directly to the email

**To change the email address:**
- In `components/18-contact.html`, find all instances of `consultation@tiviforge.com`
- Replace with your email
- First submission will ask you to verify

No backend needed!

## 💬 Chat Widget

The chatbot uses Alpine.js with static responses. To connect a real AI:

**File**: `components/23-scripts.html`

Find the `getBotResponse()` method and replace with an API call:

```javascript
getBotResponse(input) {
  // Example: Call OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${YOUR_API_KEY}` },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: input }]
    })
  });
  return { text: response.choices[0].message.content };
}
```

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from main branch
3. Site live at `username.github.io/repo-name`

### Netlify
1. Connect repo to Netlify
2. Build command: `npm run build` (if using gulp)
3. Publish: `dist/` folder
4. Deploy!

### Traditional Hosting
1. Build components into single `index.html`
2. Upload to web server
3. All CSS/JS from CDN (no additional files needed)

## 📱 Mobile Responsive

Site is fully mobile-responsive. Test on:
- iPhone/iPad
- Android phones
- Tablet devices
- Desktop screens

No additional work needed — Tailwind handles it all.

## ⚡ Performance

### Page Load Time: ~2 seconds
- All assets from CDN (cached globally)
- No server-side processing
- Static HTML delivery

### SEO Ready
- JSON-LD structured data included
- Meta tags for Open Graph & Twitter
- Mobile-first responsive design
- Fast load times
- Semantic HTML

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast meets WCAG AA

## 📚 File Structure Deep Dive

### 00-meta.html
- HTML head tags
- Meta descriptions & keywords
- Open Graph tags (social sharing)
- JSON-LD schema markup
- Analytics code (commented out)
- Font & library imports

### 01-styles.html
- **2,500+ lines** of organized CSS
- Utility classes (glass, gradients, animations)
- Component styles (cards, buttons, forms)
- Responsive breakpoints
- Dark mode theme variables

### 02-nav.html to 20-footer.html
- **Individual content sections**
- Each ~50-200 lines
- Self-contained HTML
- References Alpine.js data via `x-for` directives

### 21-modals.html
- Project detail modal
- Lead magnet modal
- Reusable modal structure

### 22-widgets.html
- Floating chat widget
- Cookie consent banner
- Back-to-top button
- Sticky CTA pill

### 23-scripts.html
- **Alpine.js** initialization
- **1,000+ lines** of JavaScript
- All data objects (projects, testimonials, FAQs, pricing)
- Chat logic
- Form handling
- Scroll & animation triggers

## 🔄 Data Flow

```
User Input (form, chat, scroll)
        ↓
Alpine.js Method (components/23-scripts.html)
        ↓
Update Data Object (stats, projects, faqs, etc.)
        ↓
Component HTML Re-renders (using x-for, x-if directives)
        ↓
User sees updated content
```

## 📋 Editing Checklist

- [ ] Clone repository
- [ ] Update company name & contact info
- [ ] Customize service descriptions in `23-scripts.html`
- [ ] Add your projects to `projects` array
- [ ] Update pricing tiers in `revenueLadder`
- [ ] Update team members in `team` array
- [ ] Update testimonials
- [ ] Update FAQs
- [ ] Change brand colors in `01-styles.html`
- [ ] Update meta tags in `00-meta.html`
- [ ] Set up form email
- [ ] Build & test locally
- [ ] Deploy to hosting

## 🎯 Next Steps

1. **Understand the structure**: Read `BUILD-GUIDE.md`
2. **Customize the data**: Edit `components/23-scripts.html`
3. **Update content**: Edit individual component files
4. **Build**: Run build tool to combine components
5. **Test**: Check locally on desktop & mobile
6. **Deploy**: Push to GitHub Pages, Netlify, or your host

## 📞 Support

For questions about:
- **Component structure** → See BUILD-GUIDE.md
- **Data organization** → See components/23-scripts.html comments
- **CSS styling** → See components/01-styles.html
- **Adding features** → See corresponding component file

## 📄 License

This template is provided as-is for your business use.

---

**Built for founders, executives, and mission-driven organizations who need their digital presence to generate revenue.**

🚀 Good luck building your authority!
