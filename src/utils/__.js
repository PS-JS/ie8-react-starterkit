var Bro = require('brototype');
import mainStore from 'mainStore';

var langMapping = {
	'en': require('../i18n/en.js'),
	'cn': require('../i18n/cn.js'),
	'tw': require('../i18n/tw.js')
};


export default function __(keyPath, project = 'pnView', lang) {

	var useLang = lang || mainStore.read('curLang');
	console.log(mainStore.read('curLang'));
	var value = Bro(langMapping).iCanHaz(`${useLang}.${project}.${keyPath}`) || Bro(langMapping).iCanHaz(`${useLang}.g.${keyPath}`) || keyPath;

	return value;
}

export function lang(lang){
	var langs = ['en','cn','tw'];
	if(langs.indexOf(lang)>=0){
		mainStore.write('curLang',lang);
	}

	return mainStore.read('curLang')
}