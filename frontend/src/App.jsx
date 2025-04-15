// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeLayout from './components/AnimeLayout';
import AnimeDashboard from './components/AnimeDashboard';
import MusicPage from './pages/MusicPage';
import ModerationPage from './pages/ModerationPage';
import AutoModPage from './pages/AutoModPage';
import WelcomePage from './pages/WelcomePage';
import LevelsPage from './pages/LevelsPage';
import CustomCommandsPage from './pages/CustomCommandsPage';
import LoggingPage from './pages/LoggingPage';
import SettingsPage from './pages/SettingsPage';
import SupportPage from './pages/SupportPage';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AnimeLayout>
          <Routes>
            <Route path="/" element={<AnimeDashboard />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/moderation" element={<ModerationPage />} />
            <Route path="/automod" element={<AutoModPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/levels" element={<LevelsPage />} />
            <Route path="/custom-commands" element={<CustomCommandsPage />} />
            <Route path="/logging" element={<LoggingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </AnimeLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;