class PrimeFactors{
    
    for(factor){
        let arr = [];   
        for (var i =2; i<=factor; i++){
            if(factor % i === 0){
                factor = factor/i;
                arr.push(i);
                i = 1;
            }
        }
        return arr;
    }
}

export default PrimeFactors;