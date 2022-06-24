window.addEventListener('load', function(){
    
    let eliminarProducto = document.querySelectorAll('.product-delete');
   
    eliminarProducto.forEach(form => {
        form.addEventListener('click', e => {
            e.preventDefault();
            Swal.fire({
                title: 'Quieres eliminar el producto?',
                text: "No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Borrar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
              })
            
        })
    })
});