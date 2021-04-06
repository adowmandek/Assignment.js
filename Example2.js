class KioskCalc{
constructor(fruit,quantity){
this.fruit="orange";
this.quantity=2;
}
getTotalCost(){
    return `${this.quantity} ${this.fruit} for KES ${this.quantity*30};`
}
}

var kioskCalc =new KioskCalc("orange",2);
console.log(kioskCalc.getTotalCost());








