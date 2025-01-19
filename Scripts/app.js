async function CallCPURandom(){
    const promise = await fetch('https://kspacekrpsls-fkfehdbve8a0f9ag.westus-01.azurewebsites.net/RockPaperScissorsLizardSpock/PlayRPSLS');
    const data = await promise.text();
    console.log(data);
    return data;
}


let subText1 = document.getElementById('subText1');
let subText2 = document.getElementById('subText2');
let subText3 = document.getElementById('subText3');

let CPUPlayBtn = document.getElementById('CPUPlayBtn');
let PlayerPlayBtn = document.getElementById('PlayerPlayBtn');

let SuddenDeathBtn = document.getElementById('SuddenDeathBtn');
let BestOf3Btn = document.getElementById('BestOf3Btn');
let BestOf5Btn = document.getElementById('BestOf5Btn');
let BestOf7Btn = document.getElementById('BestOf7Btn');

let CPUrockBtn = document.getElementById('CPUrockBtn');
let CPUpaperBtn = document.getElementById('CPUpaperBtn');
let CPUscissorBtn = document.getElementById('CPUscissorBtn');
let CPUlizardBtn = document.getElementById('CPUlizardBtn');
let CPUspockBtn = document.getElementById('CPUspockBtn');

let CPUSuddenDeathBool = false;
let CPUBestOf3Bool = false;
let CPUBestOf5Bool = false;
let CPUBestOf7Bool = false;



CPUPlayBtn.addEventListener('click', function(){
    CPUPlayBtn.className = 'noDisplay';
    PlayerPlayBtn.className = "noDisplay";

    SuddenDeathBtn.className = "general-btn btn sudden-death-btn";
    BestOf3Btn.className = "btn general-btn best-of-3";
    BestOf5Btn.className = "btn general-btn best-of-5";
    BestOf7Btn.className = "btn general-btn best-of-7";
})
PlayerPlayBtn.addEventListener('click', function(){
    CPUPlayBtn.className = 'noDisplay';
    PlayerPlayBtn.className = "noDisplay";

    SuddenDeathBtn.className = "general-btn btn sudden-death-btn";
    BestOf3Btn.className = "btn general-btn best-of-3";
    BestOf5Btn.className = "btn general-btn best-of-5";
    BestOf7Btn.className = "btn general-btn best-of-7";
})

SuddenDeathBtn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    CPUrockBtn.className = 'general-btn btn choice-btns';
    CPUpaperBtn.className = 'general-btn btn choice-btns';
    CPUscissorBtn.className = 'general-btn btn choice-btns';
    CPUlizardBtn.className = 'general-btn btn choice-btns';
    CPUspockBtn.className = 'general-btn btn choice-btns';
    
    subText2.innerText = 'Choose your fighter!';
})
BestOf3Btn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    CPUrockBtn.className = 'general-btn btn choice-btns';
    CPUpaperBtn.className = 'general-btn btn choice-btns';
    CPUscissorBtn.className = 'general-btn btn choice-btns';
    CPUlizardBtn.className = 'general-btn btn choice-btns';
    CPUspockBtn.className = 'general-btn btn choice-btns';
})
BestOf5Btn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    CPUrockBtn.className = 'general-btn btn choice-btns';
    CPUpaperBtn.className = 'general-btn btn choice-btns';
    CPUscissorBtn.className = 'general-btn btn choice-btns';
    CPUlizardBtn.className = 'general-btn btn choice-btns';
    CPUspockBtn.className = 'general-btn btn choice-btns';
})
BestOf7Btn.addEventListener('click', function (){
    SuddenDeathBtn.className = "noDisplay";
    BestOf3Btn.className = "noDisplay";
    BestOf5Btn.className = "noDisplay";
    BestOf7Btn.className = "noDisplay";

    CPUrockBtn.className = 'general-btn btn choice-btns';
    CPUpaperBtn.className = 'general-btn btn choice-btns';
    CPUscissorBtn.className = 'general-btn btn choice-btns';
    CPUlizardBtn.className = 'general-btn btn choice-btns';
    CPUspockBtn.className = 'general-btn btn choice-btns';
})


