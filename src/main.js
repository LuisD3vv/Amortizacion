// Codigo hecho por Luis Alejandro Aguilar Soberanes

function mostrar(monto,interes,plazo) {
    let contenedorResultado = document.querySelector(".placeholder-resultados");
    contenedorResultado.classList.remove("placeholder-resultado");
    contenedorResultado.classList.add("jose");
    let img = document.querySelector(".eraseimage");
    img.remove();
    let textborrar = document.querySelectorAll(".erase")
        textborrar.forEach(e => {
        e.style.display = 'none';
    });
    // realizar los calculos
    contenedorResultado.classList.add("jose");
    let bienh3 = document.createElement("h3");
    bienh3.textContent = "Tus resultados"
    bienh3.classList.add("resultitle");

    let bienp = document.createElement("p");
    bienp.textContent = "Tus resultados estan basados en la información que proporcionaste, para reajustar los resultados, da click en limpiar y edita el formulario y da click en calcular.";
    bienp.classList.add("infotext");

    let ptext2 = document.createElement("p");
    ptext2.textContent = "Tu reembolso mensual"
    ptext2.classList.add("resulblock-info-text1");

    let ptext3 = document.createElement("p");
    ptext3.textContent = "total que reembolsará durante el plazo"

    let contres = document.createElement("div");
    contres.classList.add("resulblock");

    let rest = document.createElement("h2");
    rest.classList.add("monthly");

    let monthlyres = document.createElement("p");
    monthlyres.classList.add("total-monthly");

    let elemspan = document.createElement("span");
    let text2 = document.createElement("p");


    let interesReal = interes / 12;
    let tipo = "reembolso";
    let numeroPagos = plazo * 12;

    if (!tipo) {
        console.log(`Tipo no ha recibido ningun parametro ${tipo}`);
    }
    else  {
        switch (tipo) {
            case "reembolso":
                let MontoReembolso = monto * (interesReal * Math.pow(1 + interesReal, numeroPagos)) / (Math.pow(1 + interesReal, numeroPagos) - 1);
                rest.textContent =  MontoReembolso.toFixed(2);
                monthlyres.textContent = "$" +  (MontoReembolso * numeroPagos).toFixed(2) ;
                break;
            case "interes":
                let MontoInteres = monto * interesReal / 12;
                rest.textContent = "$" + MontoInteres.toFixed(2);
                monthlyres.textContent = "$" + MontoInteres.toFixed(2);
                break;
            default:
                console.log("hubo un error al asignar el tipo")
                break;
            }
    }

    contenedorResultado.appendChild(bienh3);
    contenedorResultado.appendChild(bienp);
    contenedorResultado.appendChild(contres);
    contres.appendChild(ptext2);
    contres.appendChild(rest)
    contres.appendChild(ptext3)
    contres.appendChild(monthlyres)
}
let boton = document.querySelector("#boton");
boton.addEventListener("click", calcular);

function calcular () {
    let elementomonto = document.querySelector('#Amount');
    let elementoplazo = document.querySelector('#plazohip');
    let elementointeres = document.querySelector('#intehip');

    // value devuelve solo texto y trim para espacios como el strip en python
    let monto = elementomonto.value.trim();
    let plazo = elementoplazo.value.trim();
    let interes = elementointeres.value.trim();
     if (!monto && !plazo && !interes) {
         [monto, plazo, interes].forEach(element => {
             let p = document.querySelectorAll(".err");
             if (!monto || !plazo || !interes) {
                 p.forEach(e => {
                     e.style.color = 'white'
                     e.style.backgroundColor = 'red'
                 })
             }
         });
        let con1 = document.querySelector('.data-enter-amount');
        let con2 = document.querySelector('.plazo');
        let con3 = document.querySelector('.interes');
        let con4 = document.querySelector('.data-enter-type');

        let contenedores = [con1, con2, con3,con4];
        contenedores.forEach(element => {
            let elementoP = document.createElement("p");
            let moverBoton = document.querySelector(".button");
            moverBoton.style.marginTop = '1rem';
            elementoP.textContent = "Campo requerido";
            elementoP.style.paddingTop = '.5rem'
            elementoP.style.color = 'red'
            elementoP.style.marginTop = '3px';
            elementoP.style.fontSize = '1rem';
            element.appendChild(elementoP);
            setInterval(() => {
                let p = document.querySelectorAll(".err");
                p.forEach(e => {
                    e.style.color = 'black';
                    e.style.backgroundColor = 'lightblue';
                })
                elementoP.remove();
            }, 3000);
        });
        }
     else {
         mostrar(monto,interes,plazo);
     }
}
function limpiar (e) {
    location.reload()

}

