import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import LayoutHome from '../layouts/Home/home';
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutHome>
            <Home />
          </LayoutHome>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
