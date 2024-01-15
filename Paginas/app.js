const $divPeliculas = document.getElementById("divPeliculas")
const $nombrePelicula = document.getElementById("nombrePelicula")
const $selectGenero = document.getElementById("selectGenero")


import { articuloPelicula } from "/module/funciones.js" 
import {crearSelect} from "/module/funciones.js"
import {filtrarGeneroPeliculas} from "/module/funciones.js"
import {filtrarNombrePeliculas} from "/module/funciones.js"
import {articuloPeliculaVacio} from "/module/funciones.js"


crearSelect(peliculas, $selectGenero)


let $stringPeliculas = peliculas.map(a => articuloPelicula(a.id, a.image, a.title, a.tagline, a.overview)).join(" ")
$divPeliculas.innerHTML = $stringPeliculas
let $stringPeliculasFiltradas = ""

$nombrePelicula.addEventListener("input", e => {
     let $peliculasFiltradasNombre = filtrarNombrePeliculas(peliculas, $nombrePelicula.value)
     let $peliculasFiltradasGenero = filtrarGeneroPeliculas($peliculasFiltradasNombre, $selectGenero.value)
     $stringPeliculasFiltradas = $peliculasFiltradasGenero.map(a => articuloPelicula(a.id, a.image, a.title, a.tagline, a.overview)).join(" ")
     if ($stringPeliculasFiltradas == ""){
          $stringPeliculasFiltradas = articuloPeliculaVacio()
     }
     $divPeliculas.innerHTML = $stringPeliculasFiltradas
})

$selectGenero.addEventListener("change", e => {
     let $peliculasFiltradasNombre = filtrarNombrePeliculas(peliculas, $nombrePelicula.value)
     let $peliculasFiltradasGenero = filtrarGeneroPeliculas($peliculasFiltradasNombre, $selectGenero.value)
     $stringPeliculasFiltradas = $peliculasFiltradasGenero.map(a => articuloPelicula(a.id, a.image, a.title, a.tagline, a.overview)).join(" ")
     if ($stringPeliculasFiltradas == ""){
          $stringPeliculasFiltradas = articuloPeliculaVacio()
     }
     $divPeliculas.innerHTML = $stringPeliculasFiltradas
})


