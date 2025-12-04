// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/Homepage";
import BrowseBuildsPage from "../pages/BrowseBuilds";
import LeaderboardPage from "../pages/LeaderboardPage";
import SubmitSetupPage from "../pages/SubmitSetupPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowseBuildsPage />} />
          <Route path="/submit" element={<SubmitSetupPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
