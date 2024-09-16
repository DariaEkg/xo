import {test} from "node:test"
import { Board } from "../src/board.js"
import {equal} from "node:assert"


test("calcWinner", () => {
    calcWinnerTest(
        [
            [ "x", "x", "x" ],
            [ "", "", "" ],
            [ "", "", "" ]
        ],
        "Вы победили!!!"
    );
    calcWinnerTest(
        [
            [ "o", "o", "o" ],
            [ "", "", "" ],
            [ "", "", "" ]
        ],
        "Победил бот!"
    );
    
    
})

function calcWinnerTest(cells, winner){
    const board = new Board();
    board.cells = cells;
    
    board.calcWinner();

    //if(board.winner != winner){
    //    throw new Error(`у доски ${JSON.stringify(cells)} неправильный победитель ${board.winner}`);
    //}

    equal(board.winner, winner, `у доски ${JSON.stringify(cells)} неправильный победитель ${board.winner}`)
}


