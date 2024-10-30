import { Markup } from 'telegraf'

export class Board {
    cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    winner = null;

    step(x, y) {
        this.cells[y][x] = "x";
        this.calcWinner();
        if (this.winner != null) {
            return;
        }
        this.botStep();
        this.calcWinner();
    }

    botStep() {
       /* for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (this.cells[y][x] == "") {
                    this.cells[y][x] = "o";
                    return;
                }
            }
        }*/
            let bestMove = this.minimax(this.cells, true);
            this.cells[bestMove.y][bestMove.x] = "o";
    }

    minimax(board, isMaximizing) {
        let winner = this.calcWinner();
        if (winner === "o") return { score: 10 };  // бот выиграл
        if (winner === "x") return { score: -10 }; // игрок выиграл
        if (winner === "-") return { score: 0 };    // ничья

        let bestMove;
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 3; x++) {
                    if (board[y][x] === "") {
                        board[y][x] = "o";  // ход бота
                        let result = this.minimax(board, false);
                        board[y][x] = "";  // отмена хода
                        if (result.score > bestScore) {
                            bestScore = result.score;
                            bestMove = { x, y };
                        }
                    }
                }
            }
            return { score: bestScore, ...bestMove };
        } else {
            let bestScore = Infinity;
            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 3; x++) {
                    if (board[y][x] === "") {
                        board[y][x] = "x";  // ход игрока
                        let result = this.minimax(board, true);
                        board[y][x] = "";  // отмена хода
                        if (result.score < bestScore) {
                            bestScore = result.score;
                            bestMove = { x, y };
                        }
                    }
                }
            }
            return { score: bestScore, ...bestMove };
        }
    }

    calcWinner() {
        for (let i = 0; i < 3; i++) {

            //горизонтальные линии
            if (this.cells[i][0] !== "" && this.cells[i][0] == this.cells[i][1] && this.cells[i][1] == this.cells[i][2]) {
                this.winner = this.cells[i][0];
                return this.winner;
            }

            //вертикальные линии
            if (this.cells[0][i] !== "" && this.cells[0][i] == this.cells[1][i] && this.cells[1][i] == this.cells[2][i]) {
                this.winner = this.cells[0][i];
                return this.winner;
            }
            //диагональ
            if (this.cells[0][0] !== "" && this.cells[0][0] == this.cells[1][1] && this.cells[1][1] == this.cells[2][2]) {
                this.winner = this.cells[0][0];
                return this.winner;
            }

            if (this.cells[0][2] !== "" && this.cells[0][2] == this.cells[1][1] && this.cells[1][1] == this.cells[2][0]) {
                this.winner = this.cells[0][2];
                return this.winner;
            }
            //ничья
            if (this.cells.flat().every(cell => cell !== "")) {
                this.winner = "-"
            }

        }
    }

    message() {
        console.log(this.cells);
        return Markup.inlineKeyboard(
            this.cells.map(
                (row, rowIndex) => {
                    return row.map(
                        (cell, cellIndex) => {
                            return Markup.button.callback(cell || "-", `${rowIndex}_${cellIndex}`)
                        }
                    )
                }
            )
        )
    }
}