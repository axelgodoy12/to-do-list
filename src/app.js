// referencias de pantallas
let pantallaBienvenida = document.getElementById("pantallaBienvenida");
let pantallaFormulario = document.getElementById("pantallaFormulario");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let agregarProducto = document.getElementById("agregarProducto");
let exitButton = document.getElementById("exitButton");
const formTask = document.getElementById("formTask");
const formTitle = document.getElementById("formTitle");
const listTask = document.getElementById("listTask");
const contTask = document.getElementById("contTask");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();
let tasks = {};

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    addTask();
})
// console.log(Date.now())

listTask.addEventListener('click', (e) => {
    btnAdd(e);
})

let mostrarBienvenida = () => {
    pantallaFormulario.style.display = "none";
    pantallaBienvenida.style.display = "block";
};
let addTask2 = () => {
    pantallaBienvenida.style.display = "none";
    pantallaFormulario.style.display = "block";
    pantallaListado.style.display = "none";
}
agregarProducto.addEventListener('click', addTask2);
exitButton.addEventListener("click", mostrarBienvenida);

formTask.addEventListener('submit', e => {
    e.preventDefault();
    // FORMAS DE SELECCIONAR LOS VALORES
    // console.log(e.target[0].value);
    // console.log(e.target.querySelector("input").value);
    // console.log(input.value);

    setTask(e)
})

const setTask = (e) => {
    if (formTitle.value.trim() === "") {
        alert("Completa los campos");
        return
    }
    const task = {
        id: Date.now(),
        texto: formTitle.value,
        estado: false
    }
    tasks[task.id] = task
    formTask.reset();
    formTitle.focus();

    addTask();
    mostrarBienvenida();
}

const addTask = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    if (Object.values(tasks).length === 0) {
        listTask.innerHTML = `
            <div>
                No hay tareas pendietes 👌👌
            </div> `;
        return
    }
    listTask.innerHTML = "";
    Object.values(tasks).forEach(task => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = task.texto
        if (task.estado) {
            clone.querySelector('.taskItems').classList.add('taskItemsConteiner');
            clone.querySelectorAll('.fa-solid')[0].classList.replace('fa-circle-check', 'fa-undo-alt');
            clone.querySelector('p').style.textDecoration = 'line-through';
        }
        clone.querySelectorAll('.fa')[0].dataset.id = task.id
        clone.querySelectorAll('.fa')[1].dataset.id = task.id
        fragment.appendChild(clone)
    })
    listTask.appendChild(fragment)
};

const btnAdd = (e) => {
    console.log(e.target.classList.contains('fa-circle-check'));
    if (e.target.classList.contains('fa-circle-check')) {
        // console.log(e.target.dataset.id)
        tasks[e.target.dataset.id].estado = true;
        addTask();
        // console.log(tasks);
    }

    if (e.target.classList.contains('fa-circle-xmark')) {
        delete tasks[e.target.dataset.id];
        addTask();
        // console.log(tareas);
    }
    if (e.target.classList.contains('fa-undo-alt')) {
        tasks[e.target.dataset.id].estado = false;
        addTask();
    }
    e.stopPropagation()
}

