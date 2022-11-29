import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/navbar";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Error from "./pages/error";
import "./Styles/main.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
