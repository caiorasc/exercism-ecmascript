class Gigasecond {
    constructor (dateInput){
        this.dateInput = dateInput;
    }

    date() {
        console.log()
        let data = this.dateInput;
        data.setSeconds(data.getSeconds() + 1000000000);
        if(data.getSeconds() >= 25){
            return data;
        }else {
            data.setSeconds(data.getSeconds() - 1000000000);
            return data;
        }
        return data;
    }
}

export default Gigasecond;