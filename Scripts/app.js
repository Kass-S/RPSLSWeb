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

let P1Turn = true;

let CPUChoice = '';
let userChoice = '';
let P1Choice = '';
let P2Choice = '';
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

    RockBtn.className = 'general-btn btn choice-btns';
    PaperBtn.className = 'general-btn btn choice-btns';
    ScissorBtn.className = 'general-btn btn choice-btns';
    LizardBtn.className = 'general-btn btn choice-btns';
    SpockBtn.className = 'general-btn btn choice-btns';

    SubText1.innerText = 'P1';
    SubText2.innerText = 'Choose your fighter!';

    PlayerPlayBool = true;
    P1Turn = true;

    P1Choice = '';
    P2Choice = '';
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

    SubText2.innerText = 'Choose your fighter!';
    
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

    SubText2.innerText = 'Choose your fighter!';

    if(CPUPlayBool == true){
        CPUBestOf3Bool = true;
    }else if(PlayerPlayBool == true){
        PVPBestOf3Bool = true;
    }

    CPUWins = 0;
    PlayerWins = 0;

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

    SubText2.innerText = 'Choose your fighter!';

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

    SubText2.innerText = 'Choose your fighter!';

    if(CPUPlayBool == true){
        CPUBestOf7Bool = true;
    }else if(PlayerPlayBool == true){
        PVPBestOf7Bool = true;
    }
})


RockBtn.addEventListener('click', async function(){
    if(PlayerPlayBool == false){
        userChoice = 'rock';
        CallCPURandom(); 
    }

    if(PlayerPlayBool == true && P1Turn == true){
        SubText1.innerText = 'P2';

        RockBtn.className = 'general-btn btn choice-btns';
        PaperBtn.className = 'general-btn btn choice-btns';
        ScissorBtn.className = 'general-btn btn choice-btns';
        LizardBtn.className = 'general-btn btn choice-btns';
        SpockBtn.className = 'general-btn btn choice-btns';
        
        P1Choice = 'rock';
        P1Turn = false;        
    }else if(PlayerPlayBool == true && P1Turn == false){
        P2Choice = 'rock';
        PVPGamePlay();
    }
})
PaperBtn.addEventListener('click', async function(){
    if(PlayerPlayBool == false){
        userChoice = 'paper';
        CallCPURandom(); 
    }
    
    if(PlayerPlayBool == true && P1Turn == true){
        SubText1.innerText = 'P2';

        RockBtn.className = 'general-btn btn choice-btns';
        PaperBtn.className = 'general-btn btn choice-btns';
        ScissorBtn.className = 'general-btn btn choice-btns';
        LizardBtn.className = 'general-btn btn choice-btns';
        SpockBtn.className = 'general-btn btn choice-btns';

        P1Choice = 'paper';
        P1Turn = false;
    }else if(PlayerPlayBool == true && P1Turn == false){
        P2Choice = 'paper';
        PVPGamePlay();
    }
})
ScissorBtn.addEventListener('click', async function(){
    if(PlayerPlayBool == false){
        userChoice = 'scissors';
        CallCPURandom();   
    }
    
    if(PlayerPlayBool == true && P1Turn == true){
        SubText1.innerText = 'P2';

        RockBtn.className = 'general-btn btn choice-btns';
        PaperBtn.className = 'general-btn btn choice-btns';
        ScissorBtn.className = 'general-btn btn choice-btns';
        LizardBtn.className = 'general-btn btn choice-btns';
        SpockBtn.className = 'general-btn btn choice-btns';

        P1Choice = 'scissors';
        P1Turn = false;
    }else if(PlayerPlayBool == true && P1Turn == false){
        P2Choice = 'scissors';
        PVPGamePlay();
    }
})
LizardBtn.addEventListener('click', async function(){
    if(PlayerPlayBool == false){
        userChoice = 'lizard';
        CallCPURandom();
    }

    if(PlayerPlayBool == true && P1Turn == true){
        SubText1.innerText = 'P2';

        RockBtn.className = 'general-btn btn choice-btns';
        PaperBtn.className = 'general-btn btn choice-btns';
        ScissorBtn.className = 'general-btn btn choice-btns';
        LizardBtn.className = 'general-btn btn choice-btns';
        SpockBtn.className = 'general-btn btn choice-btns';
        
        P1Choice = 'lizard';
        P1Turn = false;
    }else if(PlayerPlayBool == true && P1Turn == false){
        P2Choice = 'lizard';
        PVPGamePlay();
    }    
})
SpockBtn.addEventListener('click', async function(){
    if(PlayerPlayBool == false){
        userChoice = 'spock';
        CallCPURandom();
    }
    
    if(PlayerPlayBool == true && P1Turn == true){
        SubText1.innerText = 'P2';

        RockBtn.className = 'general-btn btn choice-btns';
        PaperBtn.className = 'general-btn btn choice-btns';
        ScissorBtn.className = 'general-btn btn choice-btns';
        LizardBtn.className = 'general-btn btn choice-btns';
        SpockBtn.className = 'general-btn btn choice-btns';

        P1Choice = 'spock';
        P1Turn = false;
    }else if(PlayerPlayBool == true && P1Turn == false){
        P2Choice = 'spock';
        PVPGamePlay();
    }
})


