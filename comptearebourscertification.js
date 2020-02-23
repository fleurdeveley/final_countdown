var mn = parseInt(document.getElementById('mn').innerHTML);
var s = parseInt(document.getElementById('s').innerHTML);
var compteur = 1;
var totalMn = parseInt(document.getElementById('mn').innerHTML);
// console.log(m+":"+s);
// console.log('total', totalMn);

// je calcule pour décrémenter les mn et les s
function calcul(value){
    if (value == 0){
        value = 60;
    }
    return value - 1;
}
// console.log(calcul(60))

// je déclare ma fonction chrono avec un interval de 10millieme en 10millieme de secondes
var chrono = setInterval(function(){
    s = calcul(s);
    document.getElementById('s').innerHTML = s;
    if(s == 0 && mn != 0){
        mn = calcul(mn);
        document.getElementById('mn').innerHTML = mn;
    }
    if(mn == 0){
        compteur++;
        // console.log(compteur);
        if(compteur % 2 == 0){
            mn = 5;
            totalMn = totalMn + mn;
        } else {
            mn = 25;
            totalMn = totalMn + mn;
        }
        if(compteur == 8){
            clearInterval(chrono);
            document.getElementById('totalMn').innerHTML = 'total ' + totalMn + ' mn';
        }
        console.log(totalMn);
    }
}, 10);




// function diviseTemps (temps, diviseur){
//     if(!diviseur){
//         diviseur=5;
//     }
//     var t=temps.split(':');
//     var sec=Math.round((parseInt(t[0]*60)+parseInt(+[1])/divisuer);
//     var timeToReturn=[];
//     timeToReturn=[];
//     timeToReturn.push(Math.floor(sec/60));
//     timeToReturn.push(sec%60);
//     returnvtimeToReturn.join(':');
// }