import "./App.css";
import Headers from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import UploadFile from "./Component/UploadFile";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Download from "./pages/Download";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Privacy from "./pages/Privacy";
import NearbyDevice from "./pages/NearbyDevice";


function App() {
  return (
    <div className="App">
      <Headers />
      <Router>
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/download" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/download" element={<Download/>}/>
          <Route path="/nearby" element={<NearbyDevice/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
