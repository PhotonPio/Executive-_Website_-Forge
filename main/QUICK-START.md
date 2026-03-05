# Quick Start Guide

Get your customized Tivi Forge website live in 30 minutes.

## The 5-Step Process

### Step 1: Clone & Open (5 min)
```bash
git clone <your-repo-url>
cd Executive-_Website_-Forge
```

Open in your code editor (VSCode recommended).

---

### Step 2: Update Your Company Info (5 min)

**Find & Replace** across all files:
- `consultation@tiviforge.com` → your email
- `+15558743920` → your phone
- `Tivi Forge` → your company name
- `Los Angeles, CA` → your location

**Using VSCode**:
1. Press `Cmd+Shift+H` (Find & Replace)
2. Enter search term
3. Enter replacement
4. Click "Replace All"

---

### Step 3: Edit `23-scripts.html` (15 min)

This file contains all your website data. Edit these arrays:

#### Stats (Hero Section)
```javascript
stats: [
  { value: '50+', label: 'Brands Built' },
  { value: '$2.4M', label: 'Client Revenue Influenced' },
  { value: '8.2×', label: 'Avg. ROI' },
  { value: '4 Wks', label: 'Avg. Delivery' }
]
```

#### Service Lanes (Your Services)
```javascript
serviceLanes: [
  {
    services: [
      { icon: '🌐', title: 'Your Service', desc: 'Description' },
      // Add more services...
    ]
  }
]
```

#### Projects (Portfolio)
```javascript
projects: [
  {
    title: 'Client Name',
    industry: 'Industry',
    metrics: ['+300% growth'],
    challenge: 'What was the problem?',
    solution: 'What did you do?',
    stack: ['Tech1', 'Tech2']
  }
]
```

#### Pricing (Revenue Ladder)
```javascript
revenueLadder: [
  { tier: 'Entry', price: '$0', label: 'Free Audit' },
  { tier: 'Low Ticket', price: '$495', label: 'Review' },
  { tier: 'Core', price: '$2,995–$6,995', label: 'Builds' },
  { tier: 'High Ticket', price: '$12,995–$18,500+', label: 'Infrastructure' },
  { tier: 'Recurring', price: '$250–$1,500/mo', label: 'Retainer' }
]
```

#### FAQ
```javascript
faqs: [
  { q: 'Your question?', a: 'Your answer...' }
]
```

#### Testimonials
```javascript
testimonials: [
  {
    quote: 'Client feedback...',
    name: 'Name',
    role: 'Title',
    color: '#06d6f5'
  }
]
```

#### Team
```javascript
team: [
  {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio...',
    initials: 'YN',
    avatarBg: 'linear-gradient(135deg, #06d6f5, #04a8c2)'
  }
]
```

---

### Step 4: Update Specific Sections (5 min)

#### Hero Headline (`components/03-hero.html`)
Find and change:
```html
<div class="grad-white">Websites and Digital Systems</div>
<div class="grad-cyan">That Turn Traffic Into Revenue</div>
```

#### Service Lane Names (`components/05-services.html`)
Find the lane titles and update

#### Pricing Cards (`components/13-pricing.html`)
Update card titles, descriptions, and feature lists

#### Trust Badges (`components/04-trust-bar.html`)
Update the marquee text and badge items

---

### Step 5: Test & Deploy (30 min to 1 hour)

