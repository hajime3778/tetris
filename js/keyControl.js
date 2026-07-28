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

        // if (KeyState[38] == 1) {//上キーが押されているとき
        //    brock_Y--;
        // }

        if (KeyState[40] == 1) {//下キーが押されているとき

            disp_score += 1;

            var side_flag = 0;

            for (var x = 0; x < FIELD_WIDTH; x++) {
                for (var y = 0; y < FIELD_HEIGHT; y++) {
                    hit_field[y][x] = stage[y][x];
                }
            }

            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {
                    if (block[y][x] != 0) {
                        if (hit_field[((y + 1) + brock_Y)][x + brock_X] != 0) {
                            side_flag++;
                        }
                    }
                }
            }

            if (side_flag == 0) {
                brock_Y++;
            } 
        }

        if (KeyState[39] == 1) {//右キーが押されているとき

            var side_flag = 0;

            for (var x = 0; x < FIELD_WIDTH; x++) {
                for (var y = 0; y < FIELD_HEIGHT; y++) {
                    hit_field[y][x] = stage[y][x];
                }
            }

            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {
                    if (block[y][x] != 0) {
                        if (hit_field[(y + brock_Y)][(x + 1) + brock_X] != 0) {
                            side_flag++;
                        }
                    }
                }
            }

            if (side_flag == 0) {
                brock_X++;
                }
        }
            
        if (KeyState[37] == 1) {//左キーが押されているとき

            var side_flag = 0;

            for (var x = 0; x < FIELD_WIDTH; x++) {
                for (var y = 0; y < FIELD_HEIGHT; y++) {
                    hit_field[y][x] = stage[y][x];
                }
            }

            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {
                    if (block[y][x] != 0) {
                        if (hit_field[(y + brock_Y)][(x - 1) + brock_X] != 0) {
                            side_flag++;
                        }
                    }
                }
            }

            if (side_flag == 0) {
                brock_X--;
            }         
        }
    }

    if (KeyState[32] == 1 && spin_interval == 0) {//Spaceキーが押されているとき

        spin_interval = INTERVAL_S;

        var spin_flag = 0;
        var after_spin = 0;

        if (spin < 3) {
            after_spin = spin + 1;
        } else {
            after_spin = 0;
        }


        var after_block = randam_teto(rand_teto, after_spin);


        for (var x = 0; x < FIELD_WIDTH; x++) {
            for (var y = 0; y < FIELD_HEIGHT; y++) {
                hit_field[y][x] = stage[y][x];
            }
        }

        for (var x = 0; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
                if (after_block[y][x] != 0) {
                    if (hit_field[(y + brock_Y)][x + brock_X] != 0) {
                        spin_flag++;
                    }
                }
            }
        }

        if (spin_flag == 0) {

            if (spin == 3) {
                spin = 0;
            } else {
                spin++;
            }
        }
    }

    if (move_interval > 0) {
        move_interval--;
    }

    if (spin_interval > 0) {
        spin_interval--;
    }
}
