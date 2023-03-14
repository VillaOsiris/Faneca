import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/navbar";
import ToTop from "./Components/ToTop";
import Home from "./pages/homePage";
import Skills from "./pages/skillsPage";
import Work from "./pages/workPage";
import More from "./pages/morePage";
import Error from "./pages/errorPage";
import "./Styles/main.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
