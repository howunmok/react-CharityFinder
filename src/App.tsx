import "./App.css"

import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import CharityDetail from "./pages/CharityDetail"
import NotFound from "./pages/NotFound"
import SearchResult from "./pages/SearchResult"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/search/:causes" element={<SearchResult />} />
        {/* "/search/:causes" */}
        <Route path="/charity/:id" element={<CharityDetail />}></Route>
        {/* "/charity/:id" */}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
