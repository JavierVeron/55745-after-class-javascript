const renderTareas = () => {
    let contenido = document.getElementById("contenido");
    let contenidoHTML = `<p class="py-5"><img src="https://www.pngmart.com/files/8/List-PNG-Transparent-Picture.png" alt="Tareas" class="img-fluid"></p>`;
    
    if (tareas.length > 0) {
        let i=0;
        let tareaChequeada;
        let tareaCompleada;
        contenidoHTML = `<table class="table">`;

        tareas.forEach(item => {
            contenidoHTML += `<tr>
                <td>`;

                if (item.completada) {
                    tareaChequeada = "checked";
                    tareaCompleada = "text-decoration-line-through";
                } else {
                    tareaChequeada = "";
                    tareaCompleada = "";
                }

                contenidoHTML += `<div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="tarea${i}" ${tareaChequeada} onclick="completarTarea('${item.nombre}');">
                <label class="form-check-label ${tareaCompleada}" for="tarea${i}">${item.nombre}</label>
                </div>
                </td>
                <td class="text-end">
                <button type="button" class="btn-close" aria-label="Close" onclick="eliminarTarea('${item.nombre}');"></button>
                </td>
            </tr>`;
        });

        contenidoHTML += `<tr>
        <td>Total Tareas: ${tareas.length}</td>
        <td class="text-end"><button class="btn btn-light" onclick="limpiarTareas();">Limpiar</button>
        </tr>
        </table>`;
    }

    contenido.innerHTML = contenidoHTML;
}

const agregarTarea = () => {
    let tarea = document.getElementById("tarea");
    
    if (tarea.value == "") {
        tarea.classList.add("animate__animated", "animate__tada");
        return false; //Detengo la ejecución de mi script
    } else {
        tarea.classList.remove("animate__animated", "animate__tada");
    }

    const nuevaTarea = {nombre:tarea.value, completada:false}; //Creo un nuevo Objeto
    tareas.push(nuevaTarea); //Agregar el objeto creado al array Tareas
    tarea.value = ""; //Limpiar el contenido del campo Tarea
    renderTareas(); //Renderizar las Tareas
}

const completarTarea = (nombre) => {
    let tarea = tareas.find(item => item.nombre === nombre); //Buscar en el array un elemento que coincida con ese nombre

    if (tarea.completada) {
        tarea.completada = false;
    } else {
        tarea.completada = true;
    }

    renderTareas();
}

const eliminarTarea = (nombre) => {
    tareas = tareas.filter(item => item.nombre !== nombre);
    renderTareas();
}

const limpiarTareas = () => {
    tareas = [];
    renderTareas();
}