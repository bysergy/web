console.log('Inicio web ...');

var h = 0;
var min = 0;
var s = 0;

var doc = document.createElement("p");
var doc1 = document.createElement("h1");
doc1.innerText = "Cronometro"

var button1 = document.createElement("button");
button1.onclick = sumaMin;
button1.innerText = "+min";

document.body.appendChild(doc1);
document.body.appendChild(button1);
document.body.appendChild(doc);

var stop = true;
var temporizador = null;

update();

function createTemp(){
    var temp = setInterval(count,1000);
    return temp;
}

function deleteTemp(clock){
    clearInterval(clock);
}

function sumaMin() {
    console.log('aumentando min');
    min += 1;
    update();
}


function update(){
    

    if ( s >= 60){
        s = 0;
        min += 1;
    }
    if (min >= 60){
        min = 0;
        h += 1;
    }

    texth = h.toString()
    textmin = min.toString()
    texts = s.toString()

    if (texth[1] == null){
        texth = "0" + texth;
    }
    if (textmin[1] == null){
        textmin = "0" + textmin;
    }
    if (texts[1] == null){
        texts = "0" + texts;
    }

    text = texth + ":" + textmin + ":" + texts ;
    doc.innerText = text;
}

function count() {
    update();
    if (stop == false){
        s += 1;   
    };
}

function onoff() {
    var info = ""
    if (stop==true){
        stop = false;
        temporizador = createTemp();
        info = "on"  ;  
    }
    else{
        stop = true;
        deleteTemp(temporizador);
        info = "off";
    }
    return info;
}

function restart(){
    console.log("Ultimo chrono de " + text);
    h = 0;
    min = 0;
    s = 0;
    update();
    stop = true;
    deleteTemp(temporizador);
    return "restart chrono";
}



