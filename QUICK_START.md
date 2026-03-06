# TiviForge Quick Start Guide
## Get Everything Running in 30 Minutes

---

## STEP 1: Update Analytics IDs (5 minutes)

Open `index.html` and replace:

**Line 12:**
```html
<!-- BEFORE -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- AFTER -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ACTUAL_ID"></script>
```

**Line 16:**
```javascript
// BEFORE
gtag('config', 'G-XXXXXXXXXX', {

// AFTER
gtag('config', 'G-YOUR_ACTUAL_ID', {
```

**Line 67:**
```javascript
// BEFORE
h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};

// AFTER
h._hjSettings={hjid:YOUR_ACTUAL_HOTJAR_ID,hjsv:6};
```

---

## STEP 2: Update Calendly Link (2 minutes)

Search for `https://calendly.com/tiviforge` and replace with your actual Calendly link:

**Locations:**
- `index.html` line 322: Final CTA section
- `index.html` line 554: Footer link
- `audit/index.html`: Next steps section
- `digital-authority-blueprint/index.html`: Final CTA

---

## STEP 3: Test Locally (5 minutes)

Run a local server:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Then visit:
http://localhost:8000
```

**Check:**
- ✓ Homepage loads fast
- ✓ Navigation works
- ✓ All links are clickable
- ✓ Mobile view is responsive
- ✓ Forms are visible

---

## STEP 4: Set Up Email Service (10 minutes)

### Create Account (Choose One):

**Option A: Mailchimp (Free tier available)**
1. Sign up at mailchimp.com
2. Create new audience
3. Get your audience ID

**Option B: HubSpot (Free tier available)**
1. Sign up at hubspot.com
2. Create account
3. Go to Contacts → Lists

**Option C: ConvertKit (Recommended for creators)**
1. Sign up at convertkit.com
2. Create account
3. Get API key

### Connect Forms:

Copy the form HTML from:
- `digital-authority-blueprint/index.html` (lead magnet form)
- `audit/index.html` (audit tool form)
- `index.html` (newsletter form)

Update the form `action` or add JavaScript handler to send to your email service.

Example for Mailchimp:
```javascript
// In form submit handler
const email = document.querySelector('input[type="email"]').value;

fetch('https://YOUR_MAILCHIMP_URL.us10.list-manage.com/subscribe/post', {
  method: 'POST',
  body: new FormData(form)
})
.then(response => alert('Check your email!'))
.catch(error => console.error('Error:', error));
```

---

## STEP 5: Create Digital Authority Blueprint PDF (Varies)

The lead magnet landing page is ready, but you need the PDF:

### Option 1: Use the provided template
Open `GROWTH_SYSTEMS_BLUEPRINT.md` and export as PDF:
- Copy content
- Open Google Docs
- Paste content
- Format as 20-page guide
- Export as PDF
- Save as `digital-authority-blueprint.pdf`

### Option 2: Use a design tool
- Open Canva or Adobe InDesign
- Create 20-page guide
- Use outline from `GROWTH_SYSTEMS_BLUEPRINT.md`
- Export as PDF

### Option 3: Use a PDF generator
- Use [Markdown to PDF tool](https://pandoc.org/)
- Or [HtmlToPdf](https://wkhtmltopdf.org/)

Once created:
1. Upload PDF to your email service
2. Set as auto-response on lead magnet form
3. Or host on your server and email link

---

## STEP 6: Deploy (5 minutes)

### Option 1: Netlify (Recommended, Free)

```bash
# Install netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 2: Vercel (Free)