async function gamePlay(){
    
    if(CPUSuddenDeathBool == true){
        switch(userChoice)
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

                CPUPlayBool = false;
                CPUSuddenDeathBool = false;
                break;

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

                CPUPlayBool = false;
                CPUSuddenDeathBool = false;
                break;
                
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

                CPUPlayBool = false;
                CPUSuddenDeathBool = false;
                break;

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

                CPUPlayBool = false;
                CPUSuddenDeathBool = false;
                break;

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

                CPUPlayBool = false;
                CPUSuddenDeathBool = false;
                break;

            default:
                return "Error";     

        }
    }else if(CPUBestOf3Bool == true){
        switch(userChoice)
        {
            case "rock": 
                if(CPUChoice === 'scissors' || CPUChoice === 'lizard'){
                    PlayerWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice === 'paper' || CPUChoice === 'spock'){
                    CPUWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "paper":
                if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                    PlayerWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'scissors' || CPUChoice == 'lose'){
                    CPUWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;
                
            case "scissors":
                if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                    PlayerWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                    CPUWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "lizard":
                if(CPUChoice == 'paper' || CPUChoice == 'spock'){
                    PlayerWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'rock' || CPUChoice == 'scissors'){
                    CPUWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "spock":
                if(CPUChoice == 'rock' || CPUChoice == 'scissos'){
                    PlayerWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                    CPUWins++;

                    if(PlayerWins >= 2 || CPUWins >= 2){
                        if(PlayerWins == 2){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf3Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            default:
                return "Error";     

        }
        
    }else if(CPUBestOf5Bool == true){
        switch(userChoice)
        {
            case "rock": 
                if(CPUChoice === 'scissors' || CPUChoice === 'lizard'){
                    PlayerWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice === 'paper' || CPUChoice === 'spock'){
                    CPUWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "paper":
                if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                    PlayerWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'scissors' || CPUChoice == 'lose'){
                    CPUWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;
                
            case "scissors":
                if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                    PlayerWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                    CPUWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "lizard":
                if(CPUChoice == 'paper' || CPUChoice == 'spock'){
                    PlayerWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'rock' || CPUChoice == 'scissors'){
                    CPUWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "spock":
                if(CPUChoice == 'rock' || CPUChoice == 'scissos'){
                    PlayerWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                    CPUWins++;

                    if(PlayerWins >= 3 || CPUWins >= 3){
                        if(PlayerWins == 3){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf5Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            default:
                return "Error"; 
        }
    }else if(CPUBestOf7Bool == true){
        switch(userChoice)
        {
            case "rock": 
                if(CPUChoice === 'scissors' || CPUChoice === 'lizard'){
                    PlayerWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice === 'paper' || CPUChoice === 'spock'){
                    CPUWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "paper":
                if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                    PlayerWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'scissors' || CPUChoice == 'lose'){
                    CPUWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;
                
            case "scissors":
                if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                    PlayerWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'rock' || CPUChoice == 'spock'){
                    CPUWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "lizard":
                if(CPUChoice == 'paper' || CPUChoice == 'spock'){
                    PlayerWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'rock' || CPUChoice == 'scissors'){
                    CPUWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            case "spock":
                if(CPUChoice == 'rock' || CPUChoice == 'scissos'){
                    PlayerWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Win!';
                    }
                }else if(CPUChoice == 'paper' || CPUChoice == 'lizard'){
                    CPUWins++;

                    if(PlayerWins >= 4 || CPUWins >= 4){
                        if(PlayerWins == 4){
                            SubText1.innerText = 'You Win';
                        }else{
                            SubText1.innerText = 'You Lose';
                        }
                        SubText2.innerText = `CPU won- ${CPUWins} games`
                        SubText3.innerText = `You won- ${PlayerWins} games`

                        BackBtn.className = 'noDisplay';

                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerWins = 0;
                        CPUWins = 0;

                        CPUPlayBool = false;
                        CPUBestOf7Bool = false;
                    }else{
                        RockBtn.className = 'general-btn btn choice-btns';
                        PaperBtn.className = 'general-btn btn choice-btns';
                        ScissorBtn.className = 'general-btn btn choice-btns';
                        LizardBtn.className = 'general-btn btn choice-btns';
                        SpockBtn.className = 'general-btn btn choice-btns';

                        SubText1.innerText = 'You Lose.';
                    }
                }else{
                    RockBtn.className = 'general-btn btn choice-btns';
                    PaperBtn.className = 'general-btn btn choice-btns';
                    ScissorBtn.className = 'general-btn btn choice-btns';
                    LizardBtn.className = 'general-btn btn choice-btns';
                    SpockBtn.className = 'general-btn btn choice-btns';

                    SubText1.innerText = "You Tie.";
                }
                break;

            default:
                return "Error"; 
        }
    }
}

async function PVPGamePlay(){
    if(PlayerPlayBool == true){

        switch(P1Choice)
        {
            case "rock":

                switch(P2Choice)
                {
                    case "rock":
                       
                        SubText1.innerText = "You Tie.";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;
                    
                        BackBtn.className = 'noDisplay';
        
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';
        
                        PlayerPlayBool = false;
                        break;
                            
                    case "paper":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
        
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';
        
                        PlayerPlayBool = false;
                        break;
    
                    case "scissors": 
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `You guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
        
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';
        
                        PlayerPlayBool = false;
                        break;
    
                    case "lizard":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `You guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
        
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';
        
                        PlayerPlayBool = false;
                        break;
    
                    case "spock":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
        
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';
        
                        PlayerPlayBool = false;
                        break;
    
                    default:
                        return "";
                } 
                break;

            case "paper":
                switch(P2Choice)
                {
                    case "rock":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
                           
                    case "paper":
                        SubText1.innerText = "You Tie.";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "scissors": 
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "lizard":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "spock":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
                    default:
                        return "";
                }               
                break;
                
            case "scissors":
                switch(P2Choice)
                {
                    case "rock":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;
                        
                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
                            
                    case "paper":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `CPU guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "scissors": 
                        SubText1.innerText = "You Tie.";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "lizard":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `CPU guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "spock":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    default:
                        return "";
                }
                break;

            case "lizard":
                switch(P2Choice)
                {
                    case "rock":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
                            
                    case "paper":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "scissors": 
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "lizard":
                        SubText1.innerText = "You Tie.";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "spock":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    default:
                        return "";
                }
                break;

            case "spock":
                switch(P2Choice)
                {
                    case "rock":
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
                            
                    case "paper":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "scissors": 
                        SubText1.innerText = "P1 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "lizard":
                        SubText1.innerText = "P2 Wins!";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    case "spock":
                        SubText1.innerText = "You Tie.";
                        SubText2.innerText = `P1 guessed- ${P1Choice}`;
                        SubText3.innerText = `P2 guessed- ${P2Choice}`;

                        BackBtn.className = 'noDisplay';
                
                        RockBtn.className = 'noDisplay';
                        PaperBtn.className = 'noDisplay';
                        ScissorBtn.className = 'noDisplay';
                        LizardBtn.className = 'noDisplay';
                        SpockBtn.className = 'noDisplay';
                        
                        PlayAgainBtn.className = 'play-again-btn btn general-btn';
                        QuitBtn.className = 'btn general-btn quit-btn';

                        PlayerPlayBool = false;
                        break;
    
                    default:
                        return "";
                }  
                break;

            default:
                return "Error";     

        }

    }
}