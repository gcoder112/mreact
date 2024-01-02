// Factory Function
function pizzaFactory(pizzaSize) {
    const crust = 'original';
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake();