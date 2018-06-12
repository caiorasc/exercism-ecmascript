class Binary {
    constructor (binary){
        this.binary = binary;
    }
    toDecimal () { 
        let char = 'abcdefghijklmnopqrstuvxzwy23456789';
        let binario = this.binary;
        let result = parseInt(binario,2);
        for(let i=0; i<binario.length; i++){
            let a = binario[i];
            if(char.indexOf(a) >= 0){
                return 0;       
            }
        }
        return result;
    }
}
export default Binary;