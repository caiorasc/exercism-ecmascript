class LinkedList {
    constructor(){
        this.prev = null;
        this.next = null;
        this.val = null;
        this.contador = 0;
    }
    push(n) {
        if(this.val !== null){
            if(this.next === null){
                this.next = new LinkedList(this);    
            }
            this.next.push(n);
        }else {
            this.val = n;
            console.log(this.val);
        }
        this.contador++;
        
    }
    pop(){
        if(this.next !== null){
            var ret = this.next.pop();
            if(ret !== null){
                return ret;
            }
        }
        var ret = this.val;
        this.val = null;
        return ret;
        this.contador--;
    }
    shift(){
        if(this.val !== null){
            var value = this.val;
            if (this.next !== null){
                this.val = this.next.val;
                if (this.next.next !== null){
                    this.next = this.next.next;
                }
            }return value;
            this.contador--;
        }
    }
    
    unshift(data){
        if(this.val !== null){
            var atual = this.val;
            this.val = data;
            if(this.next !== null){
                var prox = this.next;
                this.next = new LinkedList();
                this.next.val = atual;
                this.next.next = prox;
            }
            else {
                this.next = new LinkedList();
                this.next.val = atual;
            }
        }
        else {
            this.val = data;
        }
        this.contador++;
    }//fecha unshift
    count(){
        return this.contador;        
    }
    
}//fecha class


export default LinkedList;