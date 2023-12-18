# HeliosX Frontend Take Home Exercise

This project was created for the HeliosX frontend take home exercise. You can view the application at: https://heliosx-assessment.vercel.app. The assignment for this task can be viewed in [assignment.pdf](assignment.pdf)

## Tools used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/) for styling
- [Tanstack Query](https://tanstack.com/query/latest/) for caching and mutating state
- [ESLint](https://eslint.org/) for static testing
- [Jest](https://jestjs.io/) for unit testing
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro) for integration testing
- [Playwright](https://playwright.dev/) for functional testing

## Notes

- The E2E test has a large amount of functionality cross-over with the integration test in the app folder. However I still decided to include it to show a more typical end-to-end flow of the application when deployed and in production as it is tested against the deployed URL.
- Atomic design was the approach taken for components to [promote consistency and scalability](https://bradfrost.com/blog/post/atomic-web-design/#:~:text=construct%20our%20system.-,why%20atomic%20design,-In%20a%20lot).
- Whilst no caching was utilised, nor HTTP requests sent, Tanstack Query was used to replicate how I would have implemented the call in a real situation.
- The page is accessible and keyboard navigable.

## Running the development server

Prerequisites:

- Node v18+
- Git

Install dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

Install dependencies:

```bash
npm i
```

Run tests:

```bash
# Run static tests
npm run test:static

# Run unit and integration tests
npm run test:unit

# Run end-to-end tests
npm run test:e2e
```
