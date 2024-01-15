export function articuloPelicula(pelicula){
     let aux = pelicula.activado ? "bg-[#6D38E0]" : ""
     return `
     <div class="p-2 mt-10 w-full bg-[#D0BDF6] flex flex-col rounded-2xl border border-[#6D38E0] lg:w-1/5 lg:min-h-[500px] lg:min-w-[350px]">
     <article class="flex flex-col w-full rounded-2xl lg:line-clamp-5">
        <img src="https://moviestack.onrender.com/static/${pelicula.image}" alt="${pelicula.title}" class="p-3 rounded-t-2xl">
        <h2 class="text-2xl font-bold p-3">${pelicula.title}</h2>
        <p class="text-xl italic p-3">${pelicula.tagline}</p>
        <p class="px-3 font-semibold">${pelicula.overview}</p>
    </article>
    <div class="flex justify-between ml-4 mr-4 items-center mt-3 lg:grow">
          <label class="flex items-center text-xl font-bold gap-x-2 text-[#6D38E0]">
          <button class="border-2 border-[#6D38E0] w-8 h-8 ${aux} boton_fav rounded-full" data-id="${pelicula.id}"></button>FAVS</label>
          <a href="/pagina_detallada/movie_details.html?id=${pelicula.id}" class="lg:hover:shadow-lg lg:hover:shadow-[#6D38E0] lg:hover:scale-105 rounded-xl flex items-center bg-[#6D38E0] text-white w-30 h-8 p-2 text-center font-bold">More Info</a>
     </div>
    </div>
     `
 }
 
export function articuloPeliculaVacio(){
     return `
     <a class="mt-10 w-full mb-[250px] md:mb-[400px] lg:hover:scale-105 lg:min-h-[450px] lg:min-w-[350px] lg:mb-0">
     <article class="min-h-[150px] bg-[#6D38E0] flex flex-col text-white w-full rounded-2xl border-2 border-white ]">
       <h1 class="text-3xl font-bold p-3 text-center">There is no match in the search</h1>
     </article>
     </a>
     `
}

export function crearOption(genero){
    return `
    <option value="${genero}">${genero}</option>
    `
}

// export function crearSelect(arrayPeliculas, contenedor){
     
//     let $generos = []
//     let $arrayTodosLosGeneros = arrayPeliculas.map(a => a.genres)
    
//     for (let a of $arrayTodosLosGeneros){
//          for (let genero of a){
//               if($generos.indexOf(genero) == -1)
//               $generos.push(genero)
//     }
//     console.log($generos)
// }
// return contenedor.innerHTML += $generos.map(a => crearOption(a))
// }

export function crearSelect(arrayPeliculas, contenedor){
     let $generos = arrayPeliculas.map(a => a.genres)
     let $arrayTodosLosGeneros = [... new Set ($generos.flat())]
     return contenedor.innerHTML += $arrayTodosLosGeneros.map(a => crearOption(a))
}

export function filtrarNombrePeliculas(arrayPeliculas, tituloDePelicula){
    return arrayPeliculas.filter(a => a.title.toLowerCase().includes(tituloDePelicula.toLowerCase()))
}

export function filtrarGeneroPeliculas(arrayPeliculas, generoPelicula){
    if(generoPelicula == "todo"){
         return arrayPeliculas
    }
    else{
         return arrayPeliculas.filter(a => a.genres.includes(generoPelicula))
    }
}

export function crearPaginaInformacionExtendida(pelicula){
    return `
    <div class="lg:h-2/4 lg:flex lg:w-full lg:items-center lg:justify-evenly lg:mt-10">
         <img src="https://moviestack.onrender.com/static/${pelicula.image}" class="mt-3 rounded-xl w-full lg:w-2/4 lg:h-full lg:object-cover lg:mt-0">
         <div class="flex flex-col lg:w-2/5 lg:justify-between items-center">
              <h1 class="font-bold text-3xl text-center lg:text-3xl">${pelicula.title}</h1>
              <p class="text-xl text-center italic">${pelicula.tagline}</p>
              <p class="mt-3 text-l mb-3 text-center font-bold">${pelicula.genres.join(", ")}</p>
              <p class="text-l text-center">${pelicula.overview}</p>
              <div class="md:flex md:gap-x-5">
              <a href="/Paginas/movies.html" class="text-center mt-5 bg-[#6D38E0] h-12 w-44 flex items-center justify-center font-bold text-white text-l p-1 hover:scale-105 hover:shadow-lg hover:shadow-[#6D38E0] rounded-xl border-2 border-white">GO TO MOVIES</a>
              <a href="/Paginas/favs.html" class="text-center mt-5 bg-[#6D38E0] h-12 w-44 flex items-center justify-center font-bold text-white text-l p-1 hover:scale-105 hover:shadow-lg hover:shadow-[#6D38E0] rounded-xl border-2 border-white">GO TO FAVS</a>
               </div>
         </div>
    </div>
    <table class="w-full border border-collapse text-center lg:w-2/4 lg:min-h-[200px]">
         <tr class="border">
              <th class="font-bold border border-black text-left p-2">Original Language</th>
              <td class="border border-black">${pelicula.original_language}</td>
         </tr>
         <tr>
              <th class="font-bold border border-black text-left p-2">Release Date</th>
              <td class="border border-black">${pelicula.release_date}</td>
         </tr>
         <tr>
              <th class="font-bold border border-black text-left p-2">Runtime</th>
              <td class="border border-black">${pelicula.runtime} mins</td>
         </tr>
         <tr>
              <th class="font-bold border border-black text-left p-2">Status</th>
              <td class="border border-black">${pelicula.status}</td>
         </tr>
    </table>
    <table class="w-full border border-collapse text-center lg:w-2/5 lg:min-h-[200px]">
         <tr>
              <th class="font-bold border border-black text-left p-2">Vote average</th>
              <td class="border border-black">${pelicula.vote_average.toFixed(2)}%</td>
         </tr>
         <tr>
              <th class="font-bold border border-black text-left p-2">Budget</th>
              <td class="border border-black">${pelicula.budget.toLocaleString("en-US", {style: "currency", currency: "USD"} )}</td>
         </tr>
         <tr>
              <th class="font-bold border border-black text-left p-2">Revenue</th>
              <td class="border border-black">${pelicula.revenue.toLocaleString("en-US", {style: "currency", currency: "USD"} )}</td>
         </tr>
    </table>
    `
}

export function comprobarID (array, idPelicula){
     let idArray = array.map(a => a.id)
     return idArray.includes(idPelicula)
}