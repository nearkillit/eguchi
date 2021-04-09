//ランダム乱数
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//お金獲得
function moneyGet(moneyUpNumber){
    document.querySelector("#moneycount").innerText = "+" + moneyUpNumber;
    document.querySelector("#moneycount").className = "";
    window.requestAnimationFrame(function(time) {
        window.requestAnimationFrame(function(time) {
            document.querySelector("#moneycount").className = "pp";
        });
    });
    money = money + moneyUpNumber;
    $('#money').text(money);
}

/**
* @function HTMLElement.prototype.hold　要素の長押しを検知し、何かする
*/
if(!HTMLElement.prototype.hold){
    Object.defineProperty(HTMLElement.prototype, 'hold', {
        configurable: true,
        enumerable: false,
        writable: true,
        /**
        * @function callback　長押し判定後に行われる何かの処理
        * @int holdtime 長押し判定時間のしきい値(ミリ秒)
        */
        value: function(callback,holdtime) {
            this.addEventListener('mousedown', function (event) {
                mouseX = event.pageX ;
                mouseY = event.pageY ;
                event.preventDefault();
                callback(); //event.preventDefaultでクリック等のイベントが解除されてしまうので、要素初タッチ時にも処理を行うようcallbackを設置しておく。
                let time = 0;
                const interval = setInterval(function(){
                  time += 100;
                  if(time > holdtime){
                    callback();
                  }
                },100);
                this.addEventListener('mouseup', function (event) {
                  event.preventDefault();
                  clearInterval(interval);
                });
            });
        }
    });
}
