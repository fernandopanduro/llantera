import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header";
import { LandingPage } from "./pages/landingPage";

import styles from './styles/app.module.css';

function App() {
  return (
    <Router>
      <Header />

      <main className={styles.main}>

        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>

      </main>
      
    </Router>
  );
}

export default App;
