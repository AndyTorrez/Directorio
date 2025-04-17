
function anterior(){
    window.location.href="index.html";
}
    
function getNumColumnas(){
    var opciones = document.getElementById("numColumnas");
    var numColumnas = opciones.value;
    localStorage.setItem('numColumnas', numColumnas);
    
    window.location.href = "nombres.html";
}
    