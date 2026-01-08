// Inicialización del array de tareas
let listaDeTareas = [];

// Variable de control del bucle
let continuar = true;

// Bucle para ingresar tareas de forma interactiva
while (continuar) {
  let tarea = prompt("Ingrese una nueva tarea:");

  // Validación básica para evitar entradas vacías
  if (tarea && tarea.trim() !== "") {
    listaDeTareas.push(tarea.trim());
  } else {
    alert("La tarea no puede estar vacía.");
  }

  // Confirmar si desea agregar otra tarea
  continuar = confirm("¿Desea agregar otra tarea?");
}

// Mostrar la lista final en consola
console.log("--- Lista de Tareas Pendientes ---");

listaDeTareas.forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea}`);
});
