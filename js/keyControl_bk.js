
//キーが押されたとき
function keydown(e) {
    //キーが押し込まれたときの処理
    keycode = getKEYCODE(e);//キーコードの取得
    KeyState[keycode] = 1;  //キーコード番目の配列要素を1にする
}

//キーが離されたとき
function keyup(e) {
    //キーが持ち上げられたときの処理
    keycode2 = getKEYCODE(e);
    KeyState[keycode2] = 0;  //キーコード番目の配列要素を0に戻す
}

//キーコード取得
function getKEYCODE(e) {
    //キーコードを返す
    //ブラウザごとにキーコード取得関数が違うので分岐処理をする
    if (document.layers) {
        return e.which
    }
    else if (document.all) {
        return event.keyCode
    }
    else if (document.getElementById) {
        return e.keyCode;
    }
    else return null
}

//入力されたキーの処理を実行
function keyExecute() {

    //if (KeyState[75] == 1) {//Kキーが押されているとき

    //}
    //if (KeyState[76] == 1) {//Lキーが押されているとき

    //}
    //if (KeyState[74] == 1) {//Jキーが押されているとき

    //}

    if (move_interval == 0) {

        move_interval = INTERVAL_M;

        if (KeyState[38] == 1) {//上キーが押されているとき
            if (brock_Y > min_limit_Y)
                brock_Y--;
        }

        if (KeyState[40] == 1) {//下キーが押されているとき
            if (brock_Y < max_limit_Y)
                brock_Y++;
        }
        if (KeyState[39] == 1) {//右キーが押されているとき
            if (brock_X < max_limit_X)
                brock_X++;

        }
        if (KeyState[37] == 1) {//左キーが押されているとき
            if (brock_X > min_limit_X)
                brock_X--;
        }
    }
    
    if (KeyState[32] == 1 && spin_interval == 0) {//Spaceキーが押されているとき

            console.log(field[0][0] + field[0][1] + field[0][2] + field[0][3] + field[0][4]
                + field[0][5] + field[0][6] + field[0][7] + field[0][8] + field[0][9]
                + field[0][10] + field[0][11] + field[0][12] + field[0][13] + field[0][14]
                + field[0][15] + field[0][16] + field[0][17] + field[0][18] + field[0][19]
                + field[0][20]);

        spin_interval = INTERVAL_S;

        if (spin == 3) {
            spin = 0;
        } else {
            spin++;
        }
    }

    if(move_interval > 0){
        move_interval--;
    }

    if (spin_interval > 0) {
        spin_interval--;
    }
}
