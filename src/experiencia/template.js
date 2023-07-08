

export function templateExperiencia({nombre, descripcion, urlImagen, urlRepositorio}){
    const area_experiencia = document.createElement('div');
    area_experiencia.classList.add('area-experiencia');

    const imagen = `<div class="area-imagen"><img src="${urlImagen}" alt=""></div>`
    area_experiencia.innerHTML = imagen;

    const area_informacion = document.createElement('div');
    area_informacion.classList.add('area-informacion');

    const informacion = `<h3>${nombre}</h3><p class="des">${descripcion}</p>`;
    area_informacion.innerHTML = informacion;

    const boton = document.createElement('button');
    boton.classList.add('botonMandar');
    boton.textContent = 'Repositorio';

    boton.addEventListener('click', ()=>mandar(urlRepositorio));

    area_informacion.appendChild(boton);

    area_experiencia.appendChild(area_informacion);

    return area_experiencia;
}

function mandar(url){
    window.location.href = url;
}
