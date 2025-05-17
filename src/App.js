import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Accueil from "./pages/Accueil";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Accueil/>}></Route>
        <Route path="services" element = {<Services/>}></Route>
        <Route path="contact" element = {<Contact/>}></Route>
        <Route path="realisations" element = {<Realisations/>}></Route>
        <Route path="mentionslegales" element = {<MentionsLegales/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
