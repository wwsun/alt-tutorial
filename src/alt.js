var Alt = require('alt');
var alt = new Alt(); // instantiates a Flux dispatcher
var chromeDebug = require('alt/utils/chromeDebug'); // just for debug

chromeDebug(alt);

module.exports = alt;
