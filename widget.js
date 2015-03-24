var domify = require('domify'),
    time = require('english-time');

function Widget (opts) {
    
    if (!(this instanceof Widget)) return new Widget(opts);

    this.element = domify('<div><input type="text" name="english-time" id="english-time"/> = <span class="seconds"></span>.</div>');

    this.element.querySelector('input').addEventListener('keypress', this.setSeconds.bind(this));
}

Widget.prototype.setSeconds = function (e) {

  console.log('keypress');

  var span = this.element.querySelector('.seconds'),
      input = this.element.querySelector('input'),
      seconds = !isNaN(time(input.value)) ? parseInt(time(input.value) / 1000, 10) : null;

  if (!!seconds) {
    span.textContent = seconds + " seconds";
  } else {
    span.textContent = "unknown seconds";
  }

};

Widget.prototype.appendTo = function (el) {
  el.appendChild(this.element);
};

module.exports = Widget;
