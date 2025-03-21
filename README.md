This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project has been deployed using Vercel: [https://events-interview-demo.vercel.app/](https://events-interview-demo.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Architecture
This project is structured as follows:

* **pages/:** Contains the Next.js pages. Each file in this directory corresponds to a route in the application.
  - **index.tsx:** The main page of the application, which displays a list of events and includes search and filter functionality.
  - **event/[id].tsx:** A dynamic route that displays the details of an individual event based on its ID.

* **components/:** Contains the React components used throughout the application.
  - **EventCard.tsx:** A component that displays the details of a single event in a card format.
  - **EventFilter.tsx:** A component that provides filtering options for the events.
  - **EventSearch.tsx:** A component that provides a search input for filtering events by title.

* **hooks/:** Contains custom React hooks used in the application.
  - **useFetchEvents.ts:** A custom hook that fetches a list of events based on the current search term and filters, with caching to avoid redundant API calls.
  - **useFetchEvent.ts:** A custom hook that fetches the details of an individual event based on its ID.

* **reducers/:** Contains the Redux-like reducers used to manage the application state.
  - **eventReducer.ts:** A reducer that manages the state of events, including fetching a list of events and fetching an individual event.

* **styles/:** Contains global styles and theme definitions.
  - **GlobalStyles.ts:** Defines the global styles for the application.
  - **theme.ts:** Defines the theme for the application, including colors, fonts, and spacing.

* **types/:** Contains TypeScript type definitions used throughout the application.
  - **index.ts:** Defines the types for events and filter options.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
