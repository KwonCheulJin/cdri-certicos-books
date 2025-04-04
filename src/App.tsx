import Layout from '@/pages/Layout';
import SavedBooksPage from '@/pages/saved-books/SavedBooksPage';
import SearchPage from '@/pages/search/SearchPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        {/* 메인 검색 페이지 */}
        <Route path={'/'} element={<Layout />}>
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path={'/'} element={<Layout />}>
          {/* 내가 찜한 책 */}
          <Route path="/saved-books" element={<SavedBooksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
