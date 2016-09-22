/*
short.js, a JS library by shoort: shoort.github.io
Copyright (C) 2016 shoort, licensed under the MIT License.
See https://shoort.github.io/short.js for information.
*/
var io = {};


// Consle Output Aliases

// io.log / io.l - alias for console.log
io.log = io.l = console.log;

// io.warn / io.w - alias for console.warn
io.warn = io.w = console.warn;

// io.error / io.e - alias for console.error
io.error = io.e = console.error;


// Debugging Output System

io._debug = false;

// io.debug / io.d - logging, but only when enabled
// call io.d(boolean) to enable/disable (default: disabled)
// will produce output when called with a string when enabled
io.debug = io.d = function () {
  if (typeof arguments[0] === 'boolean') io._debug = arguments[0];
  else if (io._debug) console.log.apply(console, arguments);
};


// Dialog I/O Aliases

// io.alert / io.a - alias for alert
io.alert = io.a = alert;

// io.prompt / io.p - alias for prompt
io.prompt = io.p = prompt;

// io.confirm / io.c - alias for confirm
io.confirm = io.c = confirm;


// Easy Web Request Functionality

// io.request / io.r - Quick XMLHttpRequest system.
// io.r(type, url, options, callback)
// io.r(url, options, callback)
// io.r(url, callback)
io.http = io.h = function (type, url, a, b) {
  var xhr = new XMLHttpRequest();

  // Finds out which argument means what.
  var type, url, options, callback;
  type = arguments.length === 4 ? arguments[0] : 'GET';
  url = arguments[arguments.length > 3 ? 1 : 0];
  options = arguments.length === 4 ? arguments[2] : {};
  callback = arguments[
    arguments.length === 2 ? 1 : (arguments.length === 3 ? 2 : 3)
  ];

  var options = b ? a : {};
  var callback = b ? b : a;

  // This event is triggered if an error occurs.
  var onerror = function () {
    callback({
      error: true,
      xhr: xhr
    });
  };

  // This event is triggered if the loading is successful.
  // Calls the callback with an object containing information about the
  // response.
  var reqdone = function () {

    // Parse the JSON value, but only if it is one.
    var json = null;
    try {
      json = JSON.parse(xhr.responseText);
    } catch (e) {}

    // Call the callback with data.
    callback({
      error: false,
      type: xhr.responseType,
      res: xhr.response,
      text: xhr.responseText,
      status: xhr.status,
      statusText: xhr.statusText,
      xml: xhr.responseXML,
      json: json
      xhr: xhr
    });
  };

  // Bind them events.
  xhr.addEventListener('load', reqdone);
  xhr.addEventListener('error', onerror);
  xhr.addEventListener('abort', onerror);
  xhr.open(type, url);

  // An easy option to quickly enable binary loading.
  if (options.binary) {
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.responseType = "arraybuffer";
  }

  // Overrides the MIME type.
  if (options.mime) xhr.overrideMimeType(options.mime);

  // Allows simple http auth.
  if (options.auth) xhr.setRequestHeader("Authorization",
    "Basic " + btoa(options.auth.user + ":" + options.auth.pass));

  // Sends, including POST data.
  xhr.send(options.data);
};
