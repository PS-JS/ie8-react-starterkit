var gulp = require('gulp');
var po2json = require('po2json');

var fs = require('fs');

gulp.task('po2json', function() {

	var poFiles = ['en','cn','tw'];

	var genJson = function(lang){
		return new Promise(function(res,rej){
			po2json.parseFile(`./src/i18n/${lang}.po`, function (err, jsonData) {
				if(err){rej(err);return}
				res({
					lang,
					jsonData
				});
			});
		})
	};
	function writeJson(d){
		return new Promise(function(res,rej){
			fs.writeFile(`./src/i18n/${d.lang}.json`, JSON.stringify(d.jsonData, null, 4), function(err) {
				if(err) {
					rej(err)
				} else {
					res();
				}
			});

		});

	}

	var promiseArr = poFiles.map((lang)=>genJson(lang).then(writeJson));
	return Promise.all(promiseArr)

});