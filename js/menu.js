const btnmenu = document.getElementById('btn-menu');




function mostrarMenu(){
    
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
    
    

}



btnmenu.addEventListener('click', mostrarMenu);

