import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LandingPage } from "./pages/landingPage";
import { Privacidad } from "./pages/privacidad";

import styles from './styles/app.module.css';

function App() {
  return (
    <Router>
      <Header />

      <main className={styles.main}>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='privacy' element={<Privacidad />} />
        </Routes>

      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
