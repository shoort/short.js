var dom = {};


// DOM Function Shortcuts

// dom.query / dom.q - document.querySelector alias.
dom.query = dom.q = document.querySelector;


// Element Polyfills

// HTMLElement.click - HTMLElement.onclick binding alias.
// Allows additional arguments to be specified as arguments to be used.
HTMLElement.prototype.click = function (callback) {
  this.onclick = function () {
    callback.apply(this, arguments.slice(1));
  };
};

// HTMLElement.toggle - Toggles display: block on an element.
HTMLElement.prototype.toggle = function () {
  this.style.display = this.style.display === 'block' ? 'none' : 'block';
};

// HTMLElement.toggleFlex - Toggles display: flex on an element.
HTMLElement.prototype.toggleFlex = function () {
  this.style.display = this.style.display === 'flex' ? 'none' : 'flex';
};

// HTMLElement.toggleInline - Toggles display: inline on an element.
HTMLElement.prototype.toggleInline = function () {
  this.style.display = this.style.display === 'inline' ? 'none' : 'inline';
};

// HTMLElement.toggleInlineBlock - Toggles display: inline-block on an element.
HTMLElement.prototype.toggleInlineBlock = function () {
  this.style.display = this.style.display === 'inline-block' ? 'none' : 'inline-block';
};
