
function spin_limit() {

    if (brock_X == max_limit_X) {
        spinflg=1;
    }
}


//縦20、横10マスの座標に合わせてテトリミノを表示
function teto_I(x, y) {
    
    switch (spin) {
        case 0:
            max_limit_X = 8;
            max_limit_Y = 20;

            min_limit_X = 2;
            min_limit_Y = 1;

            x = (x * 20) - 20;
            y = (y * 20) - 20;

            for (var i = 0; i < 4; i++) {
                ctx.fillStyle = 'rgb(67,135,233)';
                ctx.fillRect(x + (i * 20), y, 20, 20);

                ctx.beginPath();
                ctx.rect(x + (i * 20), y, 20, 20);
                ctx.strokeStyle = 'rgb(255,255,255)';

                ctx.closePath();

                ctx.stroke();
            }
            break;

        case 1:
            max_limit_X = 10;
            max_limit_Y = 18;

            min_limit_X = 1;
            min_limit_Y = 2;

            x = (x * 20);
            y = (y * 20) - 40;

            for (var i = 0; i < 4; i++) {
                ctx.fillStyle = 'rgb(67,135,233)';
                ctx.fillRect(x, y + (i * 20), 20, 20);

                ctx.beginPath();
                ctx.rect(x, y + (i * 20), 20, 20);
                ctx.strokeStyle = 'rgb(255,255,255)';

                ctx.closePath();

                ctx.stroke();
            }

            break;

        case 2:
            max_limit_X = 8;
            max_limit_Y = 20;

            min_limit_X = 2;
            min_limit_Y = 1;

            x = (x * 20) - 20;
            y = (y * 20) - 20;

            for (var i = 0; i < 4; i++) {
                ctx.fillStyle = 'rgb(67,135,233)';
                ctx.fillRect(x + (i * 20), y, 20, 20);

                ctx.beginPath();
                ctx.rect(x + (i * 20), y, 20, 20);
                ctx.strokeStyle = 'rgb(255,255,255)';

                ctx.closePath();

                ctx.stroke();
            }
            break;

        case 3:
            max_limit_X = 10;
            max_limit_Y = 18;

            min_limit_X = 1;
            min_limit_Y = 2;

            x = (x * 20);
            y = (y * 20) - 40;

            for (var i = 0; i < 4; i++) {
                ctx.fillStyle = 'rgb(67,135,233)';
                ctx.fillRect(x, y + (i * 20), 20, 20);

                ctx.beginPath();
                ctx.rect(x, y + (i * 20), 20, 20);
                ctx.strokeStyle = 'rgb(255,255,255)';

                ctx.closePath();

                ctx.stroke();
            }
            break;
    }
}

function teto_O(x, y) {

    limit_X = 9;
    limit_Y = 20;

    x = x * 20;
    y = (y * 20) - 40;

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            ctx.fillStyle = 'rgb(255,255,0)';
            ctx.fillRect(x + (i * 20), y + (j * 20), 20, 20);

            ctx.beginPath();
            ctx.rect(x + (i * 20), y + (j * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
        }
    }
}

function teto_S(x, y) {

    switch (spin) {
        case 0:
            limit_X = 8;
            limit_Y = 20;

            x = x * 20;
            y = (y * 20) - 40;

            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 2; j++) {
                    if (j == 0) {
                        x += 20;
                    }
                    ctx.fillStyle = 'rgb(100,255,100)';
                    ctx.fillRect(x + (i * 20), y + (j * 20), 20, 20);

                    ctx.beginPath();
                    ctx.rect(x + (i * 20), y + (j * 20), 20, 20);
                    ctx.strokeStyle = 'rgb(255,255,255)';

                    ctx.closePath();

                    ctx.stroke();
                    if (j == 0) {
                        x -= 20;
                    }
                }
            }
            break;

        case 1:
            limit_X = 8;
            limit_Y = 20;

            x = x * 20;
            y = (y * 20) - 40;

            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 2; j++) {
                    if (j == 0) {
                        x += 20;
                    }
                    ctx.fillStyle = 'rgb(100,255,100)';
                    ctx.fillRect(x + (i * 20), y + (j * 20), 20, 20);

                    ctx.beginPath();
                    ctx.rect(x + (i * 20), y + (j * 20), 20, 20);
                    ctx.strokeStyle = 'rgb(255,255,255)';

                    ctx.closePath();

                    ctx.stroke();
                    if (j == 0) {
                        x -= 20;
                    }
                }
            }
            break;

        case 2:

            break;

        case 3:

            break;   
    }
}

function teto_Z(x, y) {

    limit_X = 8;
    limit_Y = 20;

    x = x * 20;
    y = (y * 20) - 40;

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            if (j == 1) {
                x += 20;
            }
            ctx.fillStyle = 'rgb(255,100,100)';
            ctx.fillRect(x + (i * 20), y + (j * 20), 20, 20);

            ctx.beginPath();
            ctx.rect(x + (i * 20), y + (j * 20), 20, 20);
            ctx.strokeStyle = 'rgb(255,255,255)';

            ctx.closePath();

            ctx.stroke();
            if (j == 1) {
                x -= 20;
            }
        }
    }
}

function teto_J(x, y) {

    limit_X = 8;
    limit_Y = 20;

    x = x * 20;
    y = (y * 20) - 40;

    for (var i = 0; i < 4; i++) {

        if (i == 3) {
            x -= 20;
            y += 20;
        }

        ctx.fillStyle = 'rgb(100,100,255)';
        ctx.fillRect(x + (i * 20), y, 20, 20);

        ctx.beginPath();
        ctx.rect(x + (i * 20), y, 20, 20);
        ctx.strokeStyle = 'rgb(255,255,255)';

        ctx.closePath();

        ctx.stroke();
    }
}

function teto_L(x, y) {

    limit_X = 8;
    limit_Y = 20;

    x = x * 20;
    y = (y * 20) - 40;

    for (var i = 0; i < 4; i++) {

        if (i == 0) {
            y += 20;
        }

        ctx.fillStyle = 'rgb(255,183,76)';
        ctx.fillRect(x + (i * 20), y, 20, 20);

        ctx.beginPath();
        ctx.rect(x + (i * 20), y, 20, 20);
        ctx.strokeStyle = 'rgb(255,255,255)';

        ctx.closePath();

        ctx.stroke();

        if (i == 0) {
            x -= 20;
            y -= 20;
        }
    }
}

function teto_T(x, y) {

    limit_X = 8;
    limit_Y = 20;

    x = x * 20;
    y = (y * 20) - 40;

    for (var i = 0; i < 4; i++) {

        if (i == 1) {
            y += 20;
        }

        ctx.fillStyle = 'rgb(196,0,204)';
        ctx.fillRect(x + (i * 20), y, 20, 20);

        ctx.beginPath();
        ctx.rect(x + (i * 20), y, 20, 20);
        ctx.strokeStyle = 'rgb(255,255,255)';

        ctx.closePath();

        ctx.stroke();

        if (i == 1) {
            x -= 20;
            y -= 20;
        }
    }
}
