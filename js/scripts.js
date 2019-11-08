function OrderList() {
  this.pizzas = [],
  this.currentOrder = 0
}

OrderList.prototype.assignId = function(pizza) {
  this.pizzas[this.currentOrder].id = this.currentOrder;
  this.currentOrder += 1;
}

OrderList.prototype.addPizza = function(pizza) {
  pizza.setPrice();
  this.pizzas.push(pizza);
  this.assignId();
}

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.id,
  this.price = 10;
}

Pizza.prototype.setPrice = function() {
  this.price += (this.size * 3);
  this.toppings.forEach(function(topping) {
    if (topping) {
      console.log("Topping detected! That'll be a dollah!");
      this.price += 1;
    }
  })
}

var pizza = new Pizza(2,[false,true,true]);
var orders = new OrderList();
orders.addPizza(pizza);
