import MainLayout from "./layouts/MainLayout";
import Compare from "./pages/compare";
import Pokemon from "./pages/pokemon";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index path="/" element={<Pokemon />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