CPUrockBtn.addEventListener('click', async function(){
    
    let randomCPU = await CallCPURandom(); 
    console.log(randomCPU);

    if(CPUSuddenDeathBool == true){
        let userChoice = 'rock';
        CPUSuddenDeath(userChoice, randomCPU);
    }

    if(CPUBestOf3Bool == true){

    }

    if(CPUBestOf5Bool == true){

    }
    
    if(CPUBestOf7Bool == true){

    }
})
CPUpaperBtn.addEventListener('click', async function(){

    let randomCPU = await CallCPURandom(); 
    console.log(randomCPU);

    if(CPUSuddenDeathBool == true){
        let userChoice = 'paper';
        CPUSuddenDeath(userChoice, randomCPU);
    }

    if(CPUBestOf3Bool == true){

    }

    if(CPUBestOf5Bool == true){

    }
    
    if(CPUBestOf7Bool == true){

    }
})
CPUscissorBtn.addEventListener('click', async function(){

    let randomCPU = await CallCPURandom(); 
    console.log(randomCPU);

    if(CPUSuddenDeathBool == true){
        let userChoice = 'scissors';
        CPUSuddenDeath(userChoice, randomCPU);
    }

    if(CPUBestOf3Bool == true){

    }

    if(CPUBestOf5Bool == true){

    }
    
    if(CPUBestOf7Bool == true){

    }
})
CPUlizardBtn.addEventListener('click', async function(){

    let randomCPU = await CallCPURandom(); 
    console.log(randomCPU);

    if(CPUSuddenDeathBool == true){


        let userChoice = 'lizard';
        CPUSuddenDeath(userChoice, randomCPU);

    }else if(CPUBestOf3Bool == true){

    }else if(CPUBestOf5Bool == true){

    }else if(CPUBestOf7Bool == true){

    }
})
CPUspockBtn.addEventListener('click', async function(){

    let randomCPU = await CallCPURandom(); 
    console.log(randomCPU);

    if(CPUSuddenDeathBool == true){
        let userChoice = 'spock';
        CPUSuddenDeath(userChoice, randomCPU);
    }

    if(CPUBestOf3Bool == true){

    }

    if(CPUBestOf5Bool == true){

    }

    if(CPUBestOf7Bool == true){

    }
    
})


async function CPUSuddenDeath(userChoice, randomCPU){
    let CPUChoice = randomCPU;

    switch(userChoice.toLocaleLowerCase())
    {
        case "rock": 
            switch(CPUChoice)
            {
                case "rock":
                    subText1.innerText = "You Tie.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;   

                case "paper":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "scissors": 
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "lizard":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "spock":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                default:
                    return "";
            }                      

        case "paper":
            switch(CPUChoice)
            {
                case "rock":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;
                       
                case "paper":
                    subText1.innerText = "You Tie.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "scissors":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "lizard":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "spock":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;
                default:
                    return "";
            }

        case "scissors": 
            switch(CPUChoice)
            {
                case "rock":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;
                        
                case "paper":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "scissors": 
                    subText1.innerText = "You Tie.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "lizard":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "spock":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                default:
                    return "";
            }

        case "lizard":
            switch(CPUChoice)
            {
                case "rock":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;
                        
                case "paper":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "scissors":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "lizard":
                    subText1.innerText = "You Tie.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "spock":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                default:
                    return "";
            }

        case "spock":
            switch(CPUChoice)
            {
                case "rock":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;
                        
                case "paper":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "scissors":
                    subText1.innerText = "You Win!";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "lizard":
                    subText1.innerText = "You Lose.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                case "spock":
                    subText1.innerText = "You Tie.";
                    subText2.innerText = `CPU guessed- ${CPUChoice}`;
                    subText3.innerText = `You guessed- ${userChoice}`;

                default:
                    return "";
            }  

        default:
            return "Error";     

    }

}

function CPUBestOf3(userChoice, randomCPU){
    CPUWins = 0;
    PlayerWins = 0;

    if(PlayerWins == 2 || CPUWins == 2){
        if(PlayerWins == 2){
            
        }
    }
}


// test.addEventListener('click', async function(){
//     let stuff = await PvPSuddenDeath("rock", "Paper");
//     let stuffText = await stuff.toString();
//     console.log(stuffText);
// })

// async function PvPSuddenDeath(P1Choice, P2Choice){

//  p1Turn = true;
//     switch(P1Choice.toLocaleLowerCase())
//     {
//         case "rock": 
//             switch(P2Choice.toLocaleLowerCase())
//             {
//                 case "rock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;    

//                 case "paper":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;
//                 case "scissors": 
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

//                 case "lizard":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

//                 case "spock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

//                 default:
//                     return "";
//             }                      

//         case "paper":
//             switch(P2Choice.toLocaleLowerCase())
//             {
//                 case "rock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;
                       
//                 case "paper":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

//                 case "scissors": 
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

//                 case "lizard":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

//                 case "spock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;
//                 default:
//                     return "";
//             }

//         case "scissors": 
//             switch(P2Choice.toLocaleLowerCase())
//             {
//                 case "rock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;
                        
//                 case "paper":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

//                 case "scissors": 
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

//                 case "lizard":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

//                 case "spock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;

//                 default:
//                     return "";
//             }

//         case "lizard":
//             switch(P2Choice.toLocaleLowerCase())
//             {
//                 case "rock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins!`;
                        
//                 case "paper":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

//                 case "scissors": 
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

//                 case "lizard":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

//                 case "spock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins!`;

//                 default:
//                     return "";
//             }

//         case "spock":
//             switch(P2Choice.toLocaleLowerCase())
//             {
//                 case "rock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins`;
                        
//                 case "paper":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

//                 case "scissors": 
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 1 Wins`

//                 case "lizard":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nPlayer 2 Wins`;

//                 case "spock":
//                     return `Player 1 guessed - ${P1Choice}\nPlayer 2 guessed - ${P2Choice}\nYou Tie.`;

//                 default:
//                     return "";
//             }  

//         default:
//             return "Please enter Rock, Paper, Scissors, Lizard, or Spock.\nPlease check your spelling.";     

//     }

// }