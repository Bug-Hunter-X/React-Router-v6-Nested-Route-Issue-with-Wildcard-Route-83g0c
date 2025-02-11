```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Correct solution: remove conflicting route */}
        {/* <Route path="/about/*" element={<About />} /> */}
        <Route path="/about/:param*" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function AboutDetails() {
    return <h1>About Details</h1>;
}
```