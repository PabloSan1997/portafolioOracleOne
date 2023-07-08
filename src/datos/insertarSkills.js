
import datos from './data.json';


const templateSkills =(escribir, url)=> `<div class="caja"><img src="${url}" alt="" class="logo"/><span>${escribir}</span></div>`;

export function generarScills(){
    const {skills} = datos;
    const elementos = skills.map(elemento=>templateSkills(elemento.texto, elemento.url)).join('');
    document.querySelectorAll('.area-cajas')[0].innerHTML = elementos;
    const {hobbies} = datos;
    const hobbiesElementos = hobbies.map(elemento=>templateSkills(elemento.texto, elemento.url)).join('');
    document.querySelectorAll('.area-cajas')[1].innerHTML = hobbiesElementos;
}
