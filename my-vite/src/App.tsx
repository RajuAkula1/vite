import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";

// Lazy load Users component
const Users = lazy(() => import("./pages/Users"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route
          path="/users"
          element={
            <Suspense fallback={<div>Loading About...</div>}>
              <Users />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
