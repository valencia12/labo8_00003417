
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

let cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }

    if (formulario[1].value === "") {
        formulario[1].style.borderColor = "red";
    } else {
        formulario[1].style.borderColor = "green";
    }
    if (formulario[2].value === "") {
        formulario[2].style.borderColor = "red";
    } else {
        formulario[2].style.borderColor = "green";
    }
    if (formulario[3].value === "") {
        formulario[3].style.borderColor = "red";
    } else {
        formulario[3].style.borderColor = "green";
    }
    if((formulario[1].value === "") || (formulario[2].value === "") || (formulario[3].value === "")){
      
    }else{
        bitacoras.push(bitacora);
        cont++;
        mostrar(); 
    }
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}
const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

}
const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

/*1. Que contiene la variable formulario: El formulario bitacora llamado por el ID*/
/*2. Que contiene el metodo evt.preventDefault(): Es una accion que evita que se haga la accion por defecto*/
/*3. Qué es lo que contiene formulario[x]: EL que contiene el valor de la posicion */
/*4. ¿Qué contienen las variables tr y td ? las colecciones de elementos al agregar: */
/*5. ¿Qué contienen la variable content ? Contiene cada item */
/*6. ¿Qué valor tendra tbody al finalizar la iteración? Una fila mas de la que ya tiene*/

