export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }

  init() {
    this.createElements();
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);

    return button;
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.class && (div.className = props.class);
    props.id && (div.id = props.id);

    return div;
  }

  createLabel(props) {
    const label = document.createElement("label");

    props.text && (label.innerText = props.text);
    props.class && (label.className = props.class);
    props.id === 0 && (label.id = props.id);
    props.id && (label.id = props.id);
    props.for === 0 && (label.htmlFor = props.for);
    props.for && (label.htmlFor = props.for);

    return label;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.value = props.text);
    props.class && (input.className = props.class);
    props.name && (input.name = props.name);
    props.id === 0 && (input.id = props.id);
    props.id && (input.id = props.id);
    props.type && (input.type = props.type);
    props.checked && input.setAttribute("checked", "checked");

    return input;
  }

  createElements() {
    this.header = this.createDiv({
      class: "header",
    });

    this.container = this.createDiv({
      class: "container",
    });

    this.converterTitle = this.createDiv({
      text: "Конвертер валют онлайн",
      class: "converter-title",
    });

    this.converters = this.createDiv({
      class: "converters",
    });

    this.leftConverter = this.createDiv({
      id: "left-converter",
      class: "converter-box",
    });

    this.rightConverter = this.createDiv({
      id: "right-converter",
      class: "converter-box",
    });

    this.leftButtons = this.createDiv({
      id: "leftButtons",
      class: "buttons-box",
    });

    this.rightButtons = this.createDiv({
      id: "rightButtons",
      class: "buttons-box",
    });

    this.leftText = this.createDiv({
      class: "left-text",
      text: "У меня есть",
    });

    this.rightText = this.createDiv({
      class: "right-text",
      text: "Хочу приобрести",
    });

    this.leftInput = this.createInput({
      text: "1",
      class: "converters-input active",
      id: "left-input",
      type: "number",
    });

    this.rightInput = this.createInput({
      class: "converters-input",
      id: "right-input",
      type: "number",
    });

    this.leftRate = this.createDiv({
      class: "rate",
      id: "left-rate",
    });

    this.rightRate = this.createDiv({
      class: "rate",
      id: "right-rate",
    });

    this.inputRateWrapperLeft = this.createDiv({
      class: "inputRate-wrapper",
    });

    this.inputRateWrapperRight = this.createDiv({
      class: "inputRate-wrapper",
    });

    this.img = this.createDiv({
      class: "bank-img",
    });

    this.paragraphs = this.createDiv({
      class: "paragraphs",
    });

    this.pBank = this.createDiv({
      text: "БАНК",
      class: "paragraph",
    });

    this.pBusiness = this.createDiv({
      text: "БИЗНЕС",
      class: "paragraph",
    });

    this.pInvestment = this.createDiv({
      text: "ИНВЕСТИЦИИ",
      class: "paragraph",
    });

    this.pInsurance = this.createDiv({
      text: "СТРАХОВАНИЕ",
      class: "paragraph",
    });

    this.pMobile = this.createDiv({
      text: "МОБАЙЛ",
      class: "paragraph",
    });

    this.pTraveling = this.createDiv({
      text: "ПУТЕШЕСТВИЯ",
      class: "paragraph",
    });

    this.pEntertainment = this.createDiv({
      text: "РАЗВЛЕЧЕНИЯ",
      class: "paragraph",
    });

    this.logInButton = this.createButton({
      text: "Войти",
      class: "log-in",
    });

    this.root.append(this.header);
    this.root.append(this.container);

    this.header.append(this.img);
    this.header.append(this.paragraphs);
    this.header.append(this.logInButton);

    this.paragraphs.append(this.pBank);
    this.paragraphs.append(this.pBusiness);
    this.paragraphs.append(this.pInvestment);
    this.paragraphs.append(this.pInsurance);
    this.paragraphs.append(this.pMobile);
    this.paragraphs.append(this.pTraveling);
    this.paragraphs.append(this.pEntertainment);

    this.container.append(this.converterTitle);
    this.container.append(this.converters);

    this.converters.append(this.leftConverter);
    this.converters.append(this.rightConverter);

    this.inputRateWrapperLeft.append(this.leftInput);
    this.inputRateWrapperLeft.append(this.leftRate);

    this.inputRateWrapperRight.append(this.rightInput);
    this.inputRateWrapperRight.append(this.rightRate);

    this.leftConverter.append(this.leftText);
    this.leftConverter.append(this.leftButtons);
    this.leftConverter.append(this.inputRateWrapperLeft);

    this.rightConverter.append(this.rightText);
    this.rightConverter.append(this.rightButtons);
    this.rightConverter.append(this.inputRateWrapperRight);
  }
}
