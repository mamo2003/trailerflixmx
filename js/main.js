
function pedirinfo (){
let pedirinfo = new XMLHttpRequest();
pedirinfo.open ("GET","./js/trailerflix.json");
pedirinfo.responseType="json";
pedirinfo.send();
pedirinfo.addEventListener("load",() =>{
    if(pedirinfo.status !=200){alert("error")}
    else{
console.log(pedirinfo.response);}
let pel =pedirinfo.response;

generarinterfaz(pel);

console.log(pel)
direccionar(pel)
});
}

pedirinfo();


function generarinterfaz (pel) {
    let contenedor= document.querySelector("#contenido")
    if (pel.length>0){
        for (const elemento of pel) {
        contenedor.innerHTML += `
            <div class="card">
            <img  class="poster "src= ${elemento.poster} alt="" id= ${elemento.id} title=${elemento.title}
            </div>`}
    }else{ contenedor.innerHTML= `<h1>error al cargar la pagina , vuelva  intentarlo en unos segundos</h1>` }
}



function direccionar() {
let eliges= document.querySelectorAll(".poster");
console.log(eliges);
for (const elige of eliges) {
        elige.addEventListener("click",(evento)=>{
        idelemento = evento.target.id;    
        console.dir(idelemento);
        let busqueda = eliges.find(elemento => elemento.id == idelemento){
        console.log(busqueda);
        localStorage.setItem("pelicula",JSON.stringify(busqueda));
        window.location="/detalle.html"
        localStorage.getItem("pelicula")}
);}
}




let buscar= document.querySelector("#buscar")

// function busca (){    
// buscar.addEventListener("click", ()=>{ 
//     let q_busca =document.querySelector(".q_busca").value;
//     console.log(q_busca);

//     let busqueda = pedirinfo.filter(elemento=>elemento == q_busca)
//     console.dir(busqueda);

// if (pedirinfo.includes(busqueda)=true){
// for  (elemento of tf){
// contenedor.innerHTML = `
// <div class="card">
// <img  class="poster" src= ${elemento.poster} alt="" id= ${elemento.id} title=${elemento.title}
// </div>` 
// }}})}


// busca();







// busca();



// pel.map(elemento => {
//     contenedor.innerHTML += `
//         <div class="card">
//         <img  class="poster "src= ${elemento.poster} alt="" id= ${elemento.id} title=${elemento.title}
//         </div>`})
