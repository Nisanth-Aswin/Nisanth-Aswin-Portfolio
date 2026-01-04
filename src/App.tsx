import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import About from "./Pages/HomeView";
import Projects from "./Pages/Projects";
import Resume from "./Pages/ResumePreview";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/About" />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
