//CasperJSでスクリーンショットをとる


//Casper オブジェクトを作製
var casper = require('casper').create();

//開始する
casper.start();

//ページを開く
casper.open('http://google.co.jp');

//その後，スクリーンショットを撮影
casper.then(function(){
	casper.capture("screenshot.png");
});

//実行
casper.run();