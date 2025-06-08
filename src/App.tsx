import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MutualFundPage from './pages/MutualFundPage';
import GSTPage from './pages/GSTPage';
import UpdatesPage from './pages/UpdatesPage';
import BlogDetail from './pages/BlogDetail'; // NEW
import NewBlog from './pages/NewBlog'; // NEW
import { HelmetProvider } from 'react-helmet-async'; // ADD THIS LINE

function App() {
  return (
    <HelmetProvider> {/* ADD THIS LINE */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/mutualfund" replace />} />
          <Route path="mutualfund" element={<MutualFundPage />} />
          <Route path="gst" element={<GSTPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="blogs/new" element={<NewBlog />} /> {/* NEW */}
          <Route path="blogs/:id" element={<BlogDetail />} /> {/* NEW */}
          <Route path="*" element={<Navigate to="/mutualfund" replace />} />
        </Route>
      </Routes>
    </HelmetProvider> {/* ADD THIS LINE */}
  );
}

export default App;