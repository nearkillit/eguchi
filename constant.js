//talk.js
// 点滅・設定開始（メッセージの内容と動きを設定してください）
var msg = '▼'; // メッセージ内容
var speed = 500; // 点滅のスピード（1に近いほど速く）
var flag = 0;
var getID = "dot";
var blikingTime ;
var textDispContent ;

//テキスト関連
//次のテキストへ行く為の変数
var textCount = 0;
var outputCount; 

//eguchi
//スクリーンサイズ
var screenX = document.documentElement.clientWidth;
var screenY = document.documentElement.clientHeight ;
//江口アニメ関連
var eguchiStandAnime = "Chick2.gif" ;
var eguchiWalkAnime = "Chick1.gif" ;
//マウスポインタの位置
var mouseX ;
var mouseY ;
var boxX;
var boxY;
var eguchiX ;
var eguchiY ;

//money
var money = 0;
var moneyUp = 1;

//DOM系
var eguchiDOM = document.getElementById("eguchi"); // アニメーションの対象
var boxDOM = document.getElementById("box"); // アニメーションの対象
var filedDOM = document.getElementById("filed");
