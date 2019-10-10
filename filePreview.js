const archivo = document.getElementById('archivo'),
    contenido = document.getElementById('content')

const obtenerArchivo = () => {

    let imagenes = archivo.files

    for (let f = 0; f < imagenes.length; f++) {
        var leerArchivo = new FileReader()

        leerArchivo.readAsDataURL(imagenes[f])
        leerArchivo.addEventListener('load', mostrar)

    }

}

const mostrar = e => {

    let url = e.target.result;

    contenido.innerHTML += `
        <div class="contenedorImagen">
            <img src="${url}" class="image-items">
        </div>
    `

}

archivo.addEventListener('change', obtenerArchivo)