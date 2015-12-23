var Bro = require('brototype');
var currentLang = window.lang || 'en';
var langMapping = {
	'en': require('../i18n/en.js'),
	'cn': require('../i18n/cn.js'),
	'tw': require('../i18n/tw.js')
};


export default function __(keyPath, lang) {
	var lang = lang || currentLang;

	var value = Bro(langMapping[lang]).iCanHaz(keyPath) || keyPath;

	return value;
}