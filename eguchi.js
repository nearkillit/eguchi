// 江口が左右に
function animeSideMove(getDOM, time, endX, endY,reversel) {
   
    var animePosition = animePositionGet(getDOM);
    const startX = animePosition[0];
    const startY = animePosition[1];
    let progress = 0;

    // アップデートを実行する
    requestAnimationFrame(update);

    function update(timestamp) {
        // 進捗率を算出
        progress = timestamp / time;

        // 進捗率が100%を超えないよう丸める
        progress = Math.min(progress, 1);

        // 値を算出し反映する
        if (progress >= 0) {
            const resultX = startX + endX * progress; // X座標
            const resultY = startY + endY * progress; // Y座標
            getDOM.style.transform = `translate( ${resultX}px, ${resultY}px ) 
                                        scale( ${reversel}, 1 )`;
        }

        // 進捗が1未満の場合はアップデートを再実行する
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }            
}

function eguchiStand(){
    eguchiDOM.setAttribute('src', eguchiStandAnime); //立ちモーション            
}

function eguchiWalk(){
    eguchiDOM.setAttribute('src', eguchiWalkAnime); //歩きモーション            
}

//江口のマウスによる左右移動
function eguchiMouseMove(){

    document.addEventListener('mousemove', e => {
        
        mouseX = e.pageX ;
        mouseY = e.pageY ;

        // 要素の位置を取得
        var boxclientRect = boxDOM.getBoundingClientRect() ;
        var positionX = boxclientRect.left + window.pageXOffset ;
        var positionY = boxclientRect.top + window.pageYOffset ;

        // 要素内におけるクリック位置を計算
        boxX = mouseX - positionX ;
        boxY = mouseY - positionY ;

        //江口の座標を取得する 
        eguchiX = eguchiDOM.getBoundingClientRect().left - positionX ;
        eguchiY = eguchiDOM.getBoundingClientRect().top - positionY;

        //移動
        
        if(boxX < 400 && boxX > 300 && eguchiX < 360){
            eguchiWalk();
            animeSideMove(eguchiDOM,1000,3,0,-1);  
        }else if(boxX > 0 && boxX < 100 && eguchiX > 10){
            eguchiWalk();
            animeSideMove(eguchiDOM,1000,-3,0,1);
        }else{
            eguchiStand();
        }
    });
  }

  //DOMの座標取得
  function animePositionGet(getDOM){
    const style = getComputedStyle(getDOM); // 対象のスタイルを取得
    const reg = /matrix\((.*)\)/; // 不要な文字列を取り除くための正規表現
    const transform = style.transform.match(reg)[1].split(","); // transform を配列として取得
    const startX = parseFloat(transform[4]); // X座標の始点
    const startY = parseFloat(transform[5]); // Y座標の始点
    return [startX,startY];
  }
