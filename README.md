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

Describe: Pizza();

Test: "It should return a Pizza object with user selected topping properties and size."
Code: 
const userPizza = new Pizza(["Mushrooms", "Fire Flower"], "Large");
Expected Output: 
Pizza {toppings: ["Mushrooms", "Fire Flower"], size: "Large" }

Describe: toppingSelect()

Test: "It should calculate total topping price and return as toppingTotal value."
Code: 
const userToppings = ["Mushrooms", "Pepperoni"]
toppingSelect(userToppings)
Expected Output: 
toppingTotal = 6.00

Describe: priceCalculator()

Test: "It should add/sum the total of each topping selection and size."
Code: 
priceCalculator(userPizza)
Expected Output: 
"Your Total: $12.50


## Setup/Installation Requirements

* Navigate to https://github.com/G0blinC0de/Pizza-Parlor
* _Clone Repository and Download_
* _Using Gitbash, navigate to cloned folder in directory_
* _Run in VS Code_
* _Right click on index.html, and select "Open with Live Server"_ 

Alternate Path
* _Navigate to URL_
* 



## Known Bugs

* None!


## License

[GNU v3](LICENSE) (c) _12/08/23_ _G0blinC0de_