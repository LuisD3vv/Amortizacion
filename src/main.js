// Codigo hecho por Luis Alejandro Aguilar Soberanes

function mostrar() {
    let contenedorResultado = document.querySelector(".placeholder-resultados");
    contenedorResultado.classList.remove("placeholder-resultado");
    contenedorResultado.classList.add("jose");
    let img = document.querySelector(".eraseimage");
    img.remove();
    let textborrar = document.querySelectorAll(".erase")
        textborrar.forEach(e => {
        e.style.display = 'none';
    });

    contenedorResultado.classList.add("jose");

    let bienh3 = document.createElement("h3");
    bienh3.textContent = "Tus resultados"
    bienh3.classList.add("resultitle");

    let bienp = document.createElement("p");
    bienp.textContent = "Tus resultados estan basados en la informacion que proporcionaste, para reajustar los resultados, edita el formulario y da click en calcular.";
    bienp.classList.add("infotext");

    let ptext2 = document.createElement("p");
    ptext2.textContent = "tu reembolso mensual"
    ptext2.classList.add("resulblock-info-text1");

    let ptext3 = document.createElement("p");
    ptext3.textContent = "Reembolso total al terminar la operacion"

    let contres = document.createElement("div");
    contres.classList.add("resulblock");

    let rest = document.createElement("h2");
    rest.textContent = "$1971";
    rest.classList.add("monthly");

    let monthlyres = document.createElement("p");
    monthlyres.classList.add("total-monthly");
    monthlyres.textContent = "luis"

    let elemspan = document.createElement("span");
    let text2 = document.createElement("p");

    contenedorResultado.appendChild(bienh3);
    contenedorResultado.appendChild(bienp);
    contenedorResultado.appendChild(contres);
    contres.appendChild(ptext2);
    contres.appendChild(rest)
    contres.appendChild(ptext3)
    contres.appendChild(monthlyres)
}
let boton = document.querySelector("#boton");
boton.addEventListener("click", calcular,{once: true});

function  calcular () {
    let elementomonto = document.querySelector('#Amount');
    let elementoplazo = document.querySelector('#plazohip');
    let elementointeres = document.querySelector('#intehip');

    // trim para espacios como el strip en python
    // value devuelve solo texto
    let monto = elementomonto.value.trim();
    let plazo = elementoplazo.value.trim();
    let interes = elementointeres.value.trim();


    [monto, plazo, interes].forEach(element => {
        let p = document.querySelectorAll(".err");
        if (!monto || !plazo || !interes) {
            p.forEach(e => {
                e.style.color = 'white'
                e.style.backgroundColor = 'red'
            })
        }
        if (!monto && !plazo && !interes) {
            alert("Debes de llenar los campos.");
        }
    })
    // crear elementos que muestran el mensaje del campo requierido
    let con1 = document.querySelector('.data-enter-amount');
    let con2 = document.querySelector('.plazo');
    let con3 = document.querySelector('.interes');
    let con4 = document.querySelector('.data-enter-type');

    let contenedores = [con1, con2, con3,con4];
    contenedores.forEach(element => {
        let elementoP = document.createElement("p");
        elementoP.textContent = "Campo requerido";
        elementoP.style.color = 'red'
        elementoP.style.marginTop = '3px';
        element.appendChild(elementoP);
        setInterval(() => {
            elementoP.remove();
            let p = document.querySelectorAll(".err");
            p.forEach(e => {
                e.style.color = 'black'
                e.style.backgroundColor = 'lightblue'
            })
        }, 3000);
    })
    mostrar();

}
function limpiar (e) {
    location.reload()

}