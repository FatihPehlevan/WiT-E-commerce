import { Routes, Route } from 'react-router';
import HomePage from '@/pages/HomePage';

export default function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
