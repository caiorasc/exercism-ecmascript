class Triangle {
    constructor(row) {
        this.row = row;
        this.rows = [];
        this.lastRow;

        for (let line = 1; line <= this.row; line++) {
            if (line == 1) {
                this.rows.push([1]);
            } else {
                let newLine = [];

                for (let col = 1; col <= line; col++) {
                    let value = this.rows[line - 2][col - 1];
                    let value2 = this.rows[line - 2][col - 2];

                    if (value == undefined) {
                        value = 0;
                    }
                    if (value2 == undefined) {
                        value2 = 0;
                    }

                    let x = value + value2;
                    newLine.push(x);
                }
                this.rows.push(newLine);
            }

            if (line == this.rows.length) {
                this.lastRow = this.rows[this.row - 1];
            }
        }

    }
}
export default Triangle;