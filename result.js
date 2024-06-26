
 function displayResult() {
 
    const resultMessage = sessionStorage.getItem('resultMessage');
    const incorrectAnswers = JSON.parse(sessionStorage.getItem('incorrectAnswers')) || [];

    
    document.getElementById('resultMessage').textContent = resultMessage;

    
    const incorrectAnswersContainer = document.getElementById('incorrectAnswersContainer');
    if (incorrectAnswers.length > 0) {
        const incorrectAnswersList = document.createElement('ul');
        incorrectAnswers.forEach(answer => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>Question ${answer.question}:</strong> <br> Your answer: ${answer.selectedAnswer} <br> Correct answer: ${answer.correctAnswer}`;
            incorrectAnswersList.appendChild(listItem);
        });
        incorrectAnswersContainer.appendChild(incorrectAnswersList);
    }
}


function goBack() {
    
    window.location.href = 'main.html';
}

window.onload = displayResult;