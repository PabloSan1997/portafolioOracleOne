import { templateExperiencia } from "./template";
import {experiencia} from '../datos/data.json';


export function agregarExperiencia(){
    const contenedor = document.querySelector('#experiencia');
    let i = 0;
   experiencia.forEach(elemento => {
        const ver = templateExperiencia(elemento);
        if(i%2!==0){
            ver.classList.add('voltear');
        }
        i++;
        contenedor.appendChild(ver);
    });
}