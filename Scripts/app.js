async function CallCPURandom(){
    const promise = await fetch('https://kspacekrpsls-fkfehdbve8a0f9ag.westus-01.azurewebsites.net/RockPaperScissorsLizardSpock/PlayRPSLS');
    const data = await promise.text();
    console.log(data);
    CPUChoice = data;
    gamePlay()
    return data;
}

let BackBtn = document.getElementById('BackBtn');

let SubText1 = document.getElementById('SubText1');
let SubText2 = document.getElementById('SubText2');
let SubText3 = document.getElementById('SubText3');

let CPUPlayBtn = document.getElementById('CPUPlayBtn');
let PlayerPlayBtn = document.getElementById('PlayerPlayBtn');

let SuddenDeathBtn = document.getElementById('SuddenDeathBtn');
let BestOf3Btn = document.getElementById('BestOf3Btn');
let BestOf5Btn = document.getElementById('BestOf5Btn');
let BestOf7Btn = document.getElementById('BestOf7Btn');

let RockBtn = document.getElementById('RockBtn');
let PaperBtn = document.getElementById('PaperBtn');
let ScissorBtn = document.getElementById('ScissorBtn');
let LizardBtn = document.getElementById('LizardBtn');
let SpockBtn = document.getElementById('SpockBtn');

let PlayAgainBtn = document.getElementById('PlayAgainBtn');
let QuitBtn = document.getElementById('QuitBtn');

let CPUPlayBool = false;
let PlayerPlayBool = false;

let CPUSuddenDeathBool = false;
let CPUBestOf3Bool = false;
let CPUBestOf5Bool = false;
let CPUBestOf7Bool = false;

let PvPSuddenDeathBool = false;
let PVPBestOf3Bool = false;
let PVPBestOf5Bool = false;
let PVPBestOf7Bool = false;

let CPUChoice = '';
let userChoice = '';
let CPUWins = 0;
let PlayerWins = 0;

CPUPlayBtn.addEventListener('click', function(){
    CPUPlayBtn.className = 'noDisplay';
    PlayerPlayBtn.className = "noDisplay";

    SuddenDeathBtn.className = "general-btn btn sudden-death-btn";
    BestOf3Btn.className = "btn general-btn best-of-3";
    BestOf5Btn.className = "btn general-btn best-of-5";
    BestOf7Btn.className = "btn general-btn best-of-7";

    CPUPlayBool = true;
})
PlayerPlayBtn.addEventListener('click', function(){
    CPUPlayBtn.className = 'noDisplay';
    PlayerPlayBtn.className = "noDisplay";

    SuddenDeathBtn.className = "general-btn btn sudden-death-btn";
    BestOf3Btn.className = "btn general-btn best-of-3";
    BestOf5Btn.className = "btn general-btn best-of-5";
    BestOf7Btn.className = "btn general-btn best-of-7";

    PlayerPlayBool = true;
})

SuddenDeathBtn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    RockBtn.className = 'general-btn btn choice-btns';
    PaperBtn.className = 'general-btn btn choice-btns';
    ScissorBtn.className = 'general-btn btn choice-btns';
    LizardBtn.className = 'general-btn btn choice-btns';
    SpockBtn.className = 'general-btn btn choice-btns';
    
    if(CPUPlayBool == true){
        CPUSuddenDeathBool = true;
    }else if(PlayerPlayBool == true){
        PvPSuddenDeathBool = true;
    }
    
})
BestOf3Btn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    RockBtn.className = 'general-btn btn choice-btns';
    PaperBtn.className = 'general-btn btn choice-btns';
    ScissorBtn.className = 'general-btn btn choice-btns';
    LizardBtn.className = 'general-btn btn choice-btns';
    SpockBtn.className = 'general-btn btn choice-btns';

    if(CPUPlayBool == true){
        CPUBestOf3Bool = true;
    }else if(PlayerPlayBool == true){
        PVPBestOf3Bool = true;
    }

})
BestOf5Btn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    RockBtn.className = 'general-btn btn choice-btns';
    PaperBtn.className = 'general-btn btn choice-btns';
    ScissorBtn.className = 'general-btn btn choice-btns';
    LizardBtn.className = 'general-btn btn choice-btns';
    SpockBtn.className = 'general-btn btn choice-btns';

    if(CPUPlayBool == true){
        CPUBestOf5Bool = true;
    }else if(PlayerPlayBool == true){
        PVPBestOf5Bool = true;
    }
    
})
BestOf7Btn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    RockBtn.className = 'general-btn btn choice-btns';
    PaperBtn.className = 'general-btn btn choice-btns';
    ScissorBtn.className = 'general-btn btn choice-btns';
    LizardBtn.className = 'general-btn btn choice-btns';
    SpockBtn.className = 'general-btn btn choice-btns';

    if(CPUPlayBool == true){
        CPUBestOf7Bool = true;
    }else if(PlayerPlayBool == true){
        PVPBestOf7Bool = true;
    }
})


RockBtn.addEventListener('click', async function(){
    
    userChoice = 'rock';
    CallCPURandom(); 

})
PaperBtn.addEventListener('click', async function(){

    userChoice = 'paper';
    CallCPURandom(); 
    
})
ScissorBtn.addEventListener('click', async function(){

    userChoice = 'scissors';
    CallCPURandom(); 
    
})
LizardBtn.addEventListener('click', async function(){

    userChoice = 'lizard';
    CallCPURandom(); 
    
})
SpockBtn.addEventListener('click', async function(){

    userChoice = 'spock';
    CallCPURandom();  

})


