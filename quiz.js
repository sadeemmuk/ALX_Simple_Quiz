function checkAnswer(){
    let correctAnswer = 4;
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    if(userAnswer == correctAnswer){
        document.getElementById('feedback').textContent = "That's correct! Well done.";
    }else{
        document.getElementById('feedback').textContent ="It is incorrect! Try again.";
    }
}

let btn = document.getElementById('submit-answer');

btn.addEventListener('click', checkAnswer);