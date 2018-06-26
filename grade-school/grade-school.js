class School {
    constructor() {
        this.obj = new Object;
    }

    roster() {
        return this.obj;
    }

    add(name, grade) {
        if (this.obj[grade] == undefined) {
            this.obj[grade] = [];
        }
        
        this.obj[grade].push(name);
        this.obj[grade] = this.obj[grade].sort();
    }

    grade(gradeSchool) {
        if (this.obj[gradeSchool] == undefined) {
            this.obj[gradeSchool] = [];
        }

        return this.obj[gradeSchool];
    }
}

export default School;