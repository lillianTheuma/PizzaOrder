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

function Pizza(size, toppings) { // Constructor. This is the data about a pizza. The size, an integer value (0=small, 1=med, 2=large, 3=xl), the toppings, an array of booleans, true if the topping is selected, an ID, which is filled out later when the pizza is added to the orderList, and a price, which is set to a base of 10, and filled out with additional costs with Pizza.setPrice()
  this.size = size,
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
var pizza = new Pizza(2,[false,true,true]);
var orders = new OrderList();
orders.addPizza(pizza);
