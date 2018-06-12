class Matrix {
    constructor(texto) {
        this.matriz = texto;
        this.rows = [];
        this.columns = [];

        var a = this.matriz.split('\n');

        for (let i = 0; i < a.length; i++) {
            this.rows[i] = a[i].split(' ');

            for (let j = 0; j < this.rows[i].length; j++) {
                var temp2 = this.rows[i][j];
                this.rows[i][j] = Number(this.rows[i][j]);
                if (this.columns[j] == undefined) {
                    this.columns[j] = [];
                }
                this.columns[j].push(Number(temp2));
            }
        }
    }
}

export default Matrix;