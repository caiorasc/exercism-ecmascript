class Transcriptor{
    toRna(values){
        var ret = '';
        for (var index in values){
            const value = values[index];

            if (value === 'C'){
                ret += 'G';
            }
            if (value === 'G'){
                ret += 'C';
            }
            if  (value === 'A'){
                ret += 'U';
            }
            if (value === 'T'){
                ret += 'A';
            }
            if (value === 'U'){
                throw new Error('Invalid input DNA.');
            }
            if (values.includes('XXX')){
                throw new Error('Invalid input DNA.');
            }   
        }
        return ret.toString();
    }
}

export default Transcriptor;