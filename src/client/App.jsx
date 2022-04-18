import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// IMPORT LAYOUTS
import MainLayout from './layouts/MainLayout';
//import BlankLayout from "./layouts/BlankLayout";
// IMPORT PAGES
import Home from './pages/Home';

const MainRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
