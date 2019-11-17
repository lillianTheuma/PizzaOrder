# PizzaOrder - Lillian Theuma
This portfolio is presented as a solution to the project guidelines described in

# TABLE OF CONTENTS
```
- GITHUB repository
- Requirements
- Setup
  - Setup with GIT
  - Setup without GIT
- Usage
- Documentation
  - Classes
    -Pizza
    -OrderList
- Credits
- License Information
```
## Repository
* This project can be found at https://github.com/lillianTheuma/Portfolio

## Requirements
* A FTP server
OR
* A local computer
AND
* Internet connection

## Setup with GIT
* Open terminal, and navigate to a directory of your choice, then use the following command to clone files to local machine.

```
git clone https://github.com/lillianTheuma/PizzaOrder
```

## Setup without GIT
* Navigate to https://github.com/lillianTheuma/PizzaOrder on a web browser
* Find the bottom labeled "clone or download", and click it to open a drop-down menu
* Click Download Now on the drop-down menu
* Extract contents of .zip folder into directory of your choice

# Usage
If using on a local machine, open (./PizzaOrder/index.html)
OR
If using on an FTP, direct users to (./PizzaOrder/index.html)

Navigate between project files with the drop-down menu on the upper navbar. Each project is labeled according to their week.

# Documentation

Stores information about a Pizza:
1. Size (string)
2. Crust Type (string)
3. Sauce (string)
4. Cheese (string)
5. Toppings (array of bools)
6. id
7. price

Builds Pizza objects from a Form

Adds Pizza objects to a PizzaList object in an array.

Displays Pizzas through Jquery in a dropdown Menu.

## Classes

### PIZZA
  Attributes:
  this.size
  this.crust
  this.sauce
  this.cheese
  this.topping
  this.id
  this.price

  Methods:

  setPrice() {}

    Uses pizza attributes and determines the price

### ORDERLIST
  this.pizzas
  this.currentOrder
  this.totalPrice

  Methods:
  assignId() {}
    assigns an ID to a pizza object

  addPizza() {}
    Adds a pizza to the array this.pizzas, and calls this.setprice on the pizza.

# License
* This repository is offered under the MIT license
@ Lillian Theuma 2019
See LICENSE file for additional details regarding license.
