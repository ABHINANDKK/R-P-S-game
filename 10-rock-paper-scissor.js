let score=  JSON.parse(localStorage.getItem
    ('score'))|| {
           wins: 0, 
           losses: 0,
           ties: 0
        };
    
        updateScoreElement();

    document.querySelector('.js-score')
    .innerHTML= `Win: ${score.wins}, Losess: ${score.losses}, Ties: ${score.ties}`;

    // i simplified the code using ternary //

        function playGame(playerMove){
            const computerMove = pickComputerMove();
    
        let result = '';
         if(playerMove === 'rock') {
            if(computerMove === 'rock'){
                result = 'Tie.';
            }else if( computerMove === 'paper'){
                result = 'You lose.';
            }else if(computerMove === 'scissor'){
                result = 'You win.';
            }
        }else if(playerMove === 'paper'){
            if(computerMove === 'rock'){
                result = 'You win.';
            }else if( computerMove === 'paper'){
                result = 'Tie.';
            }else if(computerMove === 'scissor'){
                result = 'You lose.';
            }
        }else if (playerMove === 'scissor'){
             if(computerMove === 'rock'){
                result = 'You lose.';
            }else if( computerMove === 'paper'){
                result = 'You win.';
            }else if(computerMove === 'scissor'){
                result = 'Tie.'; 
            }
        }

        if(result === 'You win.'){
            score.wins += 1;
        }else if(result === 'You lose.'){
            score.losses += 1 ;
        }else if(result === 'Tie.'){
            score.ties += 1 ;
        }
        localStorage.setItem ('score', JSON.stringify(score));
        document.querySelector('.js-score')
        .innerHTML= `Win: ${score.wins}, Losess: ${score.losses}, Ties: ${score.ties}`;
        
        document.querySelector('.result')
        .innerHTML= result;

        document.querySelector('.moves').innerHTML
        = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
        Computer`;
         
            }

            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML=`Win: ${score.wins},
                 Losses: ${score.losses}, Ties: ${score.ties}`;
            }

        function pickComputerMove(){
         let computerMove = '';
         const randomNumber = (Math.random());
       
        if(randomNumber>=0 && randomNumber < 1/3) {
            computerMove = 'rock';  
        }else if(randomNumber >=1/3 && randomNumber < 2/3){
            computerMove ='paper';
        }else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove = 'scissor';
        }
        return computerMove ;
    }