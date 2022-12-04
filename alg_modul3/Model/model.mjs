export default class Model {
  constructor() {
    this.arrLeft = [
      { rate: "RUB", checked: "checked" },
      { rate: "USD", checked: "" },
      { rate: "TRY", checked: "" },
      { rate: "AZN", checked: "" },
    ];
    this.arrRight = [
      { rate: "RUB", checked: "" },
      { rate: "USD", checked: "checked" },
      { rate: "TRY", checked: "" },
      { rate: "AZN", checked: "" },
    ];

    this.coefficient = null;

    this.fromCurrency = "RUB";
    this.toCurrency = "USD";

    this.fromSumm = 1;
    this.toSumm = null;
  }

  rateFromTo() {
    this.toSumm = this.coefficient * this.fromSumm;
  }

  rateToFrom() {
    this.fromSumm = (1 / this.coefficient) * this.toSumm;
  }
}
