# _Papa Wario's Pizza Parlor_

#### By _**Red Williams**_

#### _Papa Wario's Pizza Parlor_

## Technologies Used

* _VS Code_
* _GitBash_
* _HTML_
* _CSS_
* _Javascript_
* _WinRar_

## Description

Pizza Parlor Website:

_Users can order a pizza with topping and see the resulting price based on toppings and size._

#### Tests

Describe: Pizza()

Test: "It should return a Pizza object with user selected topping properties and size"
Code: 
const userPizza = new Pizza(Large, ["Mushrooms", "Fire Flower"]);
Expected Output: 
Pizza {toppings: ["Mushrooms", "Fire Flower"], size: "Large" }

Describe: calculateTotalPrice()

Test: "It should sum the values of size and toppings for a total price."
Code: 
let userPizza = new Pizza("Small", ["Pepperoni, Mushroom"]);
userPizza.calculateTotalPrice();
Expected Output:
"Your Total Is: $8.00"


## Setup/Installation Requirements

* Navigate to https://github.com/G0blinC0de/Pizza-Parlor
* _Clone Repository and Download_
* _Using Gitbash, navigate to cloned folder in directory_
* _Run in VS Code_
* _Right click on index.html, and select "Open with Live Server"_ 

Alternate Path
* _Navigate to URL_
* https://g0blinc0de.github.io/Pizza-Parlor/



## Known Bugs

* None!


## License

[GNU v3](LICENSE) (c) _12/08/23_ _G0blinC0de_