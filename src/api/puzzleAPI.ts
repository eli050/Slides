const API_URL = import.meta.env.VITE_API_URL;
const API_ROUTE = import.meta.env.VITE_API_ROUTE;

type solvePuzzleRequest = {
  board: string[][];
  movableTile: string;
  targetBoard: string[][]
}

export type SolvePuzzleResponse = {
  solvable: boolean;
  steps: number;
  path: string[][][];
  move_directions: string[];
};

type ApiValidationError = {
  detail: ValidationErrorItem[];
};

type ValidationErrorItem = {
  loc: (string | number)[];
  msg: string;
  type: string;
  input: unknown;
  ctx?: Record<string, unknown>;
};

export async function solvePuzzle({ board, movableTile, targetBoard }: solvePuzzleRequest) {
  const data = {
    "board": board,
    "movable_tile": movableTile,
    "target_board": targetBoard
  }

  const response = await fetch(`${API_URL}/${API_ROUTE}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}