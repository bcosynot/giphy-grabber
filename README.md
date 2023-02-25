# Giphy Grabber

A Next.js app that uses the Giphy API to search for GIFs and display them in a grid.

## Running the app

### 0. Prerequisites

1. [Node.js](https://nodejs.org/en/)
2. [NPM](https://www.npmjs.com/)

### 1. Install dependencies

```bash
npm install
```

### 2. Setup environment variables

First, copy the example environment variables file:
```bash
cp .env.example .env.local
```
Then edit the `.env.local` file and add your Giphy API key in there. You can get one [here](https://developers.giphy.com/dashboard/).

### 3. Run the app

```bash
npm run build
npm start
```

You can now access the app at http://localhost:3000

## Tech stack

1. [Next.js](https://nextjs.org/) - React framework and server for API routes
2. [Tailwind CSS](https://tailwindcss.com/) - CSS framework
3. [Giphy API](https://developers.giphy.com/docs/api/) - GIF search API
4. [Recoil](https://recoiljs.org/) - State management library
5. [SWR](https://swr.vercel.app/) - Data fetching library
