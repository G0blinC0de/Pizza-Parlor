// Business Logic
function Pizza(size, selectedToppings) {
    this.size = size;
    this.selectedToppings = selectedToppings;
};

let userPizza;

// takes values from size and topping selections and sums them into totalPrice span
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
    const size = document.getElementById('sizeSelect').options[document.getElementById('sizeSelect').selectedIndex].text;
    const toppingElements = document.getElementsByName('topping');
    const selectedToppings = Array.from(toppingElements).filter(topping => topping.checked)
        .map(topping => topping.parentNode.textContent.trim());


    userPizza = new Pizza(size, selectedToppings);
    let totalPrice = userPizza.calculateTotalPrice();
    let orderSummary = generateOrderSummary();
    document.getElementById('nameOutput').textContent = nameInput;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    document.getElementById('orderSummary').textContent = orderSummary;
});




