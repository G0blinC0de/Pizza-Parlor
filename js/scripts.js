function Pizza(size, toppings) {
    this.toppings = toppings.join(", ");
    this.size = size;
};


// Leaving Comment here to describe ideas

// Each size should have an associated value instead of a function

// Selecting Small is a value of 4, Medium 6, Large 8

// Toppings have values with variations of 1.25, 1.50, 1.75

// priceCalculator should then simply add/sum these values and return them
// in the totalPrice span

// We then need a function that summarizes the order and asks for a nameInput
//for the order. So we need to convert Pizza() to a string, starting with size,
//which means size should be in the 0 position