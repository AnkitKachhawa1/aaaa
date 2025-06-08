import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MutualFundPage from './pages/MutualFundPage';
import GSTPage from './pages/GSTPage';
import UpdatesPage from './pages/UpdatesPage';
import BlogDetail from './pages/BlogDetail';
import NewBlog from './pages/NewBlog';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/mutualfund" replace />} />
            <Route path="mutualfund" element={<MutualFundPage />} />
            <Route path="gst" element={<GSTPage />} />
            <Route path="updates" element={<UpdatesPage />} />
            <Route path="blogs/new" element={<NewBlog />} />
            <Route path="blogs/:id" element={<BlogRoutes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;