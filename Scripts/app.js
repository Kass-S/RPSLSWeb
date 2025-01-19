

let CPUsubText1 = document.getElementById('CPUsubText1');
let CPUsubText2 = document.getElementById('CPUsubText2');
let CPUsubText3 = document.getElementById('CPUsubText3');

let CPUrockBtn = document.getElementById('CPUrockBtn');
let CPUpaperBtn = document.getElementById('CPUpaperBtn');
let CPUscissorBtn = document.getElementById('CPUscissorBtn');
let CPUlizardBtn = document.getElementById('CPUlizardBtn');
let CPUspockBtn = document.getElementById('CPUspockBtn');

let CPUSuddenDeathBool = false;
let CPUBestOf3Bool = false;
let CPUBestOf5Bool = false;
let CPUBestOf7Bool = false;

async function CallCPURandom(){
    const promise = await fetch('https://kspacekrpsls-fkfehdbve8a0f9ag.westus-01.azurewebsites.net/RockPaperScissorsLizardSpock/PlayRPSLS');
    const data = await promise.text();
    console.log(data);
    return data;
}



CPUrockBtn.addEventListener('click', async function(){
    
    let testData = await CallCPURandom(); 
    console.log(testData);
    let userChoice = 'rock'
    let stuff = await CPUSuddenDeath(userChoice, testData);
    let stuffText = await stuff.toString();
    console.log(stuffText);
})
CPUpaperBtn.addEventListener('click', async function(){

    // let testData = await CallCPURandom(); 
    // console.log(testData);
    // let userChoice = 'paper'
    // let stuff = await CPUSuddenDeath(userChoice, testData);
    // let stuffText = await stuff.toString();
    // console.log(stuffText);
})
CPUscissorBtn.addEventListener('click', async function(){

    // let testData = await CallCPURandom(); 
    // console.log(testData);
    // let userChoice = 'scissors'
    // let stuff = await CPUSuddenDeath(userChoice, testData);
    // let stuffText = await stuff.toString();
    // console.log(stuffText);
})
CPUlizardBtn.addEventListener('click', async function(){

    // let testData = await CallCPURandom(); 
    // console.log(testData);
    // let userChoice = 'lizard'
    // let stuff = await CPUSuddenDeath(userChoice, testData);
    // let stuffText = await stuff.toString();
    // console.log(stuffText);
})
CPUspockBtn.addEventListener('click', async function(){

    // let testData = await CallCPURandom(); 
    // console.log(testData);
    // let userChoice = 'spock'
    // let stuff = await CPUSuddenDeath(userChoice, testData);
    // let stuffText = await stuff.toString();
    // console.log(stuffText);
})


async function CPUSuddenDeath(userChoice, randomCPU){
    let CPUChoice = randomCPU;

    switch(userChoice.toLocaleLowerCase())
    {
        case "rock": 
            switch(CPUChoice)
            {
                case "rock":
                    CPUsubText1.innerText = "You Tie.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;    

                case "paper":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "scissors": 
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "lizard":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "spock":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                default:
                    return "";
            }                      

        case "paper":
            switch(CPUChoice)
            {
                case "rock":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;
                       
                case "paper":
                    CPUsubText1.innerText = "You Tie.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                case "scissors":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`; 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "lizard":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "spock":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;
                default:
                    return "";
            }

        case "scissors": 
            switch(CPUChoice)
            {
                case "rock":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;
                        
                case "paper":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "scissors": 
                    CPUsubText1.innerText = "You Tie.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                case "lizard":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "spock":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                default:
                    return "";
            }

        case "lizard":
            switch(CPUChoice)
            {
                case "rock":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;
                        
                case "paper":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "scissors":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`; 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "lizard":
                    CPUsubText1.innerText = "You Tie.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                case "spock":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                default:
                    return "";
            }

        case "spock":
            switch(CPUChoice)
            {
                case "rock":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win.`;
                        
                case "paper":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "scissors":
                    CPUsubText1.innerText = "You Win!";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`; 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`

                case "lizard":
                    CPUsubText1.innerText = "You Lose.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose`;

                case "spock":
                    CPUsubText1.innerText = "You Tie.";
                    CPUsubText2.innerText = `CPU guessed- ${CPUChoice}`;
                    CPUsubText3.innerText = `You guessed- ${userChoice}`;
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                default:
                    return "";
            }  

        default:
            return "Please enter Rock, Paper, Scissors, Lizard, or Spock.\nPlease check your spelling.";     

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