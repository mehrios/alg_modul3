export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    this.queue();
    this.render();
    this.createButtons();
    this.leftInput();
    this.rightInput();
  }

  async queue() {
    await this.convert();
    this.render();
  }

  async getCurrency(currencyFrom, currencyIn) {
    const response = await fetch(
      `https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyIn}`
    );
    const data = await response.json();

    this.model.coefficient = data.result;
  }

  async convert() {
    await this.getCurrency(this.model.fromCurrency, this.model.toCurrency);
  }

  leftInput() {
    this.view.leftInput.addEventListener("keyup", (e) => {
      this.view.leftInput.classList.add("active");
      this.model.fromSumm = e.target.value;
      this.render();
    });
  }

  rightInput() {
    this.view.rightInput.addEventListener("keyup", (e) => {
      this.view.leftInput.classList.remove("active");
      this.model.toSumm = e.target.value;
      this.render();
    });
  }

  createButtons() {
    this.model.arrLeft.forEach((el, index) => {
      const input = this.view.createInput({
        type: "radio",
        name: "currency",
        class: "checked-inputs",
        id: index,
        checked: el.checked,
      });

      const label = this.view.createLabel({
        text: el.rate,
        class: "checked-labels",
        for: index,
      });

      input.addEventListener("click", () => {
        this.model.fromCurrency = label.innerText;
        this.queue();
      });

      this.view.leftButtons.append(input);
      this.view.leftButtons.append(label);
    });

    this.model.arrRight.forEach((el, index) => {
      const input = this.view.createInput({
        type: "radio",
        name: "currency-2",
        class: "checked-inputs",
        id: `input-${index}`,
        checked: el.checked,
      });

      const label = this.view.createLabel({
        text: el.rate,
        class: "checked-labels",
        for: `input-${index}`,
      });

      input.addEventListener("click", () => {
        this.model.toCurrency = label.innerText;
        this.queue();
      });

      this.view.rightButtons.append(input);
      this.view.rightButtons.append(label);
    });
  }

  render() {
    if (this.view.leftInput.className !== "converters-input") {
      this.model.rateFromTo();
      this.view.rightInput.value = this.model.toSumm;
    } else {
      this.model.rateToFrom();
      this.view.leftInput.value = this.model.fromSumm;
    }

    this.view.rightRate.innerText = `1 ${this.model.toCurrency} = ${
      Math.floor((1 / this.model.coefficient) * 10 ** 6) / 10 ** 6
    } ${this.model.fromCurrency}`;
    this.view.leftRate.innerText = `1 ${this.model.fromCurrency} = ${this.model.coefficient} ${this.model.toCurrency}`;
  }
}
