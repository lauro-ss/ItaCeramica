const buscador = document.getElementById("buscador");
const conteudo_buscado = document.getElementById("conteudo_buscado");
const lista_buscada = document.getElementsByClassName("lista_buscada");

buscador.addEventListener("input", function(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //console.log(this.responseText);
        if(buscador.value != ""){
            conteudo_buscado.className = "show";
            for(let i = 0; i < lista_buscada.length; i++){
                lista_buscada[i].className = "dropdown-menu lista_buscada show";
                lista_buscada[i].style = "display: flex;";
            }
        }
      }
    xhttp.open("GET", "./txt/teste.txt");
    xhttp.send();
    buscador.value;
    if(buscador.value == ""){
        conteudo_buscado.className = "";
        for(let i = 0; i < lista_buscada.length; i++){
            lista_buscada[i].className = "dropdown-menu lista_buscada";
            lista_buscada[i].style = "";
        }
    }
})
