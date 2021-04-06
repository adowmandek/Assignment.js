class  KioskCalc{
    constructor(fruit,quantity){
    this.fruit = "mango";
     this.quantity = 2;
 }

getTotalCost(){
return`${this.quantity} ${this.fruit} for KES ${this.quantity*15}`;
}
}
var kioskCalc =new KioskCalc("mango",2);
console.log(kioskCalc.getTotalCost());


