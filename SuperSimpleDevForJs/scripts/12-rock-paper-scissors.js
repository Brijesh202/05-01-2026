 let score = JSON.parse(localStorage.getItem('score'));

    if(!score){
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }


    updateScoreElement();


    console.log(JSON.parse(localStorage.getItem('score')));

    let isAutoPlaying = false;
    let intervalId; //aa intervalId ne we will define outside of the function bcoz every intervalId will be going to change. And this intervalId is nothing just setInterval function gives one id to us using which we can stop the interval.

    function autoPlay(){
      if(!isAutoPlaying){
        intervalId = setInterval(() => {
          const playerMove = pickComputerMove(); //we want to create some random move so for that we already have one function which is for computermove but we can store computer move into playermove
          result(playerMove);
        },1000);
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId);//by using id we will stop the interval.
        isAutoPlaying = false;
      }
    }


    //arrowfunction version of above autoplay() function.
    // const autoPlay = () => {
      
    // };


    /*document.querySelector('.js-rock-button').        addEventListener('click',result('rock'));//jo aa rite second parameter ma direct function nakhi daisu to aa function basically undefined return karse to addEventListener ne so this thing will wont work we have to create function instead.*/

    document.querySelector('.js-rock-button').addEventListener('click', () => {
      result('rock');
    });

    document.querySelector('.js-paper-button').addEventListener('click', () => {
      result('paper');
    })

    document.querySelector('.js-scissor-button').addEventListener('click', () => {
      result('scissor');
    })

    document.body.addEventListener('keydown', (event) => {
      console.log(event.key);
      if(event.key === 'r' || event.key === 'R'){
        result('rock');
      }
      else if(event.key === 'p' || event.key === 'P'){
        result('paper');
      }
      else if(event.key === 's' || event.key === 'S'){
        result('scissor');
      }
    })//every time when we type then addEventListener will store keyword into event parameter. And that event object will contain which key we have typed.

    function pickComputerMove(){
      const randomNumber = Math.random();
      let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }
      else{
        computerMove = 'scissor';
      }

      return computerMove;
    }
 

    function result(userMove){
      const computerMove = pickComputerMove();
      let result = '';
      if(userMove === 'rock'){
        if(computerMove === userMove){
          result = 'Tie';
        }
        else if(computerMove === 'paper'){
          result = 'You Lose';
        }
        else{
          result = 'You Win';
        }
      }
      else if(userMove === 'paper'){
        if(computerMove === userMove){
          result = 'Tie';
        }
        else if(computerMove === 'rock'){
          result = 'You Win';
        }
        else{
          result = 'You Lose';
        }
      }
      else{
        if(computerMove === 'scissor'){
          result = 'Tie';
        }
        else if(computerMove === 'rock'){
          result = 'You Lose';
        }
        else{
          result = 'You Win';
        }
      }


      if(result === 'Tie'){
        score.ties += 1;
      }
      else if(result === 'You Win'){
        score.wins += 1;
      }
      else{ 
        score.losses += 1;
      }


      updateScoreElement();


      document.querySelector('.js-result').innerHTML = `${result}`;

      document.querySelector('.js-move').innerHTML = `You 
      <img src="images/${userMove}-emoji.png" alt="User-Move" class="move-icon"> <img src="images/${computerMove}-emoji.png" alt="Computer-Move" class="move-icon"> 
      Computer`;

          
      localStorage.setItem('score',JSON.stringify(score));


      //alert(`You chose ${userMove}. Computer picked ${computerMove}. ${result}. \nTies: ${score.ties}, Wins: ${score.wins}, Lose: ${score.losses}`)
    }



    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `Ties: ${score.ties}, Wins: ${score.wins}, Lose: ${score.losses}`;
    }


