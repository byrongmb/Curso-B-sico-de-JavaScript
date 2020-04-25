//Condiciones: Switch
switch (key) {
    case value:        
        break;
    default:
        break;
}




//Reto
var jugador1 = "Papel";
var jugador2 = "Tijera";

function jugar(jugador1,jugador2) {
    switch (jugador1) {
        case "Papel"&& jugador2 === "Tijera":
            console.log("Jugador 2");
            break;
        case "Tijera"&& jugador2 === "Piedra":
            console.log("Jugador 2");
            break;
        case jugador1 ===jugador2:
            console.log("Empate");
            break;    
        default:
            console.log("Jugador 1");
            break;
    }
}