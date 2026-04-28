function generarTablas(){
    // 1. Referenciamos los elementos del DOM
    let contenedor = document.getElementById("tablas");
    let inputNumero = document.getElementById("numeroTabla");
    let titulo = document.querySelector(".glitch-text");

    // 2. Leemos el valor ingresado y lo convertimos a un número entero
    // Si la caja está vacía, usamos 0 por defecto
    let tabla = parseInt(inputNumero.value) || 0;
    
    // 3. Actualizamos el título visual para que coincida con la tabla
    titulo.innerText = "TABLA DEL " + tabla;
    titulo.setAttribute("data-text", "TABLA DEL " + tabla);

    let contenido = "";
   
    // 4. Generamos las filas dinámicamente
    for (let i = 1; i <= 10; i++) {
        let resultado = tabla * i;
        
        // Usamos la misma estructura de clases CSS para mantener el estilo hacker
        contenido += `
            <div class="row">
                <span>${i < 10 ? '0' + i : i} > ${tabla} x ${i}</span> 
                <span>${resultado < 10 ? '0' + resultado : resultado}</span>
            </div>`;
    }
    
    // 5. Inyectamos el nuevo contenido en el contenedor
    contenedor.innerHTML = contenido;
}