class Select {
  constructor(_elem, _className) {
    this.elem = _elem;
    this.className = _className;
  }

  class() {
    if (this.elem.className.indexOf(this.className) !== -1) {
      this.elem.className = this.elem.className.replace(this.className, '');
    } else {
      this.elem.className = `${this.elem.className.replace(/\s+/g, ' ')} ${this.className}`;
    }

    return this.elem;
  }
}

module.exports.Select = Select;
