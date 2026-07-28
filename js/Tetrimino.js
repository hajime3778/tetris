
function randam_teto(rand, _s) {

    if (freeze_flg == true) {

        if (rand_teto == 0) {
            rand_teto = Math.floor(Math.random() * 7) + 1;
            rand = rand_teto;
        }
        else {
            rand_teto = next_rand_teto;
        }

        next_rand_teto = Math.floor(Math.random() * 7) + 1;

        freeze_flg = false;
    }
    switch (rand) {

        case 1:
            return teto_O();
            break;

        case 2:
            return teto_I(_s);
            break;

        case 3:
            return teto_S(_s);
            break;

        case 4:
            return teto_Z(_s);
            break;

        case 5:
            return teto_J(_s);
            break;

        case 6:
            return teto_L(_s);
            break;

        case 7:
            return teto_T(_s);
            break;
    }
}

function randam_teto_N() {

    rand = next_rand_teto;

    switch (rand) {

        case 1:
            return teto_O();
            break;

        case 2:
            return teto_I(0);
            break;

        case 3:
            return teto_S(0);
            break;

        case 4:
            return teto_Z(0);
            break;

        case 5:
            return teto_J(0);
            break;

        case 6:
            return teto_L(0);
            break;

        case 7:
            return teto_T(0);
            break;
    }
}



//縦20、横10マスの座標に合わせてテトリミノを表示

function teto_O() {

    var arr_teto;

    arr_teto = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]    
    ];

    return arr_teto;
}

function teto_I(_spin) {

    var arr_teto;

    switch (_spin) {

        case 0:
            arr_teto = [
             [0, 0, 0, 0],
             [2, 2, 2, 2],
             [0, 0, 0, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 1:
            arr_teto = [
             [0, 0, 2, 0],
             [0, 0, 2, 0],
             [0, 0, 2, 0],
             [0, 0, 2, 0]
            ];
            break;

        case 2:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [2, 2, 2, 2],
             [0, 0, 0, 0]
            ];
            break;

        case 3:
            arr_teto = [
             [0, 2, 0, 0],
             [0, 2, 0, 0],
             [0, 2, 0, 0],
             [0, 2, 0, 0]
            ];
            break;
    }
    return arr_teto;
}

function teto_S(_spin) {
    var arr_teto;

    switch (_spin) {

        case 0:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 3, 3, 0],
             [3, 3, 0, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 1:
            arr_teto = [
             [0, 3, 0, 0],
             [0, 3, 3, 0],
             [0, 0, 3, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 2:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 3, 3, 0],
             [3, 3, 0, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 3:
            arr_teto = [
             [0, 3, 0, 0],
             [0, 3, 3, 0],
             [0, 0, 3, 0],
             [0, 0, 0, 0]
            ];
            break;
    }

    return arr_teto;
}

function teto_Z(_spin) {

    var arr_teto;

    switch (_spin) {

        case 0:
            arr_teto = [
              [0, 0, 0, 0],
              [4, 4, 0, 0],
              [0, 4, 4, 0],
              [0, 0, 0, 0]
            ];
            break;

        case 1:
            arr_teto = [
              [0, 0, 4, 0],
              [0, 4, 4, 0],
              [0, 4, 0, 0],
              [0, 0, 0, 0]
            ];
            break;

        case 2:
            arr_teto = [
              [0, 0, 0, 0],
              [4, 4, 0, 0],
              [0, 4, 4, 0],
              [0, 0, 0, 0]
            ];
            break;

        case 3:
            arr_teto = [
              [0, 0, 4, 0],
              [0, 4, 4, 0],
              [0, 4, 0, 0],
              [0, 0, 0, 0]
            ];
            break;
    }

    return arr_teto;
}

function teto_J(_spin) {

    var arr_teto;

    switch (_spin) {

        case 0:
            arr_teto = [
              [0, 0, 0, 0],
              [5, 5, 5, 0],
              [0, 0, 5, 0],
              [0, 0, 0, 0]
            ];
            break;

        case 1:
            arr_teto = [
              [0, 0, 5, 0],
              [0, 0, 5, 0],
              [0, 5, 5, 0],
              [0, 0, 0, 0]
            ];
            break;

        case 2:
            arr_teto = [
              [0, 0, 0, 0],
              [5, 0, 0, 0],
              [5, 5, 5, 0],
              [0, 0, 0, 0]
            ];
            break;

        case 3:
            arr_teto = [
              [0, 5, 5, 0],
              [0, 5, 0, 0],
              [0, 5, 0, 0],
              [0, 0, 0, 0]
            ];
            break;
    }


    

    return arr_teto;
}

function teto_L(_spin) {

    var arr_teto;

    switch (_spin) {

        case 0:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 6, 6, 6],
             [0, 6, 0, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 1:
            arr_teto = [
             [0, 6, 6, 0],
             [0, 0, 6, 0],
             [0, 0, 6, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 2:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 0, 6, 0],
             [6, 6, 6, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 3:
            arr_teto = [
             [0, 6, 0, 0],
             [0, 6, 0, 0],
             [0, 6, 6, 0],
             [0, 0, 0, 0]
            ];
            break;
    }


    

    return arr_teto;
}

function teto_T(_spin) {

    var arr_teto;

    switch (_spin) {

        case 0:
            arr_teto = [
             [0, 0, 0, 0],
             [7, 7, 7, 0],
             [0, 7, 0, 0],
             [0, 0, 0, 0]
            ];
            break;

        case 1:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 0, 7, 0],
             [0, 7, 7, 0],
             [0, 0, 7, 0]
            ];

            break;

        case 2:
            arr_teto = [
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 7, 0, 0],
             [7, 7, 7, 0]
            ];
            break;

        case 3:
            arr_teto = [
             [0, 0, 0, 0],
             [7, 0, 0, 0],
             [7, 7, 0, 0],
             [7, 0, 0, 0]
            ];
            break;
    }


    
    return arr_teto;
}
