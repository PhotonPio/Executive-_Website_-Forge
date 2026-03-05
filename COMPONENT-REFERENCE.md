# Component Reference Guide

A detailed reference for each component file in the Tivi Forge website structure.

## Component Files Breakdown

### 00-meta.html (Head Section)
**Purpose**: All `<head>` tag content

**Contains**:
- Meta tags (charset, viewport, description)
- Open Graph tags (for social sharing)
- Twitter Card tags
- JSON-LD schema markup (2 scripts: ProfessionalService + Person)
- Canonical URL
- Font imports (Google Fonts: Plus Jakarta Sans, Space Grotesk)
- CDN links (Font Awesome, AOS, Tailwind CSS)
- Analytics placeholders (GA4, Meta Pixel, LinkedIn)

**To edit**:
- Update `<title>` tag for browser tab title
- Update meta description for search results
- Replace og:image URL with your own preview image
- Add your actual analytics tracking IDs
- Update company contact info in JSON-LD schemas

**Key Lines**:
- Line 4: Page title
- Line 5: Meta description
- Lines 27-89: JSON-LD Professional Service schema
- Lines 91-107: JSON-LD Person schema
- Lines 150+: Analytics code (commented out)

---

### 01-styles.html (CSS)
**Purpose**: All styling for the website (~2,500 lines)

**Sections**:
1. **Base Styles** (lines 1-15): Reset, body, scrollbar
2. **Utility Classes** (lines 18-65): Glass, gradients, buttons
3. **Animations** (lines 68-250): Keyframes, transitions, pulsing effects
4. **Loading Screen** (lines 252-340): Spark animations, loading bar
5. **Hero Section** (lines 342-380): Orbs, scan lines, grid noise
6. **Marquee & Effects** (lines 382-420): Scrolling marquee, skill bars
7. **Modals & Forms** (lines 422-480): Form inputs, error states, modal overlays
8. **Section Styling** (lines 482-540): Cards, service lanes, project cards
9. **Pricing & Layout** (lines 542-600): Revenue steps, pricing cards, pricing fire glow
10. **Chat & Widgets** (lines 602-680): Chat widget styling, positions

**To edit**:
- Change brand colors in Tailwind config (lines at top of file)
- Modify button styles (search `.btn-primary`)
- Update animation timings (search `@keyframes`)
- Adjust card shadows, borders, or spacing

**Key Colors to Change**:
```css
ink: '#080c14'        /* Main background */
surface: '#0d1526'    /* Card background */
cyan: '#06d6f5'       /* Primary accent */
lime: '#b2f724'       /* Secondary accent */
```

---

### 01-loading-screen.html
**Purpose**: Animated loading screen shown before page loads

**Contains**:
- Spark animation container
- Animated logo
- Loading tagline
- Progress bar animation

**To edit**:
- Change "Building Digital Authority & Revenue Infrastructure" text
- Modify logo (Tivi Forge → your company name)
- Adjust animation timing in `23-scripts.html` (init method)

**Data Controlled By**:
- `loadingDone` state in `23-scripts.html` (set to true after 1800ms)
- Screen removes after 2500ms

---

### 02-nav.html
**Purpose**: Fixed navigation bar (desktop & mobile)

**Contains**:
- Desktop navigation links
- Mobile hamburger menu
- Logo/brand link
- CTA button (Book Strategy Call)

**Links To**:
- #services
- #work
- #pricing
- #about
- #faq
- #contact

**To edit**:
- Change navigation menu items (add/remove links)
- Update logo text
- Change CTA button text
- Modify nav styling in `01-styles.html` (.nav-scrolled class)

**Mobile Responsive**:
- Hidden on mobile (`hidden lg:flex`)
- Menu icon toggles via Alpine.js (`mobileMenu` state)

---

### 03-hero.html
**Purpose**: Hero section with headline, CTA, and stats

**Contains**:
- Background orbs and visual effects
- Main headline ("Websites and Digital Systems...")
- Subheadline
- Two CTA buttons
- Authority indicators (badges)
- Stats grid (pulled from `stats` array in `23-scripts.html`)

**Data Driven By**:
```javascript
stats: [
  { value: '50+', label: 'Brands Built' },
  { value: '$2.4M', label: 'Client Revenue Influenced' },
  // ... more items
]
```

**To edit**:
- Change headline in component HTML
- Update stats in `23-scripts.html` (stats array)
- Modify CTA button text
- Adjust authority indicators text

---

