/*for (let i=0; i<100; i++){
    if(i===0){
        continue;
    }
    if (i%2===0){
    document.write(i);
    document.write('<br>');
    console.log(i);
    }
}
let a=parseFloat(prompt('Enter a'));
while (isNaN(a)){
    alert('Pls enter a number');
    a= parseFloat(prompt('Enter a'));
}
let a;
do{
    a=parseFloat(prompt('Enter a'));
}while(isNaN(a));*/
let product = [];
product.push('Tesla Model X');
product.push('Tesla Model S');
product.push('Tesla Model 3');
product.push('BMW');
product.push('FIAT');
//for(let i=0; i<product.length; i++){
  //  console.log(product[i]);
//}
//product.forEach(function(e1){
  //  console.log(e1)
//});
//product.forEach(e1=>console.log(e1));


function run() {
    console.log(`Car ${this.make} ${this.model} is running`);
}

let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 100000;
teslaX.run = run;

teslaX.run();

let chevyCamaro = {
    make: 'Chevrolet',
    model: 'Camaro',
    price: 50000,
    run: run
};
chevyCamaro.run();

function Car(make, model, price) {
    this.make=make;
    this.model=model;
    this.price=price;
    this.run=run;
}

let hummer= new Car("GM", "H1", 150000);
hummer.run();
let hummer2= Object.create(hummer);
hummer2.model = 'Hummer 2';
hummer2.run();

class SuperCar {
    constructor(make, model, price) {
    this.make=make;
    this.model=model;
    this.price=price;
    this.run=run;
}
run(){
     console.log(`Car ${this.make} ${this.model} is running`);
}
}
let ferrari = new SuperCar('Ferrari', "F430", 200000);
ferrari.run();