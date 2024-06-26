
function SubmitForm() {
   
    let correctAnswers = 0;
    const totalQuestions = 10; 
    
    const correctIndexes = [2, 3, 1, 2, 1, 0, 1, 2, 1, 0];

  
    const incorrectAnswers = [];

    
    for (let i = 0; i < totalQuestions; i++) {
       
        const options = document.querySelectorAll(`.Question:nth-of-type(${i + 1}) input[type="checkbox"]`); //querySelectorAll() returns a list of all similar type of data passed withing braces

        
        let selectedOption = -1;
        for (let j = 0; j < options.length; j++) {
            if (options[j].checked) {
                selectedOption = j;
                break; // Stops checking when we find the match
            }
        }

        
        if (selectedOption === correctIndexes[i]) {
            correctAnswers++;
        } else {
            incorrectAnswers.push({
                question: i + 1,
                correctAnswer: options[correctIndexes[i]].parentElement.textContent.trim(),
                selectedAnswer: selectedOption !== -1 ? options[selectedOption].parentElement.textContent.trim() : 'No answer selected'  //we have used ternary operator
            });
        }
    }

    
    const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2); //it will round off till to decimal places

    
    const resultMessage = `You scored ${correctAnswers} out of ${totalQuestions}. (${scorePercentage}%)`;

    
    sessionStorage.setItem('resultMessage', resultMessage);
    sessionStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers)); //JSON.stringify converts to string

    
    window.location.href = 'result.html';//takes the user to the result on clicking submit
}


function ResetForm() {
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
