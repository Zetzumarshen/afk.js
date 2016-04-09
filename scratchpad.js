// ==UserScript==
// @name        afk
// @namespace   afk
// @description afk
// @include     http://l4cs.jpn.org/gikopoi/flash/gikopoi141_for/flash_gikopoi.html
// @version     1
// @grant       none
// ==/UserScript==
var worker = function(){
    DocumentGetElementFromName('gikopoi').JSCallBackSendMessage('afk');
    DocumentGetElementFromName('gikopoi').JSCallBackSendMessage('')  ;
    setTimeout(worker,3600*20*1000);
};
worker();