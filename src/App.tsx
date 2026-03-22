import { Route, Routes } from "react-router-dom"
import {GameBoardPage} from "./pages/GameBoardPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"


export function App(): JSXElement{
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />}/>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/game-board" element={<GameBoardPage />} />
    </Routes>
  )
}