async function gamePlay(){
    
    if(CPUSuddenDeathBool == true){
        switch(userChoice.toLocaleLowerCase())
        {
        case "rock": 
            if(CPUChoice === 'scissors' || CPUChoice === 'lizard'){
                SubText1.innerText = "You Win!";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else if(CPUChoice === 'paper' || CPUChoice === 'spock'){
                SubText1.innerText = "You Lose.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else{
                SubText1.innerText = "You Tie.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }
            BackBtn.className = 'noDisplay';

            RockBtn.className = 'noDisplay';
            PaperBtn.className = 'noDisplay';
            ScissorBtn.className = 'noDisplay';
            LizardBtn.className = 'noDisplay';
            SpockBtn.className = 'noDisplay';
            
            PlayAgainBtn.className = 'play-again-btn btn general-btn';
            QuitBtn.className = 'btn general-btn quit-btn';

        case "paper":
            if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                SubText1.innerText = "You Win!";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else if(CPUChoice == 'scissors' || CPUChoice == 'lose'){
                SubText1.innerText = "You Lose.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else{
                SubText1.innerText = "You Tie.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }
            BackBtn.className = 'noDisplay';
            
            RockBtn.className = 'noDisplay';
            PaperBtn.className = 'noDisplay';
            ScissorBtn.className = 'noDisplay';
            LizardBtn.className = 'noDisplay';
            SpockBtn.className = 'noDisplay';
            
            PlayAgainBtn.className = 'play-again-btn btn general-btn';
            QuitBtn.className = 'btn general-btn quit-btn';
            
        case "scissors":
            if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                SubText1.innerText = "You Win!";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                SubText1.innerText = "You Lose.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else{
                SubText1.innerText = "You Tie.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }
            BackBtn.className = 'noDisplay';
            
            RockBtn.className = 'noDisplay';
            PaperBtn.className = 'noDisplay';
            ScissorBtn.className = 'noDisplay';
            LizardBtn.className = 'noDisplay';
            SpockBtn.className = 'noDisplay';

            PlayAgainBtn.className = 'play-again-btn btn general-btn';
            QuitBtn.className = 'btn general-btn quit-btn';

        case "lizard":
            if(CPUChoice == 'paper' || CPUChoice == 'spock'){
                SubText1.innerText = "You Win!";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else if(CPUChoice == 'rock' || CPUChoice == 'scissors'){
                SubText1.innerText = "You Lose.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else{
                SubText1.innerText = "You Tie.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }
            BackBtn.className = 'noDisplay';
            
            RockBtn.className = 'noDisplay';
            PaperBtn.className = 'noDisplay';
            ScissorBtn.className = 'noDisplay';
            LizardBtn.className = 'noDisplay';
            SpockBtn.className = 'noDisplay';
            
            PlayAgainBtn.className = 'play-again-btn btn general-btn';
            QuitBtn.className = 'btn general-btn quit-btn';

        case "spock":
            if(CPUChoice == 'rock' || CPUChoice == 'scissos'){
                SubText1.innerText = "You Win!";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                SubText1.innerText = "You Lose.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }else{
                SubText1.innerText = "You Tie.";
                SubText2.innerText = `CPU guessed- ${CPUChoice}`;
                SubText3.innerText = `You guessed- ${userChoice}`;
            }
            BackBtn.className = 'noDisplay';
            
            RockBtn.className = 'noDisplay';
            PaperBtn.className = 'noDisplay';
            ScissorBtn.className = 'noDisplay';
            LizardBtn.className = 'noDisplay';
            SpockBtn.className = 'noDisplay';
            
            PlayAgainBtn.className = 'play-again-btn btn general-btn';
            QuitBtn.className = 'btn general-btn quit-btn';

        default:
            return "Error";     

        }
    }else if(CPUBestOf3Bool == true){
        
        if(PlayerWins == 2 || CPUWins == 2){
            if(PlayerWins == 2){
                SubText1 = 'You Win';
            }else{
                SubText1 = 'You Lose';
            }
            SubText2 = `CPU won- ${CPUWins} games`
            SubText3 = `You won- ${PlayerWins} games`
        }
    }
    


    // p1Turn = true;
    // switch(P1Choice.toLocaleLowerCase())
    // {
    //     case "rock": 
    //         switch(P2Choice.toLocaleLowerCase())
    //         {
    //             case "rock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;    

    //             case "paper":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;
    //             case "scissors": 
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

    //             case "lizard":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

    //             case "spock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

    //             default:
    //                 return "";
    //         }                      

    //     case "paper":
    //         switch(P2Choice.toLocaleLowerCase())
    //         {
    //             case "rock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;
                       
    //             case "paper":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

    //             case "scissors": 
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

    //             case "lizard":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

    //             case "spock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;
    //             default:
    //                 return "";
    //         }

    //     case "scissors": 
    //         switch(P2Choice.toLocaleLowerCase())
    //         {
    //             case "rock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;
                        
    //             case "paper":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

    //             case "scissors": 
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

    //             case "lizard":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

    //             case "spock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

    //             default:
    //                 return "";
    //         }

    //     case "lizard":
    //         switch(P2Choice.toLocaleLowerCase())
    //         {
    //             case "rock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;
                        
    //             case "paper":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

    //             case "scissors": 
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

    //             case "lizard":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

    //             case "spock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

    //             default:
    //                 return "";
    //         }

    //     case "spock":
    //         switch(P2Choice.toLocaleLowerCase())
    //         {
    //             case "rock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins`;
                        
    //             case "paper":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

    //             case "scissors": 
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins`

    //             case "lizard":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

    //             case "spock":
    //                 return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

    //             default:
    //                 return "";
    //         }  

    //     default:
    //         return "Please enter Rock, Paper, Scissors, Lizard, or Spock.\nPlease check your spelling.";     

    // }
}

