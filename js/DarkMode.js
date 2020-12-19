let body = document.getElementsByTagName('body');
let h1 = document.getElementById('titulo-principal');
let botoes = document.querySelectorAll('buttons');
let caixa = document.querySelectorAll('.box');
let score1 = document.querySelector('#scoreboard-1');
let score2 = document.querySelector('#scoreboard-2');
let luz = document.querySelector('#luz');
let placar = document.querySelector('#placar');
let ElementO = document.querySelectorAll('.o');
let mensagem = document.querySelector('#message p');

let luzOn = true;

// evento dark mode

luz.addEventListener('click', function(){

    if(luzOn == true){
        // se for verdadeiro, desligue a luz

        h1.style.color = 'white';

        body[0].style.backgroundColor = '#1b1919';
        body[0].style.color = 'white';

        for(let i = 0; i < caixa.length; i++){
            caixa[i].style.borderColor = 'white';
        };

        mensagem.style.backgroundColor = 'white';
        mensagem.style.color = 'black';
        placar.style.color = 'white';
        score1.style.color = 'white';
        score2.style.color = 'white';

        luzOn = false;

    } else if(luzOn == false){
        // se for falso, ligue a luz

        h1.style.color = 'black';

        body[0].style.backgroundColor = 'white';
        body[0].style.color = 'black';

        for(let i = 0; i < caixa.length; i++){
            caixa[i].style.borderColor = 'black';
        };

        mensagem.style.backgroundColor = 'black';
        mensagem.style.color = 'white';
        placar.style.color = 'black';
        score1.style.color = 'black';
        score2.style.color = 'black';


        luzOn = true;
    }
});