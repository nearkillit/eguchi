
var moneyPosition = [-30,-20,-10,0,10,20,30,40,50] ;
var moneyPositionFlag = [0,0,0,0,0,0,0,0,0] ;
var moneyPositionNumber = 9 ;
var moneyNumber = 0;
var moneyAnimeNormal = 'eguchi/money1.png';
var moneyAnimeMany = 'eguchi/money2.png';
var moneyManyProbab = 16 ;

function moneySet(){
    for(var i = 0; i < moneyPositionNumber; i += 1){
        var moneyInstance = document.createElement('img');
        moneyInstance.setAttribute('class', 'moneyInstanceWait');
        moneyInstance.setAttribute('src', moneyAnimeNormal);
        moneyInstance.setAttribute('style', 'left:' + moneyPosition[i] + 'px'); 
        filed.appendChild(moneyInstance);
    }

  }

  function moneyFall(){
    if(moneyNumber < 5){
        var moneyLamp = document.getElementsByClassName('moneyInstanceWait');
        var dispMoney = getRandomInt(9 - moneyNumber);

        moneyPositionFlag[dispMoney] = 1;
        moneyNumber += 1;
        
        //レアなお金
        if(getRandomInt(moneyManyProbab) == 0){
            moneyLamp[dispMoney].setAttribute('src', moneyAnimeMany);
        }
        else{
            moneyLamp[dispMoney].setAttribute('src', moneyAnimeNormal);
        }
        moneyLamp[dispMoney].setAttribute('onclick', 'moneyRemove(this)');
        moneyLamp[dispMoney].setAttribute('class', 'moneyInstance');
    }
  }

function moneyRemove(target){
    var getMoneyNumber = moneyUp ;
    //レアだったら10倍
    if(target.getAttribute('src') === moneyAnimeMany){
        getMoneyNumber = moneyUp * 10 ;
        console.log("レア");
    }

    target.setAttribute('onclick', '');
    target.setAttribute('class', 'moneyInstanceWait');
    moneyNumber -= 1;
    moneyGet(getMoneyNumber);
}
    
