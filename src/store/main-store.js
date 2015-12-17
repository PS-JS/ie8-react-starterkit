
import Justore from 'justore';
import axios from 'axios';

var mainStore = new Justore({
	posts:[]
},'Main-Store');

function fakeAjax(){
	console.log('start request');
	return new Promise(function(res,rej){
		var fakeData = require('./fakeNav.js');
		setTimeout(function(){res(fakeData)},600);
	});
}

mainStore.fetchPost = function(){
	fakeAjax()
		.then((posts)=>{
			mainStore.write('posts',posts)
		});
};

export default mainStore;