import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@src/page/home/Home.tsx';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
