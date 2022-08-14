const botaoContraste = document.getElementById("botaoContraste");
let flag = true;

const constrate_flag = sessionStorage.getItem("contraste");
if(constrate_flag === "1"){
    document.getElementById("botaoContraste").innerHTML = '<i class="bi bi-moon-fill"></i>';
    flag = false;
    constrate();
}
if(constrate_flag === "2"){
    document.getElementById("botaoContraste").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    flag = true;
}

function constrate(){
    document.body.classList.toggle('dark');
    /*index*/
    if(document.getElementsByTagName("main")[0])
        document.getElementsByTagName("main")[0].classList.toggle("dark");

    document.getElementById("mensagem_footer").classList.toggle("dark");
    document.getElementById("atendimento").classList.toggle("dark");
    /*produto*/
    if(document.getElementById("infor_produto"))
        document.getElementById("infor_produto").classList.toggle("dark");
    if(document.getElementById("text_centrado"))
        document.getElementById("text_centrado").classList.toggle("dark");
    if(document.getElementById("label_quantidade"))
        document.getElementById("label_quantidade").classList.toggle("dark");
    
    /*formulario*/
    let vetorClasses = document.getElementsByClassName("contraste-c")
    for(let i = 0; i < vetorClasses.length; i++ )
        vetorClasses[i].classList.toggle("dark");

    /*footer*/
    vetorClasses = document.getElementsByClassName("link_produtos");
    for(let i = 0; i < vetorClasses.length; i++ )
        vetorClasses[i].classList.toggle("dark");
    
    vetorClasses = document.getElementsByClassName("redes_social_link");
    for(let i = 0; i < vetorClasses.length; i++ )
        vetorClasses[i].classList.toggle("dark");
}

botaoContraste.addEventListener("click", () => {
    if(flag){
        document.getElementById("botaoContraste").innerHTML = '<i class="bi bi-moon-fill"></i>';
        sessionStorage.setItem("contraste","1");
        flag = false;
    }
    else{
        document.getElementById("botaoContraste").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        sessionStorage.setItem("contraste","2");
        flag = true;
    }
    constrate();
})