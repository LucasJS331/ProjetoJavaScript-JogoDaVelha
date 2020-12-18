let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes =document.querySelectorAll('.box');
let buttons = document.querySelectorAll('button');
let message = document.querySelector('#message');
let messageText = document.querySelector('#message p ');
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;


for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        let el = checkEl(player1,player2);

        // verifica se ja tem x ou o

        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);


            this.appendChild(cloneEl);

            //computar a jogada

            if(player1 == player2){

                player1++

                if(secondPlayer == 'ai-player'){
                    //função executar a jogada
                    computerPlay();
                    player2++;

                }
            } else{
                player2++
            }

            checkWinCondition();
        }
    })
    
}
    //Evento pra saber quem vai jogar

    for(let i =0; i < buttons.length; i++){

        buttons[i].addEventListener('click', ()=>{

            secondPlayer = buttons[i].getAttribute('id');

            for(let j =0; j< buttons.length; j++){
                buttons[j].style.display = 'none';
            }

           setTimeout(()=>{
                let container = document.querySelector('#container');

                container.classList.remove('hide');
           },300);
        })
    }

function checkEl(player1,player2){
    if(player1 == player2){
        // x
        el = x;
    } else{
        // o
        el = o;

    }

    return el
}

function checkWinCondition(){
    
    let b1 = document.querySelector('#block1');
    let b2 = document.querySelector('#block2');
    let b3 = document.querySelector('#block3');
    let b4 = document.querySelector('#block4');
    let b5 = document.querySelector('#block5');
    let b6 = document.querySelector('#block6');
    let b7 = document.querySelector('#block7');
    let b8 = document.querySelector('#block8');
    let b9 = document.querySelector('#block9');

     // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length >0){
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child == 'x'&& b2child == 'x' && b3child == 'x'){
           
           declareWinner('x');
           
        } else if(b1child == 'o'&& b2child == 'o' && b3child == 'o'){
            
            declareWinner('o');

        }  

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length >0){
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child == 'x'&& b5child == 'x' && b6child == 'x'){
            declareWinner('x');
           
        } else if(b4child == 'o'&& b5child == 'o' && b6child == 'o'){
            declareWinner('o');

        }   

    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length >0){
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child == 'x'&& b8child == 'x' && b9child == 'x'){
            declareWinner('x');
           
        } else if(b7child == 'o'&& b8child == 'o' && b9child == 'o'){
            declareWinner('o');

        }

    }
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length >0){
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child == 'x'&& b4child == 'x' && b7child == 'x'){
            declareWinner('x');
           
        } else if(b1child == 'o'&& b4child == 'o' && b7child == 'o'){
            
            declareWinner('o');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length >0){
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child == 'x'&& b5child == 'x' && b8child == 'x'){
            declareWinner('x');
           
        } else if(b2child == 'o'&& b5child == 'o' && b8child == 'o'){
            declareWinner('o');

        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length >0){
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child == 'x'&& b6child == 'x' && b9child == 'x'){
            declareWinner('x');
           
        } else if(b3child == 'o'&& b6child == 'o' && b9child == 'o'){
            declareWinner('o');

        }
    }

    // Diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length >0){
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x'&& b5child == 'x' && b9child == 'x'){
            declareWinner('x');
           
        } else if(b1child == 'o'&& b5child == 'o' && b9child == 'o'){
            declareWinner('o');

        }
    }


    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length >0){
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x'&& b5child == 'x' && b9child == 'x'){
            declareWinner('x');
           
        } else if(b1child == 'o'&& b5child == 'o' && b9child == 'o'){
            declareWinner('o');

        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length >0){
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x'&& b5child == 'x' && b7child == 'x'){
            declareWinner('x');
           
        } else if(b3child == 'o'&& b5child == 'o' && b7child == 'o'){
            declareWinner('o');

        }
    }

    // Deu velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
    }

    if(counter == 9){
        declareWinner('deu velha');
    }    

}

// declara o jogador, limpa o jogo e atualiza o placar

function declareWinner(winner){
     let scoreboard1 = document.getElementById('scoreboard-1');
     let scoreboard2 = document.getElementById('scoreboard-2');
    let msg = '';

    if(winner == 'x'){
        scoreboard1.textContent = parseInt(scoreboard1.textContent) + 1;
        msg = 'O jogador 1 Venceu!';
    } else if(winner == 'o'){
        scoreboard2.textContent = parseInt(scoreboard2.textContent) + 1;
        msg = 'O jogador 2 Venceu!';
    } else{
        msg = 'Deu velha!';

    }

    // exibe msg

    messageText.innerHTML = msg;
    message.classList.remove('hide');
     
    // esconde mensagem

    setTimeout(()=>{
        message.classList.add('hide');
    },3000);

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll('.box div');

    
        for(let i = 0; i < boxesToRemove.length; i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    
    

}

// Executar logica da jogada do CPU

function computerPlay(){
    let cloneO = o.cloneNode(true);

    let counter = 0;
     let filled = 0;

    for(let i = 0; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5);

        // só preencer se tiver vazio o filho
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <=1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            
            // checagem de quantas estao preenchidas
            }else{
                filled++;
            }
        }
    }

    if(counter == 0 && filled < 9){
        
    }
}



