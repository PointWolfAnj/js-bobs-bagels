const Basket = require("../src/basket.js");
const RAISIN = "raisin bagel";
const CHOCOLATE = "chocolate flavoured bagel";

describe("basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  //Part 1:
  //getting a new basket
  it("get a new basket", () => {
    // set up
    const expected = [];
    // execute
    let result = basket.newBasket();
    // verify
    expect(result).toEqual(expected);
  });
  //adding bagel to basket
  it("add a bagel to basket", () => {
    // set up
    const expected = [CHOCOLATE];
    // execute
    let result = basket.addBagel();
    // verify
    expect(result).toEqual(expected);
  });
  //removing bagel from basket
  it("remove a bagel from basket", () => {
    // set up
    const expected = [];
    basket.addBagel();
    // execute
    let result = basket.removeBagel();
    // verify
    expect(result).toEqual(expected);
  });
  //Changing bagel from basket
  it("add another bagel to basket", () => {
    // set up
    const expected = [RAISIN];
    // execute
    let result = basket.changeBagel();
    // verify
    expect(result).toEqual(expected);
  });
  //part two:
  it("when basket is full", () => {
    // set up
    const expected = "this basket is full";
    basket.addBagel(CHOCOLATE);
    // execute
    let result = basket.getBagels();
    // verify
    expect(result).toEqual(expected);
  });
  //creating a basket with a larger capacity
  it("create baskets with larger capacity", () => {
    const expected = true;
    // set up
    const largeBasket = new Basket(5);
    // execute
    let result = largeBasket.capacity > basket.capacity;
    // verify
    expect(result).toEqual(expected);
  });
  //try to remove an item that doesn't exist in my basket
  it("cannot remove an item that does not exist in my basket", () => {
    // set up
    const expected = "bagel does not exist";

    // execute
    let result = basket.removeBagel(1);
    // verify
    expect(result).toEqual(expected);
  });

  //see the price of each item before I add it to my basket
  it("see the price of each item before I add it to my basket", () => {
    const newBagel = new Basket();
    // set up
    const expected = newBagel.price;
    // execute
    let result = basket.bagelPrice();
    // verify
    expect(result).toEqual(expected);
  });

  //I'd like to know the total sum of the bagels in my basket
  it("the total sum of the bagels(x5) in my basket", () => {
    // set up
    const expected = 14.95;
    // execute
    let result = basket.totalSum(5);
    // verify
    expect(result).toEqual(expected);
  });
});
