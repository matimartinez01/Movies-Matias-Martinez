import {crearPaginaInformacionExtendida} from "/module/funciones.js"

const $mainFav = document.getElementById("mainFav")
const queryParams = new URLSearchParams (location.search)
const id = queryParams.get("id")

let options = {
    method: 'GET',
    headers: {
         'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}

fetch(`https://moviestack.onrender.com/api/movies`, options)
.then(response => response.json())
.then(a => {
    let pelicula = a.movies
    pelicula = pelicula.find(a => a.id == id)
    pelicula = [pelicula]
    pelicula = pelicula.map(a => crearPaginaInformacionExtendida(a)).join(" ")
    $mainFav.innerHTML += pelicula
})



