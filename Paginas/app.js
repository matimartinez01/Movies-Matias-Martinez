const $divPeliculas = document.getElementById("divPeliculas")
const $nombrePelicula = document.getElementById("nombrePelicula")
const $selectGenero = document.getElementById("selectGenero")

import { articuloPelicula } from "/module/funciones.js" 
import {crearSelect} from "/module/funciones.js"
import {filtrarGeneroPeliculas} from "/module/funciones.js"
import {filtrarNombrePeliculas} from "/module/funciones.js"
import {articuloPeliculaVacio} from "/module/funciones.js"
import {comprobarID} from "/module/funciones.js"


let options = {
     method: 'GET',
     headers: {
          'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
     }
}

let peliculasFavs = JSON.parse(localStorage.getItem('peliculasFavs')) || []


//Crear Select
fetch(`https://moviestack.onrender.com/api/movies`, options).
then(response => response.json()).
then(a => {
     let peliculasSelectGenero = a.movies
     crearSelect(peliculasSelectGenero, $selectGenero)
})


//Crear articulo de peliculas
let stringPeliculas = ""
fetch(`https://moviestack.onrender.com/api/movies`, options).
then(response => response.json()).
then(a => {
     //Paso 1 - Guardo las movies en la variable peliculasAPI
     let peliculasAPI = a.movies
     //Paso 2 - Le agrego un key = value de activado = false a todas las peliculas
     for (let peliculaActivado of peliculasAPI){
          if(comprobarID(peliculasFavs, peliculaActivado.id)){
               peliculaActivado.activado = true
          }else{
               peliculaActivado.activado = false
          }
     }
     //Paso 3 - Creo el array de articulos de peliculas, los convierto en string y los imprimo en pantalla
     let stringPeliculas = peliculasAPI.map(a => articuloPelicula(a)).join(" ")
     $divPeliculas.innerHTML = stringPeliculas
     //Paso 4 - Creo una funcion que recibe un parametro
     // Capturo todos los botones que tengan una clase del parametro ingresado, en este caso la clase hola
     // A cada $botonardo le agrego un EventListener, que captura su dataset.
     // Busco la pelicula del botón seleccionado con su mismo id, le cambio el valor de activado por el contrario en el array peliculasAPI
     // Le hago un toggle de bg al boton
     // Capturo todos los botones de los articulos con el parametro ingresado
     function funcionamientoBoton(botonid){
          const $botonardo = document.querySelectorAll(`.${botonid}`)
          for (let a of $botonardo){
               a.addEventListener("click", (e) => {
                    let dataset = e.target.dataset
                    let peliculaDelBoton = peliculasAPI.find(a => a.id == dataset.id)
                    peliculaDelBoton.activado = !peliculaDelBoton.activado
                    let clasesBoton = a.classList
                    let clasesToggle = clasesBoton.toggle("bg-[#6D38E0]")
                    if(peliculaDelBoton.activado && !comprobarID(peliculasFavs, peliculaDelBoton.id)) {
                         peliculasFavs.push(peliculaDelBoton)
                    }
                    if(!peliculaDelBoton.activado){
                         peliculasFavs = peliculasFavs.filter(a => a.id != peliculaDelBoton.id)
                    }
                    localStorage.setItem('peliculasFavs', JSON.stringify(peliculasFavs))
               })}
     }
     funcionamientoBoton("hola")
    

     //Paso 6 - Filtro por nombre la pelicula con el array peliculasAPI que tiene el valor activado en true o false
     //       - Creo el articulo de las peliculas filtradas
     $nombrePelicula.addEventListener("input", e => {
          let peliculasFiltradasNombre = filtrarNombrePeliculas(peliculasAPI, $nombrePelicula.value)
          let peliculasFiltradasGenero = filtrarGeneroPeliculas(peliculasFiltradasNombre, $selectGenero.value)
          let stringPeliculasFiltradas = peliculasFiltradasGenero.map(a => articuloPelicula(a)).join(" ")
          if (stringPeliculasFiltradas == ""){
               stringPeliculasFiltradas = articuloPeliculaVacio()
          }
          $divPeliculas.innerHTML = stringPeliculasFiltradas
          funcionamientoBoton("hola")
     })
     $selectGenero.addEventListener("change", e => {
          let peliculasFiltradasNombre = filtrarNombrePeliculas(peliculasAPI, $nombrePelicula.value)
          let peliculasFiltradasGenero = filtrarGeneroPeliculas(peliculasFiltradasNombre, $selectGenero.value)
          let stringPeliculasFiltradas = peliculasFiltradasGenero.map(a => articuloPelicula(a)).join(" ")
          if (stringPeliculasFiltradas == ""){
               stringPeliculasFiltradas = articuloPeliculaVacio()
          }
          $divPeliculas.innerHTML = stringPeliculasFiltradas
          funcionamientoBoton("hola")
     })
})