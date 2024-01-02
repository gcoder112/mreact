// Javascript Classes
class Pizza {
    crust = "orginal";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
    }
}

const myPizza = new Pizza('medium');
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.getCrust());
console.log(myPizza.#sauce);