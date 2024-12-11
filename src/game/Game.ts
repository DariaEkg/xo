import { XOStrategy } from './strategies'

export class Game {
    board: GameBoard = [ [ '-', '-', '-' ], [ '-', '-', '-' ], [ '-', '-', '-' ] ];
    strategy: XOStrategy;

    constructor (strategy: XOStrategy) {
        this.strategy = strategy;
    };

    playerStep (x: GameCoord, y: GameCoord): GameCell {
        this.board[y][x] = 'x';
        if (this.calcWinner()) {
            return 'x';
        } 

        const [ strategyX, strategyY ] = this.strategy.step(this);
        this.board[strategyY][strategyX] = 'o';
        if (this.calcWinner()) {
            return 'o';
        } 

        return '-';
    }

    calcWinner():boolean {
        // ToDo
        return false;
    }
}

export type GameCell = 'x' | 'o' | '-'
export type GameRow = [ GameCell, GameCell, GameCell ]
export type GameBoard = [ GameRow, GameRow, GameRow ]
export type GameCoord = 0 | 1 | 2

