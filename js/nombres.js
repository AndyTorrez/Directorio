document.addEventListener("DOMContentLoaded", function() {
    var getColumnas = document.querySelectorAll('.columna');
    var columnas= Array.from(getColumnas);
    var numColumnas = parseInt(localStorage.getItem("numColumnas"));
    for(var i=0;i<columnas.length;i++){

        if(i>numColumnas-1){
            let div = columnas[i];
            div.style.display="none";
        }
    }
});

function anterior(){
    window.location.href="crearDirectorio.html";
}
    
function getDatosDeTabla(){

    var getNombreColumnas = document.querySelectorAll('.name');
    var nombresColumnas = [];
    var numColumnas = parseInt(localStorage.getItem("numColumnas"));
    var getNombreDirectorio = document.getElementById("inputNombreDirectorio");
    var nombreDirectorio = getNombreDirectorio.value;

    if(nombreDirectorio == ""){
        alert("Coloque un nombre al directorio");
        return;
    }

    for (var i = 0;i < numColumnas; i++) {
        var nombreColumna = getNombreColumnas[i].value;
        if(!nombreColumna == ""){
        nombresColumnas.push(nombreColumna); 
        }else{
            alert("No deje nombres de columnas vacios");
            return;
        }
    }
    localStorage.setItem("nombreDirectorio", nombreDirectorio);
    sessionStorage.setItem("datos", JSON.stringify(nombresColumnas));

    window.location.href="tabla.html";
    
    
}




