    /*　
        気をつけること
        ・talktext　の「input」「output」のインデックスは2桁まで
        
    */
      
      //テキストを点滅
      function blinkingDisp(){
        if(flag == 0){
          // テキストフィールドにデータを渡す処理
          document.getElementById(getID).value = msg;
          flag = 1;
        }
        else{
          // テキストフィールドにデータを渡す処理
          document.getElementById(getID).value = "";
          flag = 0;
        }
        blikingTime = setTimeout("blinkingDisp()", speed);
      }
      
      
      //次のテキストへ
      function nextTextDisp(){
        //「input」状態だったら、何かが入力されるまで動かない
        if(!($("#inputtxt").prop('disabled')) && $("#inputtxt").val() == "" ){
        
        }else{
          //「input」に文字が入っていたらinputを更新する
          if(!($("#inputtxt").val() == "")){
            textContents[(textCount - 1)] = textContents[(textCount - 1)] + $("#inputtxt").val() ;
            moneyGet(moneyUp + 0);
          }
          
          //テキスト表示が終わるまで右下のポインタを非表示に
          document.getElementById(getID).value = "";
          clearTimeout(blikingTime);
          textDispContent = textContents[textCount];
        
          //次のテキストをチェック
          //「input」が含まれていたら入力フォームを表示する
          if(textDispContent.indexOf('input') != -1){
            nextTextDispInput();
            
          }//「output」が含まれていたら「input」データに入力された値を表示する
          else if(textDispContent.indexOf('output') != -1){
            //テキストエリア消す
            nextTextDispInputDelete();
            
            //「output」の数を数える
            outputCount = (textDispContent.match(/output/g) || []).length;
            
            //「output」がある限り繰り替えす
            for(var i = 0; i < outputCount; i = i + 1){
              nextTextDispOutput(); 
            }
            
          }else{
            //「input」が含まれていない場合はテキストエリア消す
            nextTextDispInputDelete();
          }       
        
          //次のテキストを表示
          $('#textcontent').text(textDispContent);
          //テキストを左から順に表示
          orderDisp();       
          //右下のポインタを点滅
          blinkingDisp();
          //次のテキストへ行く為の変数
          textCount = textCount + 1 ;
        }
      }
      
      function nextTextDispInput(){
        //入力フォームの変更
        $("#inputtxt").prop('disabled', false);
        $("#inputtxt").css('border', 'solid');
        //「input」を削除
        textDispContent = textDispContent.slice(0,textDispContent.indexOf('input') - textDispContent.length);
      }
      
      function nextTextDispOutput(){
        
        //「output」のインデックスを検索 ※2桁まで
        var outputPosition = textDispContent.indexOf("output");
        var outputIndexMath = textDispContent.substr(outputPosition + 6 ,2);
        var outputIndex = "output" + outputIndexMath ;
        var inputIndex = "input" + outputIndexMath ;
        
        //「textContents」内の「input〇〇」を検索
        var inputText = textContents.find(el => el.indexOf(inputIndex) != -1);
        var inputWord = inputText.substr(inputText.indexOf("input") + 7 );       
        
        //「output〇〇」を「inputWord」に変換
        textDispContent = textDispContent.replace(outputIndex,inputWord);

      }
      //テキストエリア削除
      function nextTextDispInputDelete(){
        $("#inputtxt").prop('disabled', true);
        $("#inputtxt").css('border', 'none');
        $("#inputtxt").val('');
      }
      
      
      //文字が左から順に現れる
      function orderDisp(){
        //h1要素を変数に代入する
        var h1 = $('h2');

        //h1要素の中の文字を一文字ずつ分割して配列(txt_array)に入れる
        var txt_array = h1.text().split('');

        //h1要素の中身を空にする
        $('h2').html('');

        //配列に入っている文字数分だけ処理を繰り返す
        $.each(txt_array, function(index, element) {

          //<span style="opacity: 0">配列に入っている1文字</span>という要素を作成する
          var new_element = $('<span>', { text: element, css:{ opacity: 0 }});
          //作成した要素をh1要素の末尾に追加していく。
          h1.append(new_element);

          //indexの数値 * ミリ秒だけ処理を遅延させる。
          //indexの数値は後方の文字にいくほど大きくなるので
          //それにミリ秒を乗じる事で後ろの文字ほど処理が遅延し文字が遅れて現れる
          new_element.delay(index * 50);

          //animateを使って3000ミリ秒（3秒）の時間をかけて
          //opacityを1（不透明）にしてジワッと文字を出現させる
          new_element.animate({opacity: 1}, 10);

        });
      }
