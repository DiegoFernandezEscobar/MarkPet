const btnMascotas=document.getElementById("btn-mascotas"); 
const btnServicios=document.getElementById("btn-servicios");
const grid= document.getElementById('grid');
const esDipositivomovil=()=>{
    if (window.innerWidth<=760){
        return true;
    }else{
        return false;
    }
}

const contenedorEnlacesNav=document.querySelector('#menu .contenedor-enlaces-nav')
const btnCerrarMenu=document.getElementById('btn-menu-cerrar')
const contenedorSubcategoria=document.querySelector('#grid .contenedor-subcategorias')
const contenedorLogo=document.getElementById('contenedor-logo')

btnMascotas.addEventListener('mouseover',()=>{
    if(!esDipositivomovil()){
        grid.classList.add('activo');
    }
});

btnServicios.addEventListener('mouseover',()=>{
    if(!esDipositivomovil()){
        grid.classList.remove('activo');
    }
});

contenedorLogo.addEventListener('mouseover',()=>{
    if(!esDipositivomovil()){
        grid.classList.remove('activo');
    }
});

grid.addEventListener("mouseleave",()=>{
    if(!esDipositivomovil()|| btnServicios ){
        grid.classList.remove('activo');
    }
})

document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('mouseenter',(e)=>{
        if(!esDipositivomovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria==e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            })

        }
        
    })
})

// disposotivos moviles

document.querySelector('#btn-menu-barras').addEventListener('click',(e)=>{
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow="visible";
    }else{
        contenedorEnlacesNav.classList.add('activo')
        document.querySelector('body').style.overflow="hidden";
    }
})


btnMascotas.addEventListener('click',(e)=>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
})


document.querySelector('#grid .categorias .btn-regresar').addEventListener('click',(e)=>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo')
})


document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if(esDipositivomovil()){
            contenedorSubcategoria.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria)=> {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria==e.target.dataset.categoria){
                    categoria.classList.add('activo')

                }
            })

        }
    });
});

document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=>{

    boton.addEventListener('click',(e)=>{
        e.preventDefault();
        contenedorSubcategoria.classList.remove('activo');
        
    })
})

btnCerrarMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento)=>{
        elemento.classList.remove('activo')
    })

    document.querySelector('body').style.overflow= "visible";
})