### 04-trust-bar.html
**Purpose**: Marquee scrolling trust badges and certifications

**Contains**:
- Repeating marquee text (certifications, partners)
- Tech badges (Clutch, Google, AWS, Tailwind, Vercel, Shopify, React, Webflow)

**Data Driven By**:
```javascript
techBadges: [
  { icon: 'fa-solid fa-star', label: 'Clutch Top Rated' },
  // ... more badges
]
```

**To edit**:
- Update marquee text (replace certifications)
- Add/remove badges in `techBadges` array in `23-scripts.html`
- Change badge icons (Font Awesome classes)

---

### 05-services.html
**Purpose**: 3 service lane cards (Personal Authority, Business Growth, Mission-Driven)

**Contains**:
- Section header
- 3 lane cards with service items
- Bottom callout (Which lane fits?)

**Data Driven By**:
```javascript
serviceLanes: [
  {
    services: [
      { icon: '🌐', title: 'Executive Websites', desc: '...' },
      // ... more services
    ]
  },
  // ... 3 lanes total
]
```

**To edit**:
- Add/remove services in `serviceLanes` array
- Update lane names, descriptions, colors
- Change lane accent colors (cyan, lime, violet)
- Modify icon emojis

---

### 06-who-we-serve.html
**Purpose**: ICP (Ideal Customer Profile) section

**Contains**:
- 4 customer profile cards
- Icons for each profile type
- Description text for each

**To edit**:
- Change profile descriptions
- Update icon types (Font Awesome)
- Modify profile titles

---

### 13-pricing.html (LARGE FILE)
**Purpose**: Complete pricing section with revenue ladder and 5 pricing tiers

**Contains**:
- Revenue ladder (visual tier indicator)
- 2 entry-level cards ($0, $495)
- 4 core pricing cards ($2,995 - $18,500+)
- Recurring retainer info
- Alignment statement

**Data Driven By**:
```javascript
revenueLadder: [
  { tier: 'Entry', price: '$0', label: '...' },
  // ... 5 tiers
]
```

**To edit**:
- Update prices in ladder
- Modify card descriptions
- Add/remove features in bulleted lists
- Change package names
- Update retainer pricing

**NOTE**: Prices appear in BOTH:
1. `revenueLadder` array in `23-scripts.html`
2. HTML markup in this component (keep in sync!)

---

### 21-modals.html (STUB)
**Purpose**: Modal overlays for projects and lead magnets

**Should contain**:
- Project detail modal
- Lead magnet modal
- Modal overlay styling

**Currently**: Placeholder - full implementation in main file

---

### 22-widgets.html
**Purpose**: Floating widgets (chat, cookie banner, back-to-top, sticky CTA)

