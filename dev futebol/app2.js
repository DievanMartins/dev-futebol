/*Cronômetro */

let minute = 0;
let second = 0;
let cron;

//Inicia o temporizador
function start() {
  cron = setInterval(()  => { timer(); }, 1000);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
  clearInterval(cron);
}

function stop() {
  clearInterval(cron);
  minute = 0;
  second = 0;
  document.querySelector('#counter').innerText = '00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
  second++;//Incrementa +1 na variável second
  if (second == 59) {//Verifica se deu 59 segundos
    second = 0;//Volta os segundos para 0
    minute++;//Adiciona +1 na variável minute
  }
  //Cria uma variável com o valor tratado minute:second
  let format = (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    
  //Insere o valor tratado no elemento counter
  document.querySelector('#counter').innerText = format;

  //Retorna o valor tratado
  return format;
};
