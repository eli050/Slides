import { Route, Routes } from "react-router-dom"
import {GameBoardPage} from "./pages/GameBoardPage"
import { SignInPage } from "./pages/SignInPage"
import { SignUpPage } from "./pages/SignUpPage"
import { ProtectedRoute } from "./components/ProtectedRoute"


export function App(): JSXElement{
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />}/>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/game-board" element={<GameBoardPage />} />
      </Route>
    </Routes>
  )
}
