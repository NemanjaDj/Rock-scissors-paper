
var computerScore = 0, userScore = 0;

function GetMark(id){
    var mark = CreateMark(id);
    var computerMark = CreateMark(Math.floor(Math.random() * 3) + 1);
    document.getElementById('userMark').src = 'images/' + mark + '.jpg';
    document.getElementById('computerMark').src = 'images/' + computerMark + '.jpg';
    document.getElementById('winnerText').textContent = Game(mark, computerMark);
}

function Game(userMark, computerMark){
    var marks = CompareMarks(userMark, computerMark);
        if (marks == 1){
            userScore = userScore + 1;
        }else if (marks == 2){
            computerScore = computerScore + 1;
        }
        document.getElementById('playerResult').textContent = userScore;
        document.getElementById('computerResult').textContent = computerScore;
        if(userScore == 3){
            End();
            return 'user wins!';
        } else if (computerScore == 3){
            End();
            return 'computer wins!';
        }
}

function End(){
    computerScore = 0;
    userScore = 0;
}

function CompareMarks(userMark, computerMark){
    if(userMark == computerMark){
        return 0;
    } else if((userMark == 'rock' && computerMark == 'scissors')
    || (userMark == 'paper' && computerMark == 'rock')
    || (userMark == 'scissors' && computerMark == 'paper')){
        return 1;
    } else return 2;
}

function CreateMark(markId){
    switch(markId){
        case 1:
            var mark = "rock";
            break;
        case 2:
            var mark = "paper";
            break;
        case 3:
            var mark = "scissors";
            break;
        default:
            document.write("Invalid mark!");
    }
    return mark;
}
