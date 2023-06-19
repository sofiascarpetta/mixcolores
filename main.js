

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
    alert(colorNuevo)
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

let arrayColores = [
  {id:1, tipo: "otoño", color: "marron", rgb:"rgb(92, 59, 45)"},
  {id:2, tipo: "otoño", color: "naranja", rgb:"rgb(255, 127, 0)"},
  {id:3, tipo: "invierno", color: "azul", rgb:"rgb(5, 42, 102)"},
  {id:4, tipo: "invierno", color: "celeste", rgb:"rgb(130, 179, 232)"},
  {id:5, tipo: "verano", color: "rojo", rgb:"rgb(178, 46, 46)"},
  {id:6, tipo: "verano", color: "amarillo", rgb:"rgb(248, 214, 42)"},
  {id:7, tipo: "primavera", color: "rosado", rgb:"rgb(254, 42, 144)"},
  {id:8, tipo: "primavera", color: "verde", rgb:"rgb(0, 158, 84)"},
 ]
function buscarTiposDeColores(tipo){
  let coloresEncontrados = arrayColores.filter(color => color.tipo === tipo);
  console.log(coloresEncontrados);
  agregarColores(coloresEncontrados)
}
function agregarColores(colores){
  const divParent = document.querySelector("#coloresDeEstaciones");
  divParent.innerHTML = `
  <div style="background-color:${colores[0].rgb}" class="cuadrado"> 
  </div>
  <div style="background-color:${colores[1].rgb}" class="cuadrado"> 
  </div>
  `;
}




    