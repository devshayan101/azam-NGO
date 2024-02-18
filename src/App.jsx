import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Majlisemuhammadi from "./pages/Majlisemuhammadi";
import KhalidTechnicalTeam from "./pages/KhalidTechnicalTeam";
import AlAhadBaytulMaal from "./pages/AlAhadBaytulMaal";
import AmmarIslamicMedia from "./pages/AmmarIslamicMedia";
import MajliseFarooq from "./pages/MajliseFarooq";
import SunnatTijaratAssembly from "./pages/SunnatTijaratAssembly";
import SunnatTababatAssembly from "./pages/SunnatTababatAssembly";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/majlise-muhammadi" element={<Majlisemuhammadi />} />
          <Route exact path="/khalid-technical-team" element={<KhalidTechnicalTeam />} />
          <Route exact path="/al-ahad-baytul-maal" element={<AlAhadBaytulMaal />} />
          <Route exact path="/ammar-islamic-media" element={<AmmarIslamicMedia />} />
          <Route exact path="/majlise-farooq" element={<MajliseFarooq />} />
          <Route exact path="/sunnat-tijarat-assembly" element={<SunnatTijaratAssembly />} />
          <Route exact path="/sunnat-tijarat-assembly" element={<SunnatTababatAssembly />} />
          <Route exact path="/sign-in" element={<SignInPage />} />

        </Routes>  
      </BrowserRouter>    
  );
}



export default App;
