document.addEventListener("click", seleccionarFila);
let tablaGuardada = false;

document.addEventListener("DOMContentLoaded", function() {
    var getColumnas = document.querySelectorAll('.fila');
    var columnas= Array.from(getColumnas);
    var numColumnas = parseInt(localStorage.getItem("numColumnas"));
    var nombreColumnas = sessionStorage.getItem("datos");
    var nombreColumnaArreglo= JSON.parse(nombreColumnas);
    var directorio = document.getElementById("miDirectorio");
    var nombreDirectorio = document.getElementById("nombreDirectorio");
    

    for(var i=0;i<columnas.length;i++){
        var label = columnas[i].querySelector('label');
        label.textContent = nombreColumnaArreglo[i];
        if(i>numColumnas-1){
            let div = columnas[i];
            div.style.display="none";
        }
    }

    nombreDirectorio.innerHTML= localStorage.getItem("nombreDirectorio");
    var fila = directorio.insertRow();
        
    for(i=0;i<nombreColumnaArreglo.length;i++){
    let celda = fila.insertCell();
    celda.innerHTML= nombreColumnaArreglo[i];
    }

    
});

function agregarDatos(){
    var getDatos = document.querySelectorAll('.dato');
    var numColumnas = parseInt(localStorage.getItem("numColumnas"));
    var directorio = document.getElementById("miDirectorio");
    var datos = [];
    var iter = 0;
    


    getDatos.forEach(function(input) {
        if(iter < numColumnas){
        datos.push(input.value);
        input.value = ""; 
        }
        iter++;
    })


    for(var i=0;i<numColumnas;i++){

        if(datos[i] ===""){
            alert("No deje espacios vacios");
            return;
        }
    }

    var fila = directorio.insertRow();
        
        for(i=0;i<datos.length;i++){
        let celda = fila.insertCell();
        celda.innerHTML= datos[i];
    }

    tablaGuardada=false;


}

let filaSeleccionada = null;

function seleccionarFila(event){
   
    if (event.target.closest("#miDirectorio")) {
        const fila = event.target.closest("tr");
        if (fila) {
            if (filaSeleccionada !== null) {
                filaSeleccionada.classList.remove("seleccionada");
            }
            fila.classList.add("seleccionada");
            filaSeleccionada = fila;
        } } else {
            if (filaSeleccionada !== null) {
                filaSeleccionada.classList.remove("seleccionada");
                filaSeleccionada = null;
            }
        }
    }

 function eliminarFila() {
    if (filaSeleccionada !== null) {
        if (!filaSeleccionada.previousElementSibling) {
            alert("No puedes eliminar la fila de encabezados.");
            return;
        }
        filaSeleccionada.remove();
        filaSeleccionada = null;
    } else {
        alert("Seleccione una fila para eliminarla!");
    }

    tablaGuardada=false;
}

function guardarTabla() {
    const tabla = document.getElementById("miDirectorio");
    const libro = XLSX.utils.table_to_book(tabla);
    XLSX.writeFile(libro, "Directorio.xlsx");
    tablaGuardada = true;
}

function salir(){
    if (!tablaGuardada && !confirm("¿Seguro que quieres salir sin guardar?")) {
        return;
    }
    window.location.href="index.html";

}

   


