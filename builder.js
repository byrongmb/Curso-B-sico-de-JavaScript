//Funcion constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;    
}

var autoN = [];
for(var i = 0; i <= 30; i++){
    autoN[i] = new auto("Tesla", "Model " + i, 2020);
}

for (const car of autoN) {
    console.log(auto)
}