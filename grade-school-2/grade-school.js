class School {
    constructor() {
        this._schoolRoster = {};
    }

    roster() {
        let schoolRosterCopy = {};
        let rosterGrades = Object.keys(this._schoolRoster);
        rosterGrades.map(grade => {
            schoolRosterCopy[grade] = this._schoolRoster[grade].slice();
        })
        
        return schoolRosterCopy
    }

    add(name, grade) {
        if (this._schoolRoster[grade] == undefined) {
            this._schoolRoster[grade] = [];
        }

        this._schoolRoster[grade].push(name);
        this._schoolRoster[grade] = this._schoolRoster[grade].sort();
    }

    grade(gradeSchool) {
        if (this._schoolRoster[gradeSchool] == undefined) {
            this._schoolRoster[gradeSchool] = [];
        }

        let a = this._schoolRoster[gradeSchool].slice();
        return a;
    }
}

export default School;