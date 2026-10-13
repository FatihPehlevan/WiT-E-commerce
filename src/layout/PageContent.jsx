import { Routes, Route } from 'react-router';
import HomePage from '@/pages/HomePage.jsx';

export default function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
