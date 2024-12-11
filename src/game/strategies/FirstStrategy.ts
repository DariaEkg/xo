import { Game, GameCoord } from "../Game";
import { XOStrategy } from "./XOStrategy";

export class FirstStrategy implements XOStrategy {
    step(game: Game): [GameCoord, GameCoord] {
        const board = game.board;

        for (let y = 0 as GameCoord; y <= 2; y++) {
            for (let x = 0 as GameCoord; x <= 2; x++) {
                if (board[y][x] === '-') {
                    return [x, y];
                }
            }
        }
        throw new Error('No empty cells found');
    }
}