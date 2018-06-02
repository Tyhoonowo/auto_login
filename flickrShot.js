
var casper = require('casper').create();

casper.start();

casper.viewport(1024, 800);

// casper.open('https://www.flickr.com/');

// casper.then(function(){
// 	this.fill("form[role='search']",{q:"ネコ"},true);
// });

casper.open('https://www.google.co.jp/');

casper.then(function(){
	this.fill('form',{'q':'cat'},true);
});

casper.then(function(){
	this.capture('flickr-cat.png',{
		top:0, left:0, width:1024, height:800
	});
});

casper.run();