**Contains**:
1. **Cookie Banner** (#cookie-banner)
   - Fixed position (bottom: 5rem)
   - Accept/Privacy Policy buttons
   - Controlled by `cookieAccepted` state

2. **Back to Top Button** (#back-to-top)
   - Fixed position (bottom: 110px)
   - Shows when `scrolled > 400px`
   - Smooth scroll to top

3. **Sticky CTA Pill** (#sticky-pill)
   - Fixed position (bottom: 160px)
   - "Start Your Project" button
   - Shows when `scrolled > 600px`

4. **Chat Widget** (#chat-widget)
   - Floating chat icon (opens when clicked)
   - Full chat panel with messages
   - Message history
   - Quick action buttons
   - Booking form embedded in chat
   - Typing indicator animation

**Data Driven By**:
```javascript
chatMessages: []          // Message history
chatOpen: false           // Chat panel open/closed
bookingForm: {}           // Booking details
chatTyping: false         // Typing indicator
```

**To edit**:
- Change cookie banner text
- Update quick action button labels
- Modify widget colors
- Change chat greeting message
- Adjust positioning (CSS in `01-styles.html`)

---

### 23-scripts.html (CRITICAL FILE)
**Purpose**: Alpine.js application logic and all data

**Main Sections**:
1. **Core UI State** (lines 15-35)
   - scrolled, scrollProgress, formSent, loadingDone
   - Chat state (chatOpen, chatMessages, chatInput)
   - Form state (form, formErrors)
   - Modal state (activeProject, faqOpen)

2. **Data Objects** (lines 38-600)
   - `stats`: Hero section stats
   - `techBadges`: Trust bar badges
   - `serviceLanes`: 3 service categories with items
   - `revenueLadder`: Pricing tier structure
   - `projects`: Portfolio case studies
   - `process`: 4-step process
   - `skillCats` & `skillsData`: Skills by category
   - `faqs`: FAQ Q&A pairs
   - `testimonials`: Client testimonials
   - `team`: Team members

3. **Methods** (lines 603-900)
   - `init()`: Initialize page (loading, scroll listeners, AOS)
   - `updateScroll()`: Handle scroll events
   - `submitForm()`: Contact form submission
   - `getBotResponse()`: Chat AI response logic
   - Various UI helpers (openProject, toggleFaq, etc.)

**To edit (Most Common Changes)**:

1. **Update Service Descriptions**:
   Find `serviceLanes` array, modify service items:
   ```javascript
   { icon: '🌐', title: 'Service Name', desc: 'Description' }
   ```

2. **Add Portfolio Projects**:
   Find `projects` array, add new project object:
   ```javascript
   {
     title: 'Client Name',
     industry: 'Industry',
     metrics: ['metric 1', 'metric 2'],
     challenge: '...',
     solution: '...',
     stack: ['tech1', 'tech2']
   }
   ```

3. **Update Pricing**:
   Find `revenueLadder` array, modify prices/tiers

4. **Add FAQ Items**:
   Find `faqs` array, add Q&A pair:
   ```javascript
   { q: 'Question?', a: 'Answer...' }
   ```

5. **Update Testimonials**:
   Find `testimonials` array, add testimonial object:
   ```javascript
   {
     quote: '...',
     name: 'Name',
     role: 'Title',
     color: '#06d6f5'
   }
   ```

6. **Update Team**:
   Find `team` array, modify team members

---

## File Dependencies

```
index.html (master)
├─ 00-meta.html (head section)
├─ 01-styles.html (CSS)
├─ 02-nav.html (uses: mobileMenu state)
├─ 03-hero.html (uses: stats array)
├─ 04-trust-bar.html (uses: techBadges array)
├─ 05-services.html (uses: serviceLanes array)
├─ ...other content sections...
├─ 22-widgets.html (uses: chatOpen, chatMessages, etc.)
└─ 23-scripts.html (Alpine.js + all data)
```

**All components reference Alpine.js data** defined in `23-scripts.html` using directives like:
- `x-for="item in arrayName"` (loop)
- `x-show="stateName"` (conditional display)
- `@click="methodName()"` (event handlers)
- `:class="dynamicClass"` (dynamic CSS)
- `x-text="variable"` (text binding)

---

## Editing Workflow

1. **Change content structure** → Edit HTML in component file
2. **Add new data** → Update array in `23-scripts.html`
3. **Change styling** → Modify CSS in `01-styles.html`
4. **Add new feature** → Add method and state in `23-scripts.html`, then reference in component
5. **Build & test** → Combine files, test locally, deploy

---

## Common Tasks

### Add a new project to portfolio
1. Open `components/23-scripts.html`
2. Find `projects: [...]` array
3. Add new object with: title, industry, metrics, challenge, solution, stack
4. Component automatically renders

### Add a new pricing tier
1. Update `revenueLadder` in `23-scripts.html`
2. Add new card in `13-pricing.html` HTML
3. Keep prices in sync between both locations

### Change brand colors
1. Open `01-styles.html`
2. Find Tailwind config `colors: {}`
3. Update color values
4. All components automatically use new colors

### Add a new FAQ
1. Open `23-scripts.html`
2. Find `faqs: [...]` array
3. Add `{ q: 'Question?', a: 'Answer...' }`
4. Component automatically renders

### Update chat responses
1. Open `23-scripts.html`
2. Find `getBotResponse(input)` method
3. Add condition matching user input
4. Return object with `{ text: 'response text' }`

---

## Testing Checklist

After making changes:
- [ ] All links work (#services, #work, etc.)
- [ ] Forms submit without errors
- [ ] Chat widget opens/closes
- [ ] Mobile menu toggles
- [ ] Scroll animations trigger (AOS)
- [ ] Colors match brand
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop

---

## Performance Notes

- **CSS**: Inline in component (no external stylesheet)
- **JavaScript**: Alpine.js via CDN (no build step)
- **Fonts**: Google Fonts (cached globally)
- **Icons**: Font Awesome via CDN
- **No Image Assets Required**: All backgrounds are CSS gradients

**Page load time**: ~2 seconds (entirely dependent on CDN speeds)

---

**Last Updated**: 2026
**Version**: 1.0
