import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<Success />} />
    </Routes>
  );
}

export default App;