# Manchester Window Quotes

A focused lead-generation website for homeowners comparing uPVC window quotes in Greater Manchester.

## Local setup

```bash
npm install
copy .env.example .env.local
npm run dev
```

Set `LEAD_WEBHOOK_URL` before accepting live enquiries. The form will return a clear configuration error instead of discarding a lead when no webhook is set.

## Before launch

- Replace `NEXT_PUBLIC_SITE_URL` with the live domain.
- Connect and test the lead webhook.
- Add the legal operator name, company details, and data-controller contact to the privacy page.
- Add a phone number only when calls are answered and tracked.
- Add testimonials and accreditations only when they can be verified.
