// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
};

let userPizza = new Pizza(size, toppings)

Pizza.prototype.calculateTotalPrice = function () {
    const sizeValue = parseFloat(document.getElementById('sizeSelect').value);
    const toppingElements = document.getElementsByName('topping');
    let totalPrice = sizeValue;

    for (let topping of toppingElements) {
        if (topping.checked) {
            totalPrice += parseFloat(topping.value);
        }
    }

    return totalPrice;
};


//Ui Logic


