import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Resources from "./pages/Resources.jsx";
import ApiPage from "./pages/ApiPage.jsx";
import RenderTreePage from "./pages/RenderTreePage.jsx";
import LogPage from "./pages/LogPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<ProfilePage />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/arbol" element={<RenderTreePage />} />
        <Route path="/bitacora" element={<LogPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
