
const btnmoto = document.getElementById('btn-menu-motos');

function mostrarMenuMoto(){
    const menumoto = document.getElementById('menu-motos');
    
    
    menumoto.classList.toggle('active');
}





btnmoto.addEventListener('click', mostrarMenuMoto);

