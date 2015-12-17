require('es6-promise').polyfill();
require('console-polyfill');

if(!Object.assign){
	Object.assign = require('object-assign');
}
