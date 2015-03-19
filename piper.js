var util = require('util'),
    lorem = require('lorem-ipsum'),
    Transform = require('stream').Transform;

function Prepend (options) {

  if (!(this instanceof Prepend)) {
    return new Prepend(options);
  }

  Transform.call(this, options);
}

util.inherits(Prepend, Transform);

Prepend.prototype._transform = function (chunk, enc, cb) {
  cb(null, lorem({count: 2, units: 'words'}) + " " + chunk.toString());
};

process.stdin.pipe(Prepend()).pipe(process.stdout);
