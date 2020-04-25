var articulos = [
    {nombre: "Bici", costo: 3200},
    {nombre: "Televisor", costo: 12800},
    {nombre: "Libro", costo: 80},
    {nombre: "Celular", costo: 1230},
    {nombre: "Portatil", costo: 123024},
    {nombre: "Teclado", costo: 400},
    {nombre: "PS4", costo: 2400},
]

// utilizamos filter y le enviamos una función en donde definimos el filtro recibiendo el parámetro a filtrar

var articulosFiltrados = articulos.filter(function(elemento){
    return elemento.costo <= 500
});

console.log(articulosFiltrados);


// utilizamos map con el fin de traer toda una nueva serie de filtros en un nuevo arreglo, map lee todo el contenido del arreglo

var nombreArticulos = articulos.map(function(elemento){
    return elemento.nombre;
})

var costoArticulos = articulos.map(function(elemento){
    return elemento.costo;
})

console.log(nombreArticulos);
console.log(costoArticulos);

////
var articulos = [
    {nombre: "Bici", costo: 3200},
    {nombre: "Televisor", costo: 12800},
    {nombre: "Libro", costo: 80},
    {nombre: "Celular", costo: 1230},
    {nombre: "Portatil", costo: 123024},
    {nombre: "Teclado", costo: 400},
    {nombre: "PS4", costo: 2400},
]

// con find() generamos un filtro sobre el arreglo para hallar un elemento con caracteristicas específicas de filtro
 
var encuentraArticulo = articulos.find(function(elemento){
    return elemento.nombre === "PS4";
})

console.log(encuentraArticulo);


// foreach() devuelve los resultados de los valores de cada elemento filtrando por el nombre del atributo

articulos.forEach(function(elemento){
    console.log(elemento.nombre);
})


// some() hace una validación de verdadero o falso y lo que nos regresa es una respuesta en boleano

var articulosBaratos = articulos.some(function(elemento){
    return elemento.costo >= 11111100;
})

console.log(articulosBaratos); 