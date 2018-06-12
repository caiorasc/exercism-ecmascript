class SpaceAge {
    constructor (seconds){
        this.seconds = seconds;
        this.earthPeriod = 31557600; 
    }
    
    onEarth(){
        let idade = this.seconds / this.earthPeriod;
        return parseFloat(idade.toFixed(2));
    }

    onMercury(){
        let period = this.earthPeriod * .2408467;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    onVenus(){
        let period = this.earthPeriod * .61519726;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    onMars(){
        let period = this.earthPeriod * 1.8808158;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    onJupiter(){
        let period = this.earthPeriod * 11.862615;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    onSaturn(){
        let period = this.earthPeriod * 29.447498;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    onUranus(){
        let period = this.earthPeriod * 84.016846;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    onNeptune(){
        let period = this.earthPeriod * 164.79132;
        let idade = this.seconds / period;
        return parseFloat(idade.toFixed(2));
    }
    

}
 
export default SpaceAge;