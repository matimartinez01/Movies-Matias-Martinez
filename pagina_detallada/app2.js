import {crearPaginaInformacionExtendida} from "/module/funciones.js"

const $mainFav = document.getElementById("mainFav")
const queryParams = new URLSearchParams (location.search)
const id = queryParams.get("id")
let pelicula = peliculas.filter(a => a.id == id)
pelicula = pelicula.map(a => crearPaginaInformacionExtendida(a)).join(" ")
$mainFav.innerHTML += pelicula
