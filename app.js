const $divPeliculas = document.getElementById("divPeliculas")

function articuloPelicula(foto, nombre, tagline, descripcion){
     return `
     <article class="bg-zinc-400 mt-10 w-full rounded-2xl md:w-2/5 md:h-auto md:line-clamp-6 lg:w-1/5 lg:hover:scale-105">
        <img src="${foto}" alt="${nombre}" class="p-2">
        <h2 class="text-2xl font-bold p-2">${nombre}</h2>
        <p class="text-xl italic p-2">${tagline}</p>
        <p class="text-l p-2 font-semibold">${descripcion}</p>
    </article>
     `
}

const stringPeliculas = peliculas.map(a => articuloPelicula(a.image, a.title, a.tagline, a.overview)).join(" ")

$divPeliculas.innerHTML += stringPeliculas