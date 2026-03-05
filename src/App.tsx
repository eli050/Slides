import { Route, Routes } from "react-router-dom"
import GameBoardPage from "./pages/GameBoardPage"


function App() {
  return (
    <Routes>
      <Route path="/"/>
      <Route path="/game-board" element={<GameBoardPage />} />
    </Routes>
  )
}

export default App
