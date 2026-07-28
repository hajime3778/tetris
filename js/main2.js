var INTERVAL_M = 15;
var INTERVAL_S = 50;

var INTERVAL_DELETE = 15;

//var INTERVAL_DOWN = 10;
//var INTERVAL_FREEZE = 1;

var INTERVAL_DOWN = 150;
var INTERVAL_FREEZE = 0;

var FIELD_HEIGHT = 23;
var FIELD_WIDTH = 12;

var DELETE_HEIGHT = 20;
var DELETE_WIDTH = 10;

var freeze_flg = true;

var brock_X = 4;
var brock_Y = 0;

var down_interval = INTERVAL_DOWN;

var del_interval = INTERVAL_DELETE;

var del_eff_flg = false;

var freeze_interval = INTERVAL_FREEZE;

var move_interval = INTERVAL_M;

var spin_interval = INTERVAL_S;
var spin = 0;

var rand_teto = 0;

var next_rand_teto = Math.floor(Math.random() * 7) + 1;;

var _main;

var _mode = 0;

var GG_flg = false;

var score = 0;

var nextblock = [
    [9, 9, 9, 9, 9],
    [0, 0, 0, 0, 9],
    [0, 0, 0, 0, 9],
    [0, 0, 0, 0, 9],
    [0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9]
];

var pre_block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

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
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var hit_field = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var del_cnt = 0;

var disp_score = 0;

var rgb = "rgb(8,8,12)";

var level = "LEVEL:1";

//キー状態を保持する配列
KeyState = new Array(244);

//イベントリスナ
document.onkeydown = keydown;
document.onkeyup = keyup;

function init() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        //33msごとにボールの描画を実行
        //_main = setInterval(main, 5);

        mode();
    }
}

function score_disp() {
    ctx.strokeStyle = "white";
    ctx.font = "20px 'ＭＳ ゴシック'";
    ctx.strokeText("スコア", 250, 150, 440);

    switch (score) {
        case 1:
            disp_score += 100;
            break;

        case 2:
            disp_score += 300;
            break;

        case 3:
            disp_score += 500;
            break;

        case 4:
            disp_score += 1000;
            break;
    }
    score = 0;

    ctx.strokeStyle = "white";
    ctx.font = "20px 'ＭＳ ゴシック'";
    ctx.strokeText(level, 250, 180, 440);

    ctx.strokeStyle = "white";
    ctx.font = "20px 'ＭＳ ゴシック'";
    ctx.strokeText(disp_score + "pt", 250, 210, 440);
}

function make_wall() {
    for (var x = 0; x < FIELD_WIDTH; x++) {
        for (var y = 0; y < FIELD_HEIGHT; y++) {
            field[y][x] += stage[y][x];
        }
    }
}

function make_block() {
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            field[brock_Y + y][brock_X + x] = block[y][x];
        }
    }
}

function Colors(x,y) {
    switch (field[y][x]) {

        case 9:
            ctx.fillStyle = 'rgb(166,82,63)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 1:
            ctx.fillStyle = 'rgb(255,255,0)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 2:
            ctx.fillStyle = 'rgb(255,100,100)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 3:
            ctx.fillStyle = 'rgb(213,132,224)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 4:
            ctx.fillStyle = 'rgb(100,255,100)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 5:
            ctx.fillStyle = 'rgb(100,100,255)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 6:
            ctx.fillStyle = 'rgb(255,183,76)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 7:
            ctx.fillStyle = 'rgb(157,204,224)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 8:
            ctx.fillStyle = 'rgb(128,128,128)';
            ctx.fillRect((x * 20), ((y - 1) * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x * 20), ((y - 1) * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;
    }
}

function Colors_Next(x, y) {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            nextblock[i + 1][j] = pre_block[i][j];
        }
    }
    
    switch (nextblock[y][x]) {

        case 9:
            ctx.fillStyle = 'rgb(166,82,63)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 1:
            ctx.fillStyle = 'rgb(255,255,0)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 2:
            ctx.fillStyle = 'rgb(255,100,100)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 3:
            ctx.fillStyle = 'rgb(213,132,224)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 4:
            ctx.fillStyle = 'rgb(100,255,100)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 5:
            ctx.fillStyle = 'rgb(100,100,255)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 6:
            ctx.fillStyle = 'rgb(255,183,76)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 7:
            ctx.fillStyle = 'rgb(157,204,224)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;

        case 8:
            ctx.fillStyle = 'rgb(128,128,128)';
            ctx.fillRect((x + 12) * 20, (y * 20), 20, 20);

            ctx.beginPath();
            ctx.rect((x + 12) * 20, (y * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            break;
    }
}

function paint() {

    for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 6; y++) {

            Colors_Next(x, y);
        }
    }

    for (var x = 0; x < 12; x++) {
        for (var y = 1; y < 22; y++) {
            Colors(x, y);          
        }
    }
}

