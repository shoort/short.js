var io = {};


// Consle Output Aliases

// io.log / io.l - alias for console.log
io.log = io.l = function () {
  console.log.apply(console, arguments);
};

// io.warn / io.w - alias for console.warn
io.warn = io.w = function () {
  console.warn.apply(console, arguments);
};

// io.error / io.e - alias for console.error
io.error = io.e = function () {
  console.error.apply(console, arguments);
};


// Debugging Output System

io._debug = false;

// io.debug / io.d - logging, but only when enabled
// call io.d(boolean) to enable/disable (default: disabled)
// will produce output when called with a string when enabled
io.debug = io.d = function () {
  if (typeof arguments[0] === 'boolean') io._debug = arguments[0];
  else if (io._debug) console.log.apply(console, arguments);
};
