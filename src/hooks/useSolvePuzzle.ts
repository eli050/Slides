import { useMutation } from "@tanstack/react-query";
import { solvePuzzle } from "../api/puzzleAPI";

export function useSolvePuzzle() {
    return useMutation({
        mutationFn: solvePuzzle,
    });
}