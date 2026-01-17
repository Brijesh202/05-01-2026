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
          result = 'You Lose!';
        }
        else{
          result = 'You Win!';
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
