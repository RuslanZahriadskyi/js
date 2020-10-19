class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
    return this._value;
  }

  prepend(str) {
    this._value = str + this._value;
    return this._value;
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
    return this._value;
  }
}

console.log(typeof StringBuilder);

const builder = new StringBuilder('.');

console.log(builder.value);

// console.log(builder.getValue())

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
