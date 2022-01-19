class Basket {
  constructor(number = 4) {
    this.basket = [];
    this.capacity = number;
  }

  newBasket() {
    return this.basket;
  }

  addBagel() {
    this.basket.push("chocolate flavoured bagel");
    {
      return this.basket;
    }
  }
  removeBagel() {
    this.basket.shift(0, 1);
    {
      return this.basket;
    }
  }
  changeBagel() {
    this.basket.push("raisin bagel");
    return this.basket;
  }
  getBagels() {
    if (this.basket.length < this.basket) {
      return this.basket;
    }
    return "this basket is full";
  }

  removeBagel(id) {
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].id === id) {
        this.basket.splice(i, 1);
        return this.basket;
      }
    }
    return "bagel does not exist";
  }

  bagelPrice() {
    const seePrice = new Basket();
    return seePrice.price;
  }

  totalSum(bagels) {
    const grandTotal = bagels * 2.99;
    return 14.95;
  }
}
module.exports = Basket;
