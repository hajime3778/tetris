
var INTERVAL_M = 3;
var INTERVAL_S = 10;

var brock_X = 4;
var brock_Y = 1;

var spinflg = 0;

var max_limit_X = 10;
var max_limit_Y = 20;

var min_limit_X = 1;
var min_limit_Y = 1;

var move_interval = 20;

var spin_interval = 20;
var spin = 0;


var block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var stage = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
];

var field = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



//キー状態を保持する配列
KeyState = new Array(244);

//イベントリスナ
document.onkeydown = keydown;
document.onkeyup = keyup;


function waku() {

    /*---------キャンバスを全体に黒を描画----------*/
    ctx.fillStyle = "rgb(8,8,12)";
    ctx.fillRect(0, 0, 240, 440);
    /*---------------------------------------------*/

    for (var i = 0; i < 12; i++) {
        ctx.fillStyle = 'rgb(166,82,63)';
        ctx.fillRect((i * 20), 400, 20, 20);

        ctx.beginPath();
        ctx.rect((i * 20), 400, 20, 20);
        ctx.strokeStyle = 'rgb(255,255,255)';

        ctx.closePath();

        ctx.stroke();

        if (i == 0 || i == 11) {
            for (var j = 0; j < 21; j++) {
                ctx.fillStyle = 'rgb(166,82,63)';
                ctx.fillRect((i * 20), (j * 20), 20, 20);

                ctx.beginPath();       //パス指定の開始
                ctx.rect((i * 20), (j * 20), 20, 20); //色を指定する
                ctx.strokeStyle = 'rgb(255,255,255)'; //枠線

                ctx.closePath();       //パスを閉じる

                ctx.stroke();
            }
        }
    }
}

function init() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        //33msごとにボールの描画を実行
        setInterval(main, 20);
    }
}

function main() {

    


    //FIELD_SET();

    //waku();
    //keyExecute();

    //teto_I(brock_X, brock_Y);
    //teto_I(4, 10);
    //teto_O(brock_X, brock_Y);
    //teto_S(brock_X, brock_Y);
    //teto_Z(brock_X, brock_Y);
    //teto_J(brock_X, brock_Y);
    //teto_L(brock_X, brock_Y);
    //teto_T(brock_X, brock_Y);


    /*---------キャンバスを全体に黒を描画----------*/
    ctx.fillStyle = "rgb(8,8,12)";
    ctx.fillRect(0, 0, 240, 440);
    /*---------------------------------------------*/


    block = [
       [0, 0, 0, 0],
       [0, 1, 1, 0],
       [0, 1, 1, 0],
       [0, 0, 0, 0],
    ];

    //for (var x = 0; x < 4; x++) {
    //    for (var y = 0; y < 4; y++) {
    //        field[y][x] = block[y][x];
    //    }
    //}

    for (var x = 0; x < 12; x++) {
        for (var y = 0; y < 21; y++) {
            field[y][x] += stage[y][x];
        }
    }

    for (var x = 0; x < 12; x++) {
        for (var y = 0; y < 21; y++) {
            switch (field[y][x]) {

                case 9:
                    ctx.fillStyle = 'rgb(166,82,63)';
                    ctx.fillRect((x * 20), (y * 20), 20, 20);

                    ctx.beginPath();
                    ctx.rect((x * 20), (y * 20), 20, 20);
                    ctx.strokeStyle = 'rgb(255,255,255)';

                    ctx.closePath();

                    ctx.stroke();
                    break;

                //case 1:
                //    ctx.fillStyle = 'rgb(255,255,0)';
                //    ctx.fillRect((x * 20), (y * 20), 20, 20);

                //    ctx.beginPath();
                //    ctx.rect((x * 20), (y * 20), 20, 20);
                //    ctx.strokeStyle = 'rgb(255,255,255)';

                //    ctx.closePath();

                //    ctx.stroke();
                //    break;
            }
        }
    }
}