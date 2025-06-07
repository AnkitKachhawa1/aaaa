import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MutualFundPage from './pages/MutualFundPage';
import GSTPage from './pages/GSTPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/mutualfund\" replace />} />
        <Route path="mutualfund" element={<MutualFundPage />} />
        <Route path="gst" element={<GSTPage />} />
        <Route path="*" element={<Navigate to="/mutualfund\" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
