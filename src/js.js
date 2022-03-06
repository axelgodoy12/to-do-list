// referencias de pantallas
let pantallaBienvenida = document.getElementById("pantallaBienvenida");
let pantallaFormulario = document.getElementById("pantallaFormulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let formTitle = document.getElementById("formTitle");
let formDescripcion = document.getElementById("formDescripcion");
let addTask = document.getElementById("addTask");
let listTable = document.getElementById("historyTable");

// button-accion agregarProducto
let agregarProducto = document.getElementById("agregarProducto");
agregarProducto.addEventListener('click', () => {
    pantallaBienvenida.style.display = "none";
    pantallaFormulario.style.display = "block";
})

let mostrarListado = () => {
    pantallaFormulario.style.display = "none";
    pantallaListado.style.display = "block";
}

addTask.addEventListener("click", () => {
    let title = formTitle.value;
    let descripcion = formDescripcion.value;
    let modelo = `<td>${title}</td>
                    <td>${descripcion}</td>`;
    historyTable.innerHTML += modelo;
    mostrarListado();
})