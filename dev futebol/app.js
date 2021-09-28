//modal
function iniciaModal(modalID){
  const modal = document.getElementById(modalID);
  if(modal){
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) =>{
      if(e.target.id == modalID || e.target.    className == 'button'){
        modal.classList.remove('mostrar');  
      }
    });
  }
}

const button = document.querySelector('.modal-open');
button.addEventListener('click', () =>{
  iniciaModal('modal-promocao');
})

//fim modal

//nome dos times
const teamOne = document.querySelector('#nameTeamA');
const teamTwo = document.querySelector('#nameTeamB');

function send1(){
  const name1 = document.querySelector('#modal1').value;
  const name2 = document.querySelector('#modal2').value;
  teamOne.innerText = name1.toUpperCase();
  teamTwo.innerText = name2.toUpperCase();
  document.querySelector('#modal1').value = '';
  document.querySelector('#modal2').value = '';
  
}

//gols
const scoreOne = document.querySelector('#scoreA');
const scoreTwo = document.querySelector('#scoreB');

//variável para inciar o jogo
const resetGols = document.querySelector('#resetGols')

//variáveis responsáveis para cancelar os gols
const cancelGolOne = document.querySelector('#cancelOne');
const cancelGolTwo = document.querySelector('#cancelTwo');

//variáveis será adicionado os novos gols
let oneScore = 0;
let twoScore = 0;

//adicionará os gols clicado no número para o time 1
scoreOne.addEventListener('click',function(){
    oneScore++;
    scoreOne.innerText = oneScore;
});

//adicionará os gols clicado no número para o time 2
scoreTwo.addEventListener('click',function(){
    twoScore++;
    scoreTwo.innerText = twoScore;
});

//inicia o outro jogo
resetGols.addEventListener('click', function(){
  scoreOne.innerText = 0;
  scoreTwo.innerText = 0;
});

  
//anular o gol do time 1, caso acorra na partida
cancelGolOne.addEventListener('click', function(){
  oneScore--;
  scoreOne.innerText = oneScore
});

//anular o gol do time 2, caso acorra na partida
cancelGolTwo.addEventListener('click', function(){
  twoScore--;
  scoreTwo.innerText = twoScore
});
