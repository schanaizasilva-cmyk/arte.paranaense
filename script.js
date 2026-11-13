const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click",curtir);
    function curtir (){
        const contador = botaoCurtir.querySelector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;
        }
            else{
                contador.textContent--;
                curtiu = false;
            }
        }
    }
);

const btnTema=document.queryselector(".btn-tema");
btnTema.addEventListener("click", mudar tema);
function mudarTema(){
    document.body.classList.toggle("rema-escuro")
}

