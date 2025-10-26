// Codigo hecho por Luis Alejandro Aguilar Soberanes

function agregarComas(numero) {
  // agregar comas a los numeros, cada 3 caracteres.
  return numero.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function mostrar(monto, interes, plazo,opcion) {
  //monto = monto * 0.047
  // switch (currency) {
  //   case 'dolar':
  //     break;
  //   case 'peso':
  //     break;
  //   case 'dolar':
  //     break;
  // }
  let contenedorResultado = document.querySelector(".placeholder-resultados");
  contenedorResultado.classList.remove("placeholder-resultado");
  contenedorResultado.classList.add("jose");
  let img = document.querySelector(".eraseimage");
  img.remove();
  let textborrar = document.querySelectorAll(".erase");
  textborrar.forEach((e) => {
    e.style.display = "none";
  });
  // realizar los calculos
  contenedorResultado.classList.add("jose");
  let bienh3 = document.createElement("h3");
  bienh3.textContent = "Resultados";
  bienh3.classList.add("resultitle");

  let bienp = document.createElement("p");
  bienp.textContent =
    "Resultados basados en la información que proporcionaste, para reajustar los resultados, da click en limpiar y edita el formulario y da click en calcular.";
  bienp.classList.add("infotext");

  let ptext2 = document.createElement("p");
  ptext2.textContent = "Tu reembolso mensual";
  ptext2.classList.add("resulblock-info-text1");

  let ptext3 = document.createElement("p");
  ptext3.textContent = "Total que se reembolsará";
  let contres = document.createElement("div");
  contres.classList.add("resulblock");

  let PagoMensual = document.createElement("h2");
  PagoMensual.classList.add("monthly");

  let PagoTotal = document.createElement("p");
  PagoTotal.classList.add("total-monthly");

  let elemspan = document.createElement("span");
  let text2 = document.createElement("p");

  // Datos de la formula, sistema frances.
  let interesMensual = interes / 12;
  let numeroPagos = plazo * 12;

  
  if (!opcion) {
    console.log(`Tipo no ha recibido ningun parametro ${opcion}`);
  } else {
    switch (opcion) {
  
      // 💰 Caso reembolso (hipoteca o préstamo)
      case "reembolso":
        let MontoReembolso = (monto * interesMensual * Math.pow(1 + interesMensual, numeroPagos)) /
      (Math.pow(1 + interesMensual, numeroPagos) - 1);
  
        if (!MontoReembolso || isNaN(MontoReembolso) || !isFinite(MontoReembolso)) {
          PagoMensual.textContent = "Error en la operación";
          PagoTotal.textContent = "Error en la operación";
          break;
        }
  
        let pagoMensualFormateado = agregarComas(MontoReembolso);
        PagoMensual.textContent = "$" + pagoMensualFormateado;
  
        let totalPagos = MontoReembolso * numeroPagos;
        let totalPagosFormateado = agregarComas(totalPagos);
        PagoTotal.textContent = "$" + totalPagosFormateado;
        break;
  
      // 💡 Caso interés (simple)
      case "interes":
        // Si ya usas interesMensual, el tiempo también debe estar en meses
        let MontoInteres = monto * interesMensual * numeroPagos;
  
        if (!MontoInteres || isNaN(MontoInteres) || !isFinite(MontoInteres)) {
          PagoMensual.textContent = "Error en la operación";
          PagoTotal.textContent = "Error en la operación";
          break;
        }
  
        // Promedio mensual del interés simple
        let interesMensualPromedio = MontoInteres / numeroPagos;
  
        PagoMensual.textContent = "$" + agregarComas(interesMensualPromedio);
        PagoTotal.textContent = "$" + agregarComas(MontoInteres);
        break;
    }
  }
  
  let tipoP = document.createElement('p');
  tipoP.classList.add('tipoHipoteca');
  tipoP.textContent = `Tipo de hipoteca: ${opcion}`
  contenedorResultado.appendChild(bienh3);
  contenedorResultado.appendChild(bienp);
  contenedorResultado.appendChild(contres);
  contres.appendChild(ptext2);
  contres.appendChild(PagoMensual);
  contres.appendChild(ptext3);
  contres.appendChild(PagoTotal);
  contenedorResultado.appendChild(tipoP)
}

function verificar_entradas() {
  let elementomonto = document.querySelector("#Amount");
  let elementoplazo = document.querySelector("#plazohip");
  let elementointeres = document.querySelector("#intehip");
  


  // value devuelve solo texto y trim para espacios como el strip en python
  let monto = elementomonto.value.trim();
  let plazo = elementoplazo.value.trim();
  let interes = elementointeres.value.trim();

    
      if (monto && plazo && interes) {
        const tipoHipoteca = document.querySelector('input[name="option"]:checked');
        if (!tipoHipoteca) {
          alert("Ingresa el tipo de hipoteca");
        }
        const opcion = tipoHipoteca.value;
        mostrar(monto, interes, plazo,opcion);
        return;
      }
      else {
        if (monto || plazo || interes) {
            [monto,plazo,interes].forEach((e)=>{
              e.style.backgroundColor = 'red';
            })
        }
      
        let con1 = document.querySelector(".data-enter-amount");
        let con2 = document.querySelector(".plazo");
        let con3 = document.querySelector(".interes");
        let con4 = document.querySelector(".data-enter-type");
    
        // bloque para los errores
        [con1, con2, con3, con4].forEach((element) => {
          document.querySelectorAll('.err').forEach((err)=>{
            err.style.backgroundColor = 'red';
            err.style.color = 'white';
          })
      
          let moverBoton = document.querySelector(".button");
          moverBoton.style.marginTop = '1rem';
          let styles = ['paddingTop','color','marginTop','fontSize'];
          let values = ['.2rem','red','3px','1rem'];
          let elementoP = document.createElement("p");
          elementoP.textContent = 'Campo requerido';
            for (let i = 0; i < values.length; i++){
              elementoP.style[styles[i]] = values[i];
            }
          element.appendChild(elementoP); 

          setTimeout(()=>{
            document.querySelectorAll(".err").forEach((e) => {
              e.style.transition = 'all 0.3s ease'
              e.style.color = "unset";
              e.style.backgroundColor = "lightblue";
            });
            elementoP.remove()
          },3000)
        })

      }
}
let botonLlamado = 1;
let boton = document.querySelector("#boton");
boton.addEventListener("click", () => {
  setTimeout(() => {
    botonLlamado = 1;
  }, 2000);
  if (botonLlamado === 1) {
    verificar_entradas();
    botonLlamado = 0;
  }
  if (botonLlamado > 2) {
    alert("Deja de spamear el puto boton");
    return;
  }
});

function limpiar(e) {
  location.reload();
}
