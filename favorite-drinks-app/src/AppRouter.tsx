import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import FavoritesPage from "./pages/FavoritesPage";
import MainLayout from "./layouts/MainLayout";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
