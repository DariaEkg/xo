import { Game, GameCoord } from "../Game";
import { XOStrategy } from "./XOStrategy";

export class RandomStrategy implements XOStrategy { 
    step(game: Game): [GameCoord, GameCoord] {
        const board = game.board;
        const emptyCells: [GameCoord, GameCoord][] = [];

        for (let y = 0 as GameCoord; y <= 2; y++) {
            for (let x = 0 as GameCoord; x <= 2; x++) {
                if (board[y][x] === '-') {
                    emptyCells.push([x, y]);
                }
            }
        }

        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            return emptyCells[randomIndex];
        }

        throw new Error("Method not implemented.");
    }
}
