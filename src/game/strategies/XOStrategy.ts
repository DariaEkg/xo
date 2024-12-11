import { Game, GameCoord } from '../Game'

export interface XOStrategy {
    step(game: Game): [ GameCoord, GameCoord ];
}