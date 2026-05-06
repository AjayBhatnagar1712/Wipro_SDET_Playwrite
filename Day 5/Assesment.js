// inheritance
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  greet() {
    super.greet();
    console.log(`I am studying ${this.course}`);
  }
}

const s1 = new Student("Anisha", "Computer Science");
s1.greet();

//encap
class ShoppingCart {
  #total = 0; // private variable

  addItem(price) {
    if (price > 0) {
      this.#total += price;
      console.log(`Item added: ₹${price}. Total: ₹${this.#total}`);
    } else {
      console.log("Price must be positive.");
    }
  }

  removeItem(price) {
    if (price > 0 && price <= this.#total) {
      this.#total -= price;
      console.log(`Item removed: ₹${price}. Total: ₹${this.#total}`);
    } else {
      console.log("Invalid amount.");
    }
  }

  getTotal() {
    return this.#total;
  }
}

const cart1 = new ShoppingCart();
cart1.addItem(500);
cart1.addItem(300);
cart1.removeItem(200);

console.log(`Final Total: ₹${cart1.getTotal()}`);

//poly
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(a => a.speak());

//abstraction
 class FoodOrder {
  #selectItems() {
    return "Items selected.";
  }

  #makePayment() {
    return "Payment successful.";
  }

  #prepareFood() {
    return "Food is being prepared.";
  }

  placeOrder() {
    const step1 = this.#selectItems();
    const step2 = this.#makePayment();
    const step3 = this.#prepareFood();

    return `${step1} ${step2} ${step3} Order placed successfully!`;
  }
}

const order = new FoodOrder();
console.log(order.placeOrder());