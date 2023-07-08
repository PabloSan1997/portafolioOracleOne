import { verificar } from "./validar";

export function enviarInformacion() {
  const formulario = document.querySelector("form");
  const entrada = document.querySelectorAll(".entrada");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (verificar(entrada)) {
      alert("Se envio informacion");
      entrada.forEach((elemento) => {
        elemento.value = "";
      });
    }
  });
}