```bash
# Install vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: Your Hosting Provider

1. Upload files via FTP or Git
2. Point domain to hosting
3. Wait 24 hours for DNS propagation

---

## STEP 7: Enable Monitoring (5 minutes)

### Google Analytics
1. Go to Google Analytics 4
2. Create property for your domain
3. Get Measurement ID
4. Add ID to index.html (Step 1)
5. Wait 24 hours for data collection

### Hotjar Heatmaps
1. Sign up at hotjar.com
2. Add your domain
3. Get Hotjar ID
4. Add ID to index.html (Step 1)
5. Start recording sessions

### Email Service Analytics
1. Go to your email service dashboard
2. Check open rates and clicks
3. Monitor new subscribers
4. Track conversions to strategy calls

---

## 📋 CHECKLIST BEFORE LAUNCH

### Content
- [ ] Company name and info updated
- [ ] Service pricing updated
- [ ] Contact information added
- [ ] Real testimonials/videos (or created placeholders)
- [ ] Real case studies (or examples ready)
- [ ] About/founder information added

### Configuration
- [ ] GA4 ID added
- [ ] Hotjar ID added
- [ ] Calendly link added
- [ ] Email service connected
- [ ] Forms tested and working

### Testing
- [ ] Homepage loads on desktop
- [ ] Homepage loads on mobile
- [ ] All links work
- [ ] Forms submit without errors
- [ ] Analytics tracking working
- [ ] Email captures working

### Deployment
- [ ] Site deployed to live domain
- [ ] DNS pointing correctly
- [ ] SSL certificate installed
- [ ] Page load time <2 seconds

---

## 🎯 FIRST 30 DAYS TASKS

### Week 1:
- [ ] Deploy homepage
- [ ] Deploy blog hub
- [ ] Deploy lead magnet
- [ ] Deploy audit tool
- [ ] Set up analytics
- [ ] Set up email service

### Week 2:
- [ ] Create Digital Authority Blueprint PDF
- [ ] Add to email auto-response
- [ ] Create 5 initial blog posts
- [ ] Update testimonials
- [ ] Create email sequences in service

### Week 3:
- [ ] Publish blog posts
- [ ] Enable email automations
- [ ] Create blog content calendar
- [ ] Set up newsletter sending
- [ ] Monitor early analytics

### Week 4:
- [ ] Review analytics data
- [ ] Check form submissions
- [ ] Monitor email open rates
- [ ] Start tracking strategy calls
- [ ] Plan next month's content

---

## 📊 WHAT TO MONITOR DAILY

**Morning (5 minutes):**
- New website visitors
- New email subscribers
- New form submissions (audit, lead magnet)
- Any errors in email delivery

**Weekly:**
- Total website visitors
- Email open rates
- Click-through rates
- Strategy calls booked
- Conversion rate (visitors → calls)

**Monthly:**
- Total leads generated
- Cost per lead
- Call-to-close rate
- Revenue generated
- Which traffic source converts best

---

## 🚨 TROUBLESHOOTING

### Forms Not Submitting?
1. Check browser console for errors (F12)
2. Verify email service API key is correct
3. Check CORS settings if using third-party service
4. Test with email client's test tool first

### Analytics Not Tracking?
1. Check GA4 ID is correct
2. Wait 24 hours for initial data
3. Use GA Debugger extension to verify events
4. Check browser's privacy settings aren't blocking

### Emails Not Sending?
1. Check spam folder
2. Verify sender email address
3. Check email service account status
4. Verify form is submitting correctly

### Page Loading Slowly?
1. Check image file sizes (should be <200KB each)
2. Minimize large videos on hero
3. Use lazy loading for below-fold images
4. Test with Google PageSpeed Insights tool

---

## 💡 OPTIMIZATION TIPS

### Increase Homepage Conversions:
1. A/B test CTA button colors
2. A/B test headline text
3. Add more social proof (testimonials)
4. Simplify form fields (2-3 max)
5. Reduce friction to strategy call booking

### Increase Blog Traffic:
1. Publish 2 posts/week
2. Optimize titles for keywords
3. Cross-link between articles
4. Promote on LinkedIn
5. Add internal links to sales pages

### Increase Email Conversions:
1. Test subject lines
2. Shorten email body (150-300 words)
3. Use single clear CTA
4. Test send times (typically 9 AM)
5. Remove unnecessary links

### Increase Audit Signups:
1. Run paid ads to audit page
2. Add exit-intent popup
3. Test different call-to-action text
4. Reduce form fields
5. Show social proof on landing page

---

## 📚 REFERENCE FILES

- **Full Strategy:** `GROWTH_SYSTEMS_BLUEPRINT.md`
- **Implementation Details:** `IMPLEMENTATION_STATUS.md`
- **Email Sequences:** `EMAIL_SEQUENCES.md`
- **Blog:** `/blog/index.html`
- **Lead Magnet:** `/digital-authority-blueprint/index.html`
- **Audit Tool:** `/audit/index.html`
- **Homepage:** `/index.html`
- **Styles:** `/styles/main.css`

---

## 🎯 SUCCESS TARGETS (First 90 Days)

- **Website Visitors:** 1,000+
- **Lead Magnet Signups:** 150+
- **Audit Signups:** 50+
- **Email Subscribers:** 300+
- **Strategy Calls:** 20+
- **Closed Deals:** 5+

If you're not hitting these, review:
- Content quality
- Traffic sources
- Email copy
- Form conversion rates
- Call quality

---

## 🚀 YOU'RE READY TO LAUNCH

All code is production-ready. No coding skills needed. Just update the configuration and deploy.

Questions? Check the documentation files or refer back to this guide.

Build something great. 💪
