import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* เพิ่ม routes อื่นๆ ได้ที่นี่ */}
      </Routes>
    </BrowserRouter>
  );
}