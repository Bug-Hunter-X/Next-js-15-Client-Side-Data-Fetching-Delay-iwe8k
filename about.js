```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // Simulate a slow network request
  const data = fetchData(); // This might take a while...

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. Data: {JSON.stringify(data)}</p>
    </div>
  );
}

// Mimicking an asynchronous operation
async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay
  return { message: 'Data fetched successfully!' };
}

export default About;
```