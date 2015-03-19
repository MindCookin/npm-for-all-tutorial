var util = require('util'),
    Transform = require('stream').Transform;

function Prepend (options) {
  if (!(this instanceof Prepend)) {
    return new Prepend(options);
  }

  Transform.call(this, options);
}
util.inherits(Prepend, Transform);

Prepend.prototype._transform = function (chunk, enc, cb) {
  cb(null, "Lorem fistrum por la gloria de " + chunk.toString());
}

process.stdin.pipe(Prepend()).pipe(process.stdout);
