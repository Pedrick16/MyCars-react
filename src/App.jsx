import AboutPage from "./pages/AboutPage";
import CarsPage from "./pages/CarsPage";
import IndexPage from "./pages/IndexPage";
import HomeLayout from "./shared/components/layouts/HomeLayout";
import RootLayout from "./shared/components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/about" element={<AboutPage />} />

        
        </Route>

        <Route element={<HomeLayout />}>
         
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/" element={<IndexPage />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
