//Webサイトからタイトルを表示するプログラム

//対象のurlの取得
var TARGET_URL = "http://kujirahand.com";

//casperjsのオブジェクトを作製
var casper = require('casper').create();

//指定のWebサイトを開く
casper.start(TARGET_URL,function(){
	//タイトルを表示する
	this.echo(casper.getTitle());
});

//処理を実行する
casper.run();