#### Local Testing
1. Open `index.html` in browser (double-click file)
2. Check all pages load
3. Test mobile responsiveness (F12 → device toggle)
4. Click links (#services, #work, etc.)
5. Test contact form
6. Test chat widget

#### Deploy to GitHub Pages

**If using GitHub**:
1. Push all files to GitHub
2. Go to Settings → Pages
3. Select "main branch" as source
4. Site live at `username.github.io/repo-name`

**If using Netlify**:
1. Connect repo to Netlify
2. Netlify auto-deploys on push
3. Custom domain in Settings

**If using traditional hosting**:
1. Upload all files to web server
2. Make sure `index.html` is in root directory

---

## What Each File Does

| File | Edit For |
|------|----------|
| `components/00-meta.html` | Page title, meta description, JSON-LD data |
| `components/01-styles.html` | Brand colors, button styles, animations |
| `components/02-nav.html` | Navigation links, menu items |
| `components/03-hero.html` | Hero headline, main CTA |
| `components/04-trust-bar.html` | Trust badges, certifications |
| `components/05-services.html` | Service descriptions, lane names |
| `components/13-pricing.html` | Pricing card descriptions, features |
| `components/23-scripts.html` | ALL DATA (stats, projects, pricing, testimonials, FAQs, team) |

---

## Data Sync Warning ⚠️

**IMPORTANT**: Some data appears in TWO places:

1. **Pricing prices** appear in:
   - `revenueLadder` array in `23-scripts.html`
   - Individual pricing cards in `13-pricing.html`
   - **Keep these in sync!**

2. **Chat responses** appear in:
   - `getBotResponse()` method logic in `23-scripts.html`
   - Hard-coded in component

Always update both if changing prices or chat logic.

---

## Color Customization

To change brand colors, edit `components/01-styles.html`:

```javascript
colors: {
  ink: '#080c14',        // Dark background
  surface: '#0d1526',    // Card background
  cyan: '#06d6f5',       // Primary (blue)
  lime: '#b2f724',       // Secondary (green)
  // Change these values to your brand colors
}
```

Replace hex codes with your brand colors, and the entire site updates automatically.

---

## Common Customizations

### Add a new service
1. Open `components/23-scripts.html`
2. Find `serviceLanes` array
3. Add to the `services` array:
```javascript
{ icon: '🎯', title: 'New Service', desc: 'Description' }
```

### Add a new project
1. Open `components/23-scripts.html`
2. Find `projects` array
3. Add new project object (see format above)

### Add new FAQ
1. Open `components/23-scripts.html`
2. Find `faqs` array
3. Add `{ q: 'Question?', a: 'Answer...' }`

### Change button text
1. Find the button in component file
2. Change text in `@click="chatOpen=true"` or other button
3. Save and test

---

## Troubleshooting

### Website won't load
- Check you opened `index.html` correctly
- Check browser console (F12) for errors
- Make sure all files are in repo

### Chat widget not working
- Check `23-scripts.html` is loaded
- Check browser console for JavaScript errors
- Verify Alpine.js CDN is accessible

### Colors look wrong
- Check Tailwind config in `01-styles.html`
- Verify hex color codes are correct
- Clear browser cache (Cmd+Shift+R)

### Form not submitting
- Check email address in `18-contact.html`
- Make sure FormSubmit.co email is verified
- Check browser console for CORS errors

### Mobile menu not working
- Check `mobileMenu` state in `23-scripts.html`
- Verify Alpine.js is loaded
- Check `02-nav.html` has correct directives

---

## Next Steps After Setup

1. **Set up analytics**
   - Add Google Analytics ID to `00-meta.html`
   - Enable GA4 tracking code

2. **Set up contact form**
   - Replace email in component files
   - Verify email with FormSubmit.co

3. **Add your logo**
   - Replace Tivi Forge logo text with your logo
   - Or add image asset and update HTML

4. **Custom domain**
   - Point your domain to GitHub Pages or Netlify
   - Configure DNS records as needed

5. **SEO optimization**
   - Update meta tags in `00-meta.html`
   - Add your actual business info to JSON-LD
   - Verify with Google Search Console

6. **Add real AI chat**
   - Replace `getBotResponse()` with API call to OpenAI/Claude
   - Add API key management

---

## File Organization Tips

- Keep `components/` folder organized
- Use version control (Git) to track changes
- Back up before major changes
- Use search/replace carefully (test on one component first)

---

## Getting Help

- **Component structure**: Read `COMPONENT-REFERENCE.md`
- **Build options**: Read `BUILD-GUIDE.md`
- **Full documentation**: Read `README.md`
- **Code comments**: Check `23-scripts.html` for inline comments

---

**You're all set! Your website is ready to customize and deploy. Good luck! 🚀**

---

### Quick Checklist

```
□ Find & replace company info
□ Edit stats in 23-scripts.html
□ Edit service lanes in 23-scripts.html
□ Edit projects in 23-scripts.html
□ Edit pricing in 23-scripts.html & 13-pricing.html
□ Edit FAQ in 23-scripts.html
□ Edit testimonials in 23-scripts.html
□ Edit team in 23-scripts.html
□ Update hero headline in 03-hero.html
□ Update colors in 01-styles.html
□ Test in browser (local)
□ Test on mobile
□ Deploy to GitHub Pages / Netlify
□ Set up custom domain (optional)
□ Set up analytics (optional)
```

**Estimated time to complete: 30-45 minutes**
