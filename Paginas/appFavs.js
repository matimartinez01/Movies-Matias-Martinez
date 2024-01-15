const $divPeliculas = document.getElementById("divPeliculas")

import { articuloPelicula } from "/module/funciones.js"
import { comprobarID } from "/module/funciones.js"
import { articuloPeliculaVacio } from "/module/funciones.js"


let peliculasFavs = JSON.parse(localStorage.getItem('peliculasFavs'))

let peliculasFavs2 = peliculasFavs

let peliculasFavsString = peliculasFavs.map(a => articuloPelicula(a)).join(" ")

$divPeliculas.innerHTML = peliculasFavsString
if (peliculasFavs.length == 0){
     let peliculaVacio = articuloPeliculaVacio()
     $divPeliculas.innerHTML = peliculaVacio
     
}


function funcionamientoBoton(botonid){
    const $boton = document.querySelectorAll(`.${botonid}`)
    for (let a of $boton){
         a.addEventListener("click", (e) => {
              let dataset = e.target.dataset
              let peliculaDelBoton = peliculasFavs2.find(a => a.id == dataset.id)
              peliculaDelBoton.activado = !peliculaDelBoton.activado
              let clasesBoton = a.classList
              let clasesToggle = clasesBoton.toggle("bg-[#6D38E0]")
              Swal.fire({
               title: "Are you sure to remove the movie from FAVS?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, remove it!"
             }).then((result) => {
               if (result.isConfirmed) {
                 Swal.fire({
                   title: "Deleted!",
                   text: "Your movie has been removed from FAVS.",
                   icon: "success"
                 });
                 peliculasFavs = peliculasFavs.filter(a => a.id != peliculaDelBoton.id)
                 localStorage.setItem('peliculasFavs', JSON.stringify(peliculasFavs))
                 e.target.parentElement.parentElement.parentElement.remove()               
               }
               else{
                    peliculaDelBoton.activado = !peliculaDelBoton.activado
                    let clasesToggle = clasesBoton.toggle("bg-[#6D38E0]")
                    console.log(peliculaDelBoton)
               }
             });
         })}
}

funcionamientoBoton("boton_fav")

