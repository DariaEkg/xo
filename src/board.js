export class Board {
    cells = [
        [ "", "", "" ],
        [ "", "", "" ],
        [ "", "", "" ]
    ];
    winner = null;

    step (x , y) {
        this.cells[y][x] = "x";
        this.calcWinner();
        if (this.winner != null){
            return;
        }
        this.botStep();
        this.calcWinner();
    }

    botStep() {
        for (let y = 0; y < 3; y++){
            for (let x = 0; x < 3; x++){
                if (this.cells[y][x] == ""){
                    this.cells.push("o");
                    return;
                }
            }
        }
    }

    calcWinner() {
        for (let i = 0; i < 3; i++){

            //горизонтальные линии
            if (this.cells[i][0] !== "" && this.cells[i][0] == this.cells[i][1] && this.cells[i][1] == this.cells[i][2]){
                this.winner = this.cells[i][0];
                return this.winner;
            }

            //вертикальные линии
            if (this.cells[0][i] !== "" && this.cells[0][i] == this.cells[1][i] && this.cells[1][i] == this.cells[2][i]){
                this.winner = this.cells[0][i];
                return this.winner;
            }
            //диагональ
            if (this.cells[0][0] !== "" && this.cells[0][0] == this.cells[1][1] && this.cells[1][1] == this.cells[2][2] ){
                this.winner = this.cells[0][0];
                return this.winner;
            }

            if (this.cells[0][2] !== "" && this.cells[0][2] == this.cells[1][1] && this.cells[1][1] == this.cells[2][0]){
                this.winner = this.cells[0][2];
                return this.winner;
            }
            //ничья
            if (this.cells.flat().every(cell => cell !== "")){
                this.winner = "-"
            }

        }
    }
}