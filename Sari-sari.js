class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }
}

class Receipt {
  constructor(storeName) {
    this.storeName = storeName;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  subtotal() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.total();
    }
    return sum;
  }

  print() {
    const line = "=".repeat(36);
    console.log(line);
    console.log("  " + this.storeName);
    console.log(line);

    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      console.log(
        `${i + 1}. ${it.name} - ${it.quantity} x ${it.price.toFixed(2)} = ${it.total().toFixed(2)}`
      );
    }

    const subtotal = this.subtotal();
    const tax = subtotal * 0.12;
    const total = subtotal + tax;

    console.log("-".repeat(36));
    console.log("Subtotal: " + subtotal.toFixed(2));
    console.log("Tax (12%): " + tax.toFixed(2));
    console.log("TOTAL: " + total.toFixed(2));
    console.log(line);
  }
}
const receipt = new Receipt("Sari-Sari Mini Mart");
receipt.addItem(new Item("Rice (1kg)", 55.0, 2));
receipt.addItem(new Item("Egg (piece)", 9.5, 6));
receipt.addItem(new Item("Soy Sauce", 22.0, 1));
receipt.addItem(new Item("Instant Noodles", 14.0, 5));

receipt.print();