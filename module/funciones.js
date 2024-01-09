export function articuloPelicula(id, foto, nombre, tagline, descripcion){
     return `
     <a class="mt-10 w-full md:h-auto lg:w-1/5 lg:hover:scale-105 lg:min-h-[450px] lg:min-w-[350px]" href="/pagina_detallada/movie_details.html?id=${id}">
     <article class="bg-[#6D38E0] flex flex-col text-white w-full rounded-2xl border-2 border-white lg:3/4 lg:hover:shadow-lg lg:hover:shadow-[#6D38E0] lg:hover:scale-105 lg:min-h-[650px] lg:min-w-[350px]">
        <img src="${foto}" alt="${nombre}" class="p-3 rounded-t-2xl">
        <h2 class="text-2xl font-bold p-3">${nombre}</h2>
        <p class="text-xl italic p-3">${tagline}</p>
        <p class="p-3 font-semibold">${descripcion}</p>
    </article>
    </a>
     `
 }
 
export function articuloPeliculaVacio(){
     return `
     <a class="mt-10 w-full mb-[250px] lg:hover:scale-105 lg:min-h-[450px] lg:min-w-[350px] lg:mb-0">
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

export function crearSelect(arrayPeliculas, contenedor){
     
    let $generos = []
    let $arrayTodosLosGeneros = arrayPeliculas.map(a => a.genres)
    
    for (let a of $arrayTodosLosGeneros){
         for (let genero of a){
              if($generos.indexOf(genero) == -1)
              $generos.push(genero)
    }
}
return contenedor.innerHTML += $generos.map(a => crearOption(a))
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
         <img src="${pelicula.image}" class="mt-3 rounded-xl w-full lg:w-2/4 lg:h-full lg:object-cover lg:mt-0">
         <div class="flex flex-col lg:w-2/5 lg:justify-between items-center">
              <h1 class="font-bold text-3xl text-center lg:text-3xl">${pelicula.title}</h1>
              <p class="text-xl text-center italic">${pelicula.tagline}</p>
              <p class="mt-3 text-l mb-3 text-center font-bold">${pelicula.genres.join(", ")}</p>
              <p class="text-l text-center">${pelicula.overview}</p>
              <a href="/Paginas/movies.html" class="text-center mt-5 bg-[#6D38E0] h-12 w-44 flex items-center justify-center font-bold text-white text-l p-1 hover:scale-105 hover:shadow-lg hover:shadow-[#6D38E0] rounded-xl border-2 border-white">GO BACK TO MOVIES</a>
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