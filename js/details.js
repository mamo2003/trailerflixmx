let recuperodetalle=localStorage.getItem("pelicula");
console.log(recuperodetalle);

let detalle= document.querySelector("#detalle");

const volver = document.querySelector("div.emoji-volver");


function imprimedetalle (pel){
  const {titulo, poster, categoria, genero, resumen, reparto}  = recuperodetalle
if (recuperodetalle){
 detalle.innerHTML =`<section id="contenido">
                <h2>${titulo}</h2>
                <img src="${poster}" alt="${titulo}" title="${titulo}">
                <p class="info">SINOPSIS</p>
                <p>${resumen}</p>
                <p class="info">CATEGORÍA</p>
                <p>${categoria}</p>
                <p class="info">GÉNERO</p>
                <p>${genero}</p>
                <p class="info">REPARTO</p>
                <p>${reparto}</p>
            </section>`
}else{
detalle.innerHTML = `<div class="error-contenido">
            <h1>Parece que hubo un error :Intenta nuevamente en unos segundos...</h1>
            </div>`
}
}
imprimedetalle ()

volver.addEventListener("click", ()=> location.href = "index.html");