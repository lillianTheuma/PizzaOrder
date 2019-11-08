function OrderList() { // Constructor. This holds an array of Pizzas, and a currentOrder which is used to assign IDs to the pizzas as they are added.
  this.pizzas = [],
  this.currentOrder = 0
}

OrderList.prototype.assignId = function(pizza) { // This is called during the addPizza method to assign an ID to the pizza from the orderList.
  this.pizzas[this.currentOrder].id = this.currentOrder;
  this.currentOrder += 1;
}

OrderList.prototype.addPizza = function(pizza) { // This calls the setPrice method on the pizza, pushes the pizza to pizzas[] in orderlist, and assigns an id through OrderList.assignId
  pizza.setPrice();
  this.pizzas.push(pizza);
  this.assignId();
}

function Pizza(size, crust, sauce, cheese, toppings) { // Constructor. This is the data about a pizza. The size, an integer value (0=small, 1=med, 2=large, 3=xl), the crust, an int (0 = traditional, 1 = stuffed, 2 = gluen free), the sauce (0 = tomato, 1 = bbq, 2 = alfredo), the cheese (0 = Regular Cheese, 1 = Light Cheese, 2 = Extra Cheese, 3 = three cheese blend), the toppings, an array of booleans, true if the topping is selected, an ID, which is filled out later when the pizza is added to the orderList, and a price, which is set to a base of 10, and filled out with additional costs with Pizza.setPrice()
  this.size = size,
  this.crust = crust,
  this.sauce = sauce,
  this.cheese = cheese,
  this.toppings = toppings,
  this.id,
  this.price = 10;
}

Pizza.prototype.setPrice = function() { // Sets the price of a pizza based on the size of the pizza, and toppings selected.
  this.price += (this.size * 3);
  this.toppings.forEach(function(topping) {
    if (topping) {
      console.log("Topping detected! That'll be a dollah!");
      this.price += 1;
    }
  })
}
// Below are test cases for debugging, they will be deleted
var pizza = new Pizza(2, 1, 1, 1, [false,true,true]);
var orders = new OrderList();
orders.addPizza(pizza);
