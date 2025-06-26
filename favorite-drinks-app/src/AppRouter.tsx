import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import FavoritesPage from "./pages/FavoritesPage";
import MainLayout from "./layouts/MainLayout";
import GenerateAI from "./pages/RecipeAI";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<IndexPage />} index />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/RecipeAI' element={<GenerateAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
