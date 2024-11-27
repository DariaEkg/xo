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
        "x"
    );
    calcWinnerTest(
        [
            [ "", "", "" ],
            [ "x", "x", "x" ],
            [ "", "", "" ]
        ],
        "x"
    );
    calcWinnerTest(
        [
            [ "", "", "" ],
            [ "", "", "" ],
            [ "x", "x", "x" ]
        ],
        "x"
    );

    calcWinnerTest(
        [
            [ "o", "o", "o" ],
            [ "", "", "" ],
            [ "", "", "" ]
        ],
        "o"
    );
    calcWinnerTest(
        [
            [ "", "", "" ],
            [ "o", "o", "o" ],
            [ "", "", "" ]
        ],
        "o"
    );
    calcWinnerTest(
        [
            [ "", "", "" ],
            [ "", "", "" ],
            [ "o", "o", "o" ],
        ],
        "o"
    );

    calcWinnerTest(
        [
            [ "x", "", "" ],
            [ "", "x", "" ],
            [ "", "", "x" ]
        ],
        "x"
    );
    calcWinnerTest(
        [
            [ "", "", "x" ],
            [ "", "x", "" ],
            [ "x", "", "" ]
        ],
        "x"
    );

    calcWinnerTest(
        [
            [ "o", "", "" ],
            [ "", "o", "" ],
            [ "", "", "o" ],
        ],
        "o"
    );
    calcWinnerTest(
        [
            [ "", "", "o" ],
            [ "", "o", "" ],
            [ "o", "", "" ],
        ],
        "o"
    );

    calcWinnerTest(
        [
            [ "x", "o", "x" ],
            [ "o", "x", "x" ],
            [ "o", "x", "o" ],
        ],
        "-"
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


