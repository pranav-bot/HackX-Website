import { Route,Routes,BrowserRouter } from "react-router-dom";
import About from "./pages/about/aboutpage";
import Events from "./pages/events/eventspage";
import Landing from "./pages/landing/landingpage";
import OurTeam from "./pages/ourteam/ourteampage";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/ourteam" element={<OurTeam/>} />
        
        {/* Default path */}
        <Route exact path="/*" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