function arr_init() {

    block = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    //stage = [
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    //    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    //];

    field = [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    hit_field = [
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];


}

function fall_block() {
    if (down_interval == 0) {
        var down_flag = 0;

        for (var x = 0; x < FIELD_WIDTH; x++) {
            for (var y = 0; y < FIELD_HEIGHT; y++) {
                hit_field[y][x] = stage[y][x];
            }
        }

        for (var x = 0; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
                if (block[y][x] != 0) {
                    if (hit_field[((y + 1) + brock_Y)][x + brock_X]) {
                        down_flag++;
                    }
                }
            }
        }

        if (down_flag == 0) {
            brock_Y++;
        } else {
            if (freeze_interval == 0) {
                for (var x = 0; x < FIELD_WIDTH; x++) {
                    for (var y = 0; y < FIELD_HEIGHT; y++) {
                        stage[y][x] = field[y][x];
                    }

                    brock_X = 4;
                    brock_Y = 0;

                    freeze_interval = INTERVAL_FREEZE;
                }
                freeze_flg = true;
                spin = 0;
            } else {
                freeze_interval--;
            }
        }
        down_interval = INTERVAL_DOWN;
    } else {
        down_interval--;
    }
}

function del_block() {

    var del_flg = 0;
    var del_list = new Array(4);
    var tsume_list = new Array;
    //var del_cnt = 0;
    var tsume_cnt = 20;

    for (var y = 20; y >= 1; y--) {
        for (var x = 1; x <= 10; x++) {
            if (stage[y][x] == 0) {
                del_flg++;
            }
        }

        if (del_flg == 0) {
            del_list[del_cnt] = y;
            del_cnt++;
        }
        else {
            tsume_list[tsume_cnt] = y;
            tsume_cnt--;
            del_flg = 0;
        }
    }
    
    if (del_cnt > 0) {

        if (del_interval > 0) {

            for (var i = 0; i < del_cnt; i++) {

                for (var j = 1; j <= 10; j++) {
                    stage[del_list[i]][j] = 8;
                }
            }
        }
        else {
            for (var i = 0; i < del_cnt; i++) {

                for (var j = 1; j <= 10; j++) {
                    stage[del_list[i]][j] = 0;
                }
            }

            for (var k = 20; k > tsume_cnt; k--) {
                for (var l = 1; l <= 10; l++) {
                    stage[k][l] = stage[tsume_list[k]][l];
                }
            }
            score += del_cnt;
            del_interval = INTERVAL_DELETE;
        }       
        del_interval--;

        del_eff_flg = true;
    }     
}

function gameover() {

    for (var x = 0; x < FIELD_WIDTH; x++) {
        for (var y = 0; y < FIELD_HEIGHT; y++) {
            hit_field[y][x] = stage[y][x];
        }
    }

    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            if (block[y][x] != 0) {
                if (hit_field[y + brock_Y][x + brock_X]) {
                    GG_flg = true;
                }
            }
        }
    }

    if(GG_flg == true){
        clearInterval(_main);
        _mode = 1;
        mode();
    }
}

function main() {


    if (disp_score >= 1000 && disp_score < 5000) {
        rgb = "rgb(49,0,123)";
        INTERVAL_DOWN = 100;
        INTERVAL_FREEZE = 0;
        level = "LEVEL:2";
    }
    else if (disp_score >= 5000 && disp_score < 10000) {
        rgb = "rgb(176,166,123)";
        INTERVAL_DOWN = 70;
        INTERVAL_FREEZE = 0;
        level = "LEVEL:3";
    }
    else if (disp_score >= 10000 && disp_score < 50000) {
        rgb = "rgb(100,108,45)"
        INTERVAL_DOWN = 50;
        INTERVAL_FREEZE = 1;
        level = "LEVEL:4";
    }
    else if (disp_score >= 50000 && disp_score < 100000) {
        rgb = "rgb(169,170,161)"
        INTERVAL_DOWN = 30;
        INTERVAL_FREEZE = 1;
        level = "LEVEL:5";
    }
    else if (disp_score >= 100000 && disp_score < 500000) {
        rgb = "rgb(158,40,163)"
        INTERVAL_DOWN = 15;
        INTERVAL_FREEZE = 2;
        level = "LEVEL:6";
    }
    else if (disp_score >= 500000) {
        rgb = "rgb(222,222,222)"
        INTERVAL_DOWN = 8;
        INTERVAL_FREEZE = 2;
        level = "LEVEL:MAX";
    }

    /*---------キャンバス全体に黒を描画----------*/
    //ctx.fillStyle = "rgb(8,8,12)";
    ctx.fillStyle = rgb;
    ctx.fillRect(0, 0, 360, 440);
    /*---------------------------------------------*/

    del_cnt = 0;

    keyExecute();

    arr_init();
   
    block = randam_teto(rand_teto, spin);
    pre_block = randam_teto_N();

    make_block();

    make_wall();
    
    paint();

    del_block();

    fall_block();

    score_disp();

    gameover();
}

function mode() {
    switch(_mode){

        case 0:
            _main = setInterval(main, 5);
            break;

        case 1:
            alert('GAMEOVER');
            break;
    }
}