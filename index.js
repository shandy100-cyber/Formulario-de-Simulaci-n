import {
  inputNombre,
  inputApellido,
  inputEmail,
  button,
  estudiantes,
} from "./informacionEstudiante.js";
const comprobarDatos = () => {
  if (
    inputNombre.value.trim() == "" ||
    inputApellido.value.trim() == "" ||
    inputEmail.value.trim() == ""
  ) {
    alert(`Has dejado campos vacíos.`);
  } else if (
    inputNombre.value.trim() != "" &&
    inputApellido.value.trim() != "" &&
    inputEmail.value.trim() != ""
  ) {
    let encontrado = false;
    for (let estudiante of estudiantes) {
      if (
        estudiante[0].toLowerCase() ===
          inputNombre.value.trim().toLowerCase() &&
        estudiante[1].toLowerCase() ===
          inputApellido.value.trim().toLowerCase() &&
        estudiante[2].toLowerCase() === inputEmail.value.trim().toLowerCase()
        //   Aqui se muestra como recorrer correctamente los valores de un array que esta dentro de otro array
      ) {
        console.log(`Este estudiante existe:`);
        console.log(`Nombre: ${inputNombre.value}`);
        console.log(`Apellido: ${inputApellido.value}`);
        console.log(`Email: ${inputEmail.value}`);
        encontrado = true;
        inputNombre.value = "";
        inputApellido.value = "";
        inputEmail.value = "";
        alert("Se ha encontrado el estudiante");
        break;
      }
    }

    if (!encontrado) {
      console.log("El estudiante no existe");
      alert("El estudiante no existe");
    }
  }
};

button.addEventListener("click", () => {
  comprobarDatos();
});
