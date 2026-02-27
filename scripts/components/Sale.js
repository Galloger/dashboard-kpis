export default class Sale {
  constructor({ id, date, category, amount }) {
    this.id = id;
    this.date = date;
    this.category = category;
    this.amount = Number(amount);
  }
}