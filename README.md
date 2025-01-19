# Next.js 15 Client-Side Data Fetching Delay

This repository demonstrates a common performance issue in Next.js 15 applications involving client-side data fetching.  The `about.js` page fetches data using an asynchronous function, resulting in a noticeable delay before the page content renders.

## Problem

The `fetchData` function simulates a network request with a 3-second delay.  This delay is directly experienced by the user, leading to a poor user experience.

## Solution

The `aboutSolution.js` file provides a solution using `Suspense` to improve the user experience.  Suspense allows for a smoother user experience by showing a loading indicator while waiting for data.