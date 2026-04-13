import { Route, Routes } from "react-router-dom"
import { GameBoardPage } from "./pages/GameBoardPage"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { GAME_BOARD_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from "./constants/URLpaths"
import { AuthPage } from "./pages/AuthPage"
import { STAGES } from "./constants/authTypes"

export function App(): JSXElement {
  return (
    <Routes>
      <Route path={SIGN_IN_PATH} element={<AuthPage stage={STAGES.SIGN_IN_STAGE} />} />
      <Route path={SIGN_UP_PATH} element={<AuthPage stage={STAGES.SIGN_UP_STAGE} />} />
      <Route element={<ProtectedRoute />}>
        <Route path={GAME_BOARD_PATH} element={<GameBoardPage />} />
      </Route>
    </Routes>
  )
}
