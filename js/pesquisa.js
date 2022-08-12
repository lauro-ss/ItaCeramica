const buscador = document.getElementById("buscador");
const conteudo_buscado = document.getElementById("conteudo_buscado");
const lista_buscada = document.getElementsByClassName("lista_buscada");

buscador.addEventListener("input", function(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let conteudos = this.responseText.split('\n')
        conteudos.forEach(conteudo => {
            if(buscador.value.match(conteudo)){
                const lista_buscada = document.getElementById("lista_buscada");
                lista_buscada.className = "dropdown-menu show";
                lista_buscada.innerHTML = '<a class="dropdown-item linkBusca" href="#">Piso Cinza Polido</a>';
            }
        });
        if(buscador.value != ""){
            const lista_buscada = document.getElementById("lista_buscada");
            lista_buscada.className = "dropdown-menu show";
            lista_buscada.innerHTML = '<a class="dropdown-item linkBusca show" href="#">Piso Cinza Polido</a>';
        }
        /*if(buscador.value != ""){
            conteudo_buscado.className = "show";
            for(let i = 0; i < lista_buscada.length; i++){
                lista_buscada[i].className = "dropdown-menu lista_buscada show";
                lista_buscada[i].style = "display: flex;";
            }
        }*/
      }
    xhttp.open("GET", "./txt/conteudos.txt");
    xhttp.send();
    buscador.value;
    if(buscador.value == ""){
        lista_buscada.innerHTML = "";
        lista_buscada.className = "dropdown-menu";
    }
})
