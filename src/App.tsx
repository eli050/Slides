import { Route, Routes } from "react-router-dom"
import {GameBoardPage} from "./pages/GameBoardPage"


export function App(): JSXElement{
  return (
    <Routes>
      <Route path="/"/>
      <Route path="/game-board" element={<GameBoardPage />} />
    </Routes>
  )
}
