import data from "./data.json";


const formacionUrl = data.formacion;

const formacionImagenes = document.querySelectorAll('.formacion-imagen');

export function colocarImagenes(){
    for(let i=0;i<formacionImagenes.length;i++){
        formacionImagenes[i].src = formacionUrl[i];
    }
}