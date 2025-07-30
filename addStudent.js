import {
  inputNombre,
  inputApellido,
  inputEmail,
  button,
  estudiantes,
} from "./informacionEstudiante.js";

button.addEventListener("click", () => {
  let error = comprobacion();
  if (error) {
    return;
  } else {
    addStudent();
  }
});

// FUNCIONES INICIALES DEL BOTON DE REGISTRO
const resetearForm = () => {
  const inputs = formulario.querySelectorAll(".form__input");
  inputs.forEach((input) => {
    input.value = "";
  });
};

const formatear = () => {
  const nombreEstudiante = inputNombre.value.toLowerCase();
  const apellidoEstudiante = inputApellido.value.toLowerCase();
  const emailEstudiante = inputEmail.value.toLowerCase();

  return {
    nombre: nombreEstudiante.trim(),
    apellido: apellidoEstudiante.trim(),
    email: emailEstudiante.trim(),
  };
};

const comprobacion = () => {
  const estudiante = formatear();
  let error = false;
  const mostrarError = (mensajeError) => {
    alert(mensajeError);
    resetearForm();
    error = true;
  };

  switch (true) {
    case estudiante.nombre.length < 5:
      mostrarError("El nombre es demasiado corto");
      break;
    case estudiante.nombre.length > 40:
      mostrarError("El nombre es demasiado largo");
      break;

    case estudiante.apellido.length < 5:
      mostrarError("El apellido es demasiado corto");
      break;
    case estudiante.apellido.length > 50:
      mostrarError("El apellido es demasiado largo");
      break;

    case estudiante.email.length < 5:
      mostrarError("El Email es demasiado corto");
      break;
    case estudiante.email.length > 40:
      mostrarError("El Email es demasiado largo");
      break;

    default:
      alert("Se han llenado los campos correctamente");
  }
  return error;
};

const addStudent = () => {
  console.log("Estado Anterior de la Lista:");
  console.log(...estudiantes);
  const estudiante = formatear();
  estudiantes.push([estudiante.nombre, estudiante.apellido, estudiante.email]);
  console.log("Estado Actual de la Lista:");
  console.log(...estudiantes);
};
