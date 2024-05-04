// gets computer choice randomly - tried and tested
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3); //returns 0, 1 or 2
    let comp_choice = null; 
    if(rand==0){
        comp_choice = "rock";
    }
    else if(rand==1){
        comp_choice = "paper";
    }
    else{
        comp_choice = "scissors";
    }
    console.log(comp_choice);
    return comp_choice;
}

// gets human choice based on user input - tested
function getHumanChoice(){
    let human_choice = null;
    let human_prompt = prompt("Type your choice: rock | paper | scissors");
    if(human_prompt.toLowerCase() == "rock"){
        human_choice = "rock";
    }
    else if(human_prompt.toLowerCase()=="paper"){
        human_choice = "paper";
    }
    else{
        human_choice = "scissors";
    }
    console.log(human_choice);
    return human_choice;
}


let human_score = 0;
let comp_score = 0;

//function to play for each round
function playRound(humanChoice, computerChoice) {
    // your code here!
    if(humanChoice==computerChoice){
        console.log("It is a draw!");
    }
    else{
        if(humanChoice=="rock"){
            if(computerChoice=="paper"){
                console.log("You lose! Paper beats rock");
                comp_score+=1;
            }
            else{
                console.log("You win! Rock beats scissors");
                human_score+=1;
            }
        }
        if(humanChoice=="paper"){
            if(computerChoice=="scissors"){
                console.log("You lose! Scissors beats paper");
                comp_score+=1;
            }
            else{
                console.log("You win! Paper beats rock");
                human_score+=1;
            }
        }
        if(humanChoice=="scissors"){
            if(computerChoice=="rock"){
                console.log("You lose! Rock beats scissors");
                comp_score+=1;
            }
            else{
                console.log("You win! Scissors beats paper");
                human_score+=1;
            }
        }
    }
}
  


//code for running 5 times

let i = 0;
while(i<5){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    i+=1;
}
if(human_score>comp_score){
    console.log("You win!");
    winner();
}
else if(comp_score>human_score){
    console.log("Computer wins!");
    winner();
}
else{
    console.log("It's a draw!");
    winner();
}

function winner(){
    console.log("Your score: ",human_score);
    console.log("Computer score: ", comp_score);
    console.log("No of draws: ", 5-(human_score+comp_score));
}
