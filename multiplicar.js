function generarTablas(){
    let contenedor = document.getElementById("tablas");
    //contenedor.innerHTML = " <h1> Probando </h1>";
    let contenido = " ";
   
    let tabla = 3;
    for (let i = 1; i <= 10; i++) {
        // Calculamos el resultado en cada vuelta
        let resultado = tabla * i;
       
        // Imprimimos con el formato solicitado: 3x1=3
       
        contenido += "<div class= 'row'>"+(tabla + "x" + i + "=" + resultado)+"</div>";
        contenedor.innerHTML = contenido;
    }
 
}