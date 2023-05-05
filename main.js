function mezclar() {
    // parseInt(Rojo1, 16);

    let colorUno = document.querySelector("#colorUno").value;
    let colorDos = document.querySelector("#colorDos").value;
    
    let colorUnoDesintegrado = extraerColor(colorUno);
    let colorDosDesintegrado = extraerColor(colorDos);

    // Definir los colores RGB del nuevo color

    let rojoNuevo = fusionarColores (colorUnoDesintegrado.r, colorDosDesintegrado.r);
    let verdeNuevo = fusionarColores (colorUnoDesintegrado.g, colorDosDesintegrado.g);
    let azulNuevo = fusionarColores (colorUnoDesintegrado.b, colorDosDesintegrado.b);

    let colorNuevo = `rgb(${rojoNuevo}, ${verdeNuevo}, ${azulNuevo})`;
    

    document.querySelector("#resultado").style.backgroundColor = colorNuevo

}

function extraerColor(colores) {
    let rojo = '';
    let verde = '';
    let azul = '';
  
    for (let i = 1; i <= colores.length; i++) {
      if (i <= 2) {
        rojo += colores[i];
      } else if (i <= 4) {
        verde += colores[i];
      } else {
        azul += colores[i];
      }
    }
  
    let color = { r:rojo, g: verde, b: azul };
    return color;
  }
  

function fusionarColores(c1, c2) {
    c1 = parseInt(c1, 16);
    c2 = parseInt(c2, 16);
    let c_promedio = (c1 + c2) / 2;
    return c_promedio;
}






//   let miColor = extraerColor("#FF5733");
//   console.log(miColor); 

// function obtenerRojo(color) {
//     return `${color[1]}${color[2]}`;
// }

// function obtenerVerde(color) {
//     return `${color[3]}${color[4]}`;
// }

// function obtenerAzul(color) {
//     return `${color[5]}${color[6]}`;
// }



    