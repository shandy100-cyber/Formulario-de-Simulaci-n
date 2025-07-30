import {
  inputNombre,
  inputApellido,
  inputEmail,
  button,
  estudiantes,
} from "./informacionEstudiante.js";

const contenedorTarjeta = document.querySelector(
  ".tarjeta-estudiante__container"
);

const formulario = document.querySelector(".form");

button.addEventListener("click", () => {
  let error = comprobacion();
  if (error) {
    return;
  } else {
    addStudent();
    createCard();
    resetearForm();
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

const createCard = () => {
  const estudiante = formatear();
  let fragmento = document.createDocumentFragment();
  const contenedor = document.createElement("ARTICLE");
  contenedor.classList.add("tarjeta-estudiante");
  const img = document.createElement("IMG");
  img.classList.add("tarjeta-estudiante__img", "imagen");
  img.src = "/img_prueba.jpg";
  const nombre = document.createElement("H2");
  nombre.classList.add("tarjeta-estudiante__titulo", "nombre");
  nombre.textContent = `Nombre: ${mayuscula(estudiante.nombre)}`;
  const apellido = document.createElement("H3");
  apellido.classList.add("tarjeta-estudiante__subtitulo", "apellido");
  apellido.textContent = `Apellido: ${mayuscula(estudiante.apellido)}`;
  const email = document.createElement("H3");
  email.classList.add("tarjeta-estudiante__subtitulo", "email");
  email.textContent = ` Correo Electrónico: ${estudiante.email}`;
  for (let i = 0; i < 4; i++) {
    const div = document.createElement("DIV");
    div.classList.add("tarjeta-estudiante__div");
    contenedor.appendChild(div);
    if (i == 0) {
      div.appendChild(img);
    } else if (i == 1) {
      div.appendChild(nombre);
    } else if (i == 2) {
      div.appendChild(apellido);
    } else if (i == 3) {
      div.appendChild(email);
    }
  }

  fragmento.appendChild(contenedor);
  contenedorTarjeta.appendChild(fragmento);
  alert("Se ha generado una tarjeta de estudiante");
};

const mayuscula = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
