

let test = document.getElementById('test');

async function CallCPURandom(){
    const promise = await fetch('https://kspacekrpsls-fkfehdbve8a0f9ag.westus-01.azurewebsites.net/RockPaperScissorsLizardSpock/PlayRPSLS');
    const data = await promise.text();
    console.log(data);
    return data;
}

test.addEventListener('click', async function(){
    let testData = await CallCPURandom(); 
    console.log(testData);
    let stuff = await CPUSuddenDeath("rock", testData);
    let stuffText = stuff.toString();
    console.log(stuffText);
})

async function CPUSuddenDeath(userChoice, randomCPU){
    let CPUChoice = randomCPU;
    let outcome = '';

    switch(userChoice.toLocaleLowerCase())
    {
        case "rock": 
            switch(CPUChoice)
            {
                case "rock":
                    outcome = `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`; 
                    return outcome;    

                case "paper":
                    outcome = `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;
                    return outcome;

                case "scissors": 
                    outcome = `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;
                    return outcome;

                case "lizard":
                    outcome = `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;
                    return outcome;

                case "spock":
                    outcome = `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;
                    return outcome;

                default:
                    return "";
            }                      

        case "paper":
            switch(CPUChoice)
            {
                case "rock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;
                       
                case "paper":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                case "scissors": 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "lizard":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "spock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;
                default:
                    return "";
            }

        case "scissors": 
            switch(CPUChoice)
            {
                case "rock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;
                        
                case "paper":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "scissors": 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                case "lizard":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "spock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                default:
                    return "";
            }

        case "lizard":
            switch(CPUChoice)
            {
                case "rock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;
                        
                case "paper":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                case "scissors": 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "lizard":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                case "spock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`;

                default:
                    return "";
            }

        case "spock":
            switch(CPUChoice)
            {
                case "rock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win.`;
                        
                case "paper":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose.`;

                case "scissors": 
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Win!`

                case "lizard":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Lose`;

                case "spock":
                    return `CPU guessed - ${CPUChoice}\nYou guessed - ${userChoice}\nYou Tie.`;

                default:
                    return "";
            }  

        default:
            return "Please enter Rock, Paper, Scissors, Lizard, or Spock.\nPlease check your spelling.";     

    }

}