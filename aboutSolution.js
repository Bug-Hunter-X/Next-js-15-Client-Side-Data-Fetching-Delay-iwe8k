```javascript
// pages/aboutSolution.js
import { Suspense } from 'react';

function About() {
  const data = fetchData();

  return (
    <div>
      <h1>About Page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <p>Data: {JSON.stringify(data)}</p>
      </Suspense>
    </div>
  );
}

const fetchData = () => {
  return (async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay
    return { message: 'Data fetched successfully!' };
  })();
};

export default About;
```