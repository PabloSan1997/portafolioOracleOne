
export function verificar(entrada) {
    let mira = true;
    entrada.forEach((elemento) => {
      const padre = elemento.parentElement;
      const label = padre.firstElementChild;
      if (!elemento.value) {
        mira = !!elemento.value;
        label.style.color = "red";
      } else {
        label.style.color = "rgb(150, 150, 150)";
      }
    });
    return mira;
  }