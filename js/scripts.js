// Business Logic
function Pizza(size, selectedToppings) {
    this.size = size;
    this.selectedToppings = selectedToppings;
};



// takes values from size and topping selections and sums them into totalPrice span
Pizza.prototype.calculateTotalPrice = function () {
    let totalPrice = parseFloat(this.size);
    const toppingElements = this.selectedToppings;

    for (let topping of toppingElements) {
        if (topping.checked) {
            totalPrice += parseFloat(topping.value);
        }
    }

    return totalPrice;
};



//Ui Logic


// summarizes the order at the bottom for the user to review
function generateOrderSummary() {
    const size = document.getElementById('sizeSelect').options[document.getElementById('sizeSelect').selectedIndex].text;
    const toppingElements = document.getElementsByName('topping');
    const selectedToppings = [];

    for (let topping of toppingElements) {
        if (topping.checked) {
            selectedToppings.push(topping.parentNode.textContent.trim());
        }
    }

    return `Size: ${size}, Toppings: ${selectedToppings.join(", ")}`;
};


document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    const size = document.getElementById('sizeSelect').options[document.getElementById('sizeSelect').selectedIndex].value;
    const toppingElements = document.getElementsByName('topping');


    let userPizza = new Pizza(size, toppingElements);
    let totalPrice = userPizza.calculateTotalPrice();
    let orderSummary = generateOrderSummary();
    document.getElementById('nameOutput').textContent = nameInput;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    document.getElementById('orderSummary').textContent = orderSummary;
});




