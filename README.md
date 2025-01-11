# Accessing Environment Variables in Next.js 15 Page Components

This repository demonstrates a common error when accessing environment variables within page components in Next.js 15 and provides a solution.

**Problem:**

Directly accessing `process.env` within a page component's JavaScript code (like `pages/about.js` in this example) will often result in `undefined`.  Next.js 15 handles environment variables differently.

**Solution:**

Instead of directly accessing `process.env`, leverage the `next/config` module to access environment variables in page components.  The `withPageAuthRequired` higher-order component is used to protect the route, illustrating a common pattern.

**Steps to reproduce:**

1. Clone this repo.
2. Run `npm install`.
3. Start the development server: `npm run dev`.
4. Navigate to `/about` in your browser.  You'll see an error message in the console.
5. Review the `aboutSolution.js` file to see the corrected approach.
