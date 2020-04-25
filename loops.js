// Forma 1

var estudiantes = ["Alejandro", "Karen", "Diana", "Kevin"];

function saludarEstudiantes(alumno){
    console.log(`Hola, ${alumno}`);   
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// Forma 2

var estudiantes = ["Alejandro", "Karen", "Diana", "Kevin"];

function saludarEstudiantes(alumno){
    console.log(`Hola, ${alumno}`);   
}

for (var alumno of estudiantes){
    saludarEstudiantes(alumno);
}