let flag = true;

function dropDownMenu(botao){
    if(flag){
        document.getElementsByTagName("nav")[0].style = "display: flex;";
        botao.style = "margin-top: 0px;";
        flag = false;
    }else{
        document.getElementsByTagName("nav")[0].style = "@media only screen and (max-width: 768px) { display: none; }";
        botao.style = "margin-top: 15px;";
        flag = true;
    }
    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    console.log(width)
}