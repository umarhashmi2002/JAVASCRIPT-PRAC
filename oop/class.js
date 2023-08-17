class saad {
    constructor(x){
        for(let i= 0 ; i< 10 ; i++){
            x=x *  4
        }
    }
    get1(){
        return this.x
    }
}
let mul = new saad(4);
//console.log(mul);
//mul.preview();
console.log(get1())