let contenedor= document.querySelector("#contenido")

function generarinterfaz () {
if (tf.length>0){
    for (const elemento of tf) {
    contenedor.innerHTML += `
        <div class="card">
        <img  class="poster "src= ${elemento.poster} alt="" id= ${elemento.id} title=${elemento.title}
        </div>`}
}else{ contenedor.innerHTML= `<h1>error al cargar la pagina , vuelva  intentarlo en unos segundos</h1> `
}
}
generarinterfaz()
direccionar()


function direccionar() {
let peliculas = document.querySelectorAll(".poster");
for (const pelicula of peliculas) {
        pelicula.addEventListener("click" ,(evento)=>{
        let idelemento = evento.target.id;
        let busqueda = tf.find(elemento=>elemento.id == idelemento);
        localStorage.setItem("pelicula",JSON.stringify(busqueda));
        window.location="/detalle.html"
        JSON.parse(localStorage.getItem("pelicula"));
    });}
}


// let buscar= document.querySelector("#buscar")
// let q_busca = document.querySelector("#q_busca")


// function busca (){    
// buscar.addEventListener("click", (q_busca)=>{ 
//     let idelemento = q_busca.target.id;
//     let busqueda = tf.filter(elemento=>elemento.id == idelemento);
// if (tf.includes(idelemento)==true){
//  for  (const elemento of tf){
// contenedor.innerHTML = `
// <div class="card">
// <img  class="poster" src= ${elemento.poster} alt="" id= ${elemento.id} title=${elemento.title}
// </div>` 
// }}})}


// busca();
