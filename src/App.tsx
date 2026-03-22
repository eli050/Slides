import { Route, Routes } from "react-router-dom"
import {GameBoardPage} from "./pages/GameBoardPage"
import { SignInPage } from "./pages/SignInPage"


export function App(): JSXElement{
  return (
    <Routes>
      <Route path="/" element={<SignInPage />}/>
      <Route path="/game-board" element={<GameBoardPage />} />
    </Routes>
  )
}
