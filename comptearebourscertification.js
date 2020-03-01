// je calcule pour décrémenter
function calcul(value, max = null){
    if (max){
        if (value == 0){
        value = max;
        }
    }
    return value - 1;
}

// je genère un 0 sur les nombre inférieur à 10
function generate0(nb){
	if(nb<10) {
		return "0"+nb;
	} else {
		return nb;
	}
}

// je déclare la date d'aujourd'hui et la date de fin
var dateNow = new Date();
var dateFuture = new Date('2020/06/30');

// je calcule le nombre total en secondes
var delta = Math.abs(dateFuture - dateNow) / 1000;

// je calcule le nombre de jours
var d = Math.floor(delta / 86400);
delta -= d * 86400;

// je calcule le nombre total des heures
var h = Math.floor(delta / 3600) % 24;
delta -= h * 3600;

// je calcule le nombre total des minutes
var mn = Math.floor(delta / 60) % 60;
delta -= mn * 60;

// je calcule le nombre de secondes restantes
var s = 0;

// je les écris dans le HTML
document.getElementById('s').innerHTML = generate0(s);
document.getElementById('mn').innerHTML = generate0(mn);
document.getElementById('h').innerHTML = generate0(h);
document.getElementById('d').innerHTML = generate0(d);

// je déclare ma fonction chrono 
var chrono = setInterval(function(){
    s = calcul(s, 60);
    
    if(s == 0 && mn != 0){
        mn = calcul(mn, 60);
    }

    if(mn == 0 && h != 0){
        mn = calcul(mn, 60);
        h = calcul(h, 24);  
    }

    if(h == 0 && d != 0){
        h = calcul(h, 24);
        d = calcul(d)
    }

    document.getElementById('s').innerHTML = generate0(s);
    document.getElementById('mn').innerHTML = generate0(mn);
    document.getElementById('h').innerHTML = generate0(h);
    document.getElementById('d').innerHTML = generate0(d);

    if (s == 0 && mn == 0 && h == 0 && d == 0){
        clearInterval(chrono);
    }
    
}, 1000);
