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

let buscar= document.querySelector("#buscar")

function busca (){    
buscar.addEventListener("click", ()=>{ 
    let q_busca =document.querySelector(".q_busca").value;
    console.log(q_busca);

    let busqueda = tf.filter(elemento=>elemento == q_busca)
    console.dir(busqueda);

if (tf.includes(busqueda)=true){
for  (elemento of tf){
contenedor.innerHTML = `
<div class="card">
<img  class="poster" src= ${elemento.poster} alt="" id= ${elemento.id} title=${elemento.title}
</div>` 
}}})}


busca();
