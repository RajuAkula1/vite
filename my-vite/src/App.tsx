import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Test from "./components/Test";

// Lazy load About component
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Test />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
