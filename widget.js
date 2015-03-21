var domify = require('domify'),
    time = require('english-time');

function Widget (opts) {
    
    if (!(this instanceof Widget)) return new Widget(opts);

    this.element = domify('<div><input type="text" name="english-time" id="english-time"/> = <span class="seconds"></span> seconds.</div>');

    this.element.querySelector('input').addEventListener('change', this.setSeconds.bind(this));
}

Widget.prototype.setSeconds = function (e) {

  var span = this.element.querySelector('.seconds'),
      input = this.element.querySelector('input'),
      seconds = parseInt(time(input.value) / 1000, 10);

  span.textContent = seconds;
};

Widget.prototype.appendTo = function (el) {
  el.appendChild(this.element);
};

module.exports = Widget;
