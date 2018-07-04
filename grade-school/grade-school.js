class School {
    constructor() {
        this._obj = new Object;
    }

    roster() {
        let g = new Object;
        let f = Object.keys(this._obj);
        f.map(c => {
            g[c] = this._obj[c].slice();
        })
        return g
    }

    add(name, grade) {
        if (this._obj[grade] == undefined) {
            this._obj[grade] = [];
        }

        this._obj[grade].push(name);
        this._obj[grade] = this._obj[grade].sort();
    }

    grade(gradeSchool) {
        if (this._obj[gradeSchool] == undefined) {
            this._obj[gradeSchool] = [];
        }

        let a = this._obj[gradeSchool].slice();
        return a;
    }

}

export default School;