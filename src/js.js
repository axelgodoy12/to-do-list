// referencias de pantallas
let pantallaBienvenida = document.getElementById("pantallaBienvenida");
let pantallaFormulario = document.getElementById("pantallaFormulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let formTitle = document.getElementById("formTitle");
let formDescripcion = document.getElementById("formDescripcion");
let addTask = document.getElementById("addTask");
let listTable = document.getElementById("historyTable");
let exitButton = document.getElementById("exitButton");
const formTask = document.getElementById("formTask");

formTask.addEventListener("click", (e) => {

    if (e.target.classList.contains("addTask")) {
        addTask2();
        console.log(taskProp);
    }
    if (e.target.classList.contains("exitButton")) {
        mostrarListado()
    }
})

let agregarProductoListado = document.getElementById("agregarProductoListado");

let addTask2 = () => {
    pantallaBienvenida.style.display = "none";
    pantallaFormulario.style.display = "block";
    pantallaListado.style.display = "none";
}

// button-accion agregarProducto
let agregarProducto = document.getElementById("agregarProducto");

agregarProducto.addEventListener('click', addTask2);
agregarProductoListado.addEventListener("click", addTask2);


let mostrarBienvenida = () => {
    pantallaFormulario.style.display = "none";
    pantallaBienvenida.style.display = "block";
};

// exitButton.addEventListener("click", mostrarListado);

// addTask.addEventListener("click", () => {
//     let title = formTitle.value;
//     let descripcion = formDescripcion.value;
//     let modelo = `<td>${title}</td>
//                     <td>${descripcion}</td>`;
//     let listObj = dataToObj(title, descripcion);
//     if (title != "" && descripcion != "") {
//         listTable.innerHTML += modelo;
//         formTitle.value = "";
//         formDescripcion.value = "";
//         saveObj(listObj);
//         mostrarListado();
//     } else {
//         alert("Te falto agregar los campos")
//     };
// });

// formu.addEventListener("click", (e) => {
//     e.preventDefault();
    
//     if(e.target.classList.contains("")
    
    
    
    
    
    
    
//     let formData = new FormData(formu);

//     let listObj = dataToObj(formData);

//     let title = localStorage.getItem("formTitle");
//     let descripcion = localStorage.getItem("formDescripcion");

//     document.getElementById("formTitle").value = title;
//     document.getElementById("formDescripcion").value = descripcion;
//     // let title = formTitle.value;
//     // let descripcion = formDescripcion.value;
//     let modelo = `<td>${title}</td>
//                     <td>${descripcion}</td>`;
    
//     if (title != "" && descripcion != "") {
//         listTable.innerHTML += modelo;
//         formTitle.value = "";
//         formDescripcion.value = "";
//         saveObj(listObj);
//         mostrarListado();
//     } else {
//         alert("Te falto agregar campos")
//     };
//     return {
//         "formTitle": title,
//         "formDescripcion": descripcion,
//     }
// })

// getNewId = () => {
//     let lastId = localStorage.getItem("lastId" || "-1");
//     let newId = JSON.parse(lastId) + 1;
//     localStorage.setItem("lastId", JSON.stringify(newId))
//     return newId;
// };

// dataToObj = (formData) => {
//     let titleRef = formData.get("formTitle");
//     let descripcionRef = formData.get("formDescripcion");
//     let dataId = getNewId();
//     return {
//         "formTitle": titleRef,
//         "formDescripcion": descripcionRef,
//         "dataId": dataId,
//     }
// };

// saveObj = (listObj) => {
//     let listArray = JSON.parse(localStorage.getItem("transaccionData")) || [];
//     listArray.push(listObj);
//     let listArrayJSON = JSON.stringify(listArray);
//     localStorage.setItem("transaccionData", listArrayJSON);
// };

// document.addEventListener("DOMContentLoaded", e => {
//     let objArray = JSON.parse(localStorage.getItem("transaccionData"))
//     objArray.forEach(
//         (array) => {
//             saveObj(array)
//         }
//     )
// });

// insertListTable = (listObj) => {
//     let listTableRef = document.getElementById("listTable");


// }