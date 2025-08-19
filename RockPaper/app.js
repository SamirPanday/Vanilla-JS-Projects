const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn =  document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }


    //play match
    const playMatch = ()=>{
        const options =  document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        // console.log(options);

        hands.forEach(hand=>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        })

        //computer's options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option)=>{
            option.addEventListener('click', function(){
                // console.log(this);
                 const computerNumber = Math.floor(Math.random()*3);
                 const computerChoice = computerOptions[computerNumber];
                //  console.log(computerChoice);
                setTimeout(() => {
                compareHands(this.textContent, computerChoice);
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
 
                }, 1750);


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        });
    }

    const compareHands = function (playerChoice, computerChoice) {
        const winner = document.querySelector('.winner');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        
        if(playerChoice === computerChoice){
            winner.textContent = `It's a tie!`;
            updateScore();
        }

        if(playerChoice === 'rock'){
            playerHand.src = `./assets/rock.png`;
            if(computerChoice === 'paper'){
                
                winner.textContent = `Computer wins!`;
                cScore++;
                updateScore();
            }else if(computerChoice === 'scissors'){
                winner.textContent = `Player wins!`;
                pScore++;
                updateScore();
            }
        }

        if(playerChoice === 'paper'){
            
            if(computerChoice === 'scissors'){
               ;
                winner.textContent = `Computer wins!`;
                cScore++;
                updateScore();
            }else if(computerChoice === 'rock'){
                winner.textContent = `Player wins!`;
                pScore++;
                updateScore();
            }
        }

        if(playerChoice === 'scissors'){
           
            if(computerChoice === 'rock'){
               
                winner.textContent = `Computer wins!`;
                cScore++;
                updateScore();
            }else if(computerChoice === 'paper'){
                winner.textContent = `Player wins!`;
                pScore++;
                updateScore();
            }
        }

    }

    //update the score
    const updateScore = ()=>{
        const playerScore =  document.querySelector('.player-score p');
        const computerScore =  document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        return;
    }
    
    
    //call all the inner functions
    startGame();
    playMatch();
}


//call the main function
game();