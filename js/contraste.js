const botaoContraste = document.getElementById("botaoContraste");
let flag = true;

botaoContraste.addEventListener("click", () => {
    if(flag){
        document.getElementById("botaoContraste").innerHTML = '<i class="bi bi-moon-fill"></i>';
        flag = false;
    }
    else{
        document.getElementById("botaoContraste").innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        flag = true;
    }

    document.body.classList.toggle('dark');
    document.getElementsByTagName("main")[0].classList.toggle('dark');
    document.getElementById('mensagem_footer').classList.toggle('dark');
    document.getElementById('atendimento').classList.toggle('dark');
    

    let vetorClasses = document.getElementsByClassName("link_produtos");
    for(let i = 0; i < vetorClasses.length; i++ )
        vetorClasses[i].classList.toggle('dark');
    
    vetorClasses = document.getElementsByClassName("redes_social_link");
    for(let i = 0; i < vetorClasses.length; i++ )
        vetorClasses[i].classList.toggle('dark');
})