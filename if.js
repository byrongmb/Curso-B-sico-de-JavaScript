//Condicionales: If

if (false) {
    console.log("Hola");    
}else if(true){
    console.log("Podria");
}else{
    console.log("Falso");
}


//condition ? true : false ---> Operador Ternario


var num = 1;
var resultado = numero === 1 ? "Soy un uno" : "No soy uno";



//Reto

var judador1 = "Piedra"
var judador2 = "Papel"

function jugar(judador1,judador2){
    if(judador1 === judador2){
        console.log("Empate");
    }else if(judador1 === "Piedra" && judador2 === "Papel"){
        console.log("Gana jugador 2");
    }else if(judador1 === "Papel" && judador2 === "Tijera"){
        console.log("Gana jugador 2");
    }else{
        console.log("Gana jugador 1");
    }   
}


