
const score = JSON.parse(localStorage.getItem('score'));
let Result = '';
let Computer = ''; 
console.log(score); 

function compMove(){
    const RN = Math.random();

        if (RN>=0 && RN<1/3 ){
            Computer = 'Rock'
        } else if(RN>=1/3 && RN<2/3){
            Computer = 'Paper'
        } else{
            Computer = 'Sicsors'
        }
        return;
}
function playGame(playerMove){
    if (playerMove === 'Rock'){
        if(Computer === 'Rock'){
            Result = ' Tie'
        } else if (Computer === 'Paper'){
            Result = ' Loose'
        } else{
            Result = ' Win'
        }
    }
    if(playerMove==='Paper'){
        if(Computer === 'Rock'){
            Result = ' Win'
        } else if (Computer === 'Paper'){
            Result = ' tie'
        } else{
            Result = ' loose'
        }
    }
    if(playerMove==='Sissors'){
        if(Computer === 'Rock'){
            Result = ' Loose'
        } else if (Computer === 'Paper'){
            Result = ' Win'
        } else{
            Result = ' Tie'
        }
    }

    if(Result === ' Win'){
        score.wins = score.wins+1
    }else if(Result === ' loose'){
        score.losses = score.losses+1
    }else{
        score.ties = score.ties+1
    }

    localStorage.setItem('score', JSON.stringify(score));
    alert(`You Picked ${playerMove}, Computer picked ${Computer}. You ${Result}.
        Wins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`);
}

function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    alert(`Your score has been reset to 0
Wins:${score.wins} Looses: ${score.losses} Ties: ${score.ties}`
    )
}
