/// 1
function logo(str) {
    let logik = ''
    for (let i = str.length - 1; i >= 0; i--){
        logik += str[i]
    }
    return console.log(logik)
}

logo('mbappe')


/// 2
const arif = function (){
    let a = 0;
    for (let t = 0; t < arguments.length; t++){
        a += arguments[t]
    }
    return console.log(a / arguments.length)
}

arif(3, 5, 4, 4, 5, 3, 3, 4, 5, 2, 5)