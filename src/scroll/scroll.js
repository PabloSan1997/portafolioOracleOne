

export function effectoScroll(headerLength, steps){
    const menu = document.querySelectorAll('a');
    const tiempo = 10;
    menu.forEach(elemnto=>{
        elemnto.addEventListener('click', (e)=>{
            e.preventDefault();
            const href = e.target.getAttribute('href');
            const ir = document.querySelector(href);
            let entrada = window.scrollY;
            const pocision = ir.offsetTop - headerLength;
            const intervalo = setInterval(()=>{
                if(entrada>pocision){
                    entrada -= steps;
                    if(entrada-pocision<=steps){
                        entrada = pocision;
                    }
                    window.scrollTo(0, entrada);
                }else if(entrada<pocision){
                    entrada += steps;
                    if(pocision - entrada<=steps){
                        entrada = pocision;
                    }
                    window.scrollTo(0, entrada);
                }else{
                    clearInterval(intervalo);
                }
            },tiempo);
        });
    });
   
}