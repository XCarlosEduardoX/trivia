let score = 0;
let no_questions=1
let answer = []
fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => {
        printQuestions(data.results[0], score)})

function printQuestions(question, score) {
    var num_random = Math.round(Math.random() * 6);

    if(no_questions==10){
        question=[]
        document.getElementById('question').innerHTML = 'Game Over';
        document.getElementById('no_question').innerHTML = `Question ${no_questions}`
        document.getElementById('answer-container').style.display="none"

        if(score<4){
            document.getElementById('message').innerHTML = 'At least you tried :/';
        }else if(score>4 && score<7){
            document.getElementById('message').innerHTML = 'Very Well c: ';
        }if(score>7 && score<9){
            document.getElementById('message').innerHTML = 'Excellent!';
        }if(score==10){
            document.getElementById('message').innerHTML = 'You are a genius :0';
        }
      
    }else{
    document.getElementById('no_question').innerHTML = `Question ${no_questions}`
    document.getElementById('score').innerHTML = `Score: ${score}`
    document.getElementById('category').innerHTML = `Category: ${question.category}`
    document.getElementById('difficulty').innerHTML = `Difficulty: ${question.difficulty}`
    document.getElementById('question').innerHTML = `${question.question}`

    incorrect = question.incorrect_answers, correct = question.correct_answer
    console.log(incorrect);
    answers(incorrect, correct, num_random);
   
    }
    no_questions++

}

function answers(incorrect, correct, num_random) {
    answer = [incorrect, correct]
    let container = document.getElementById('answer-container');

    switch(num_random){
        case 1:
            if (answer[0][0] == "False" || answer[0][0] == "True") {
                tableRow = `
                <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                <button class="correct" onClick="correctAnswer()">${answer[1]}</button>
                `
                container.innerHTML = tableRow;
            } else {
                tableRow = `
                                                    <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                                                    <button onclick="incorrectAnswer()">${answer[0][1]}</button>
                                                    <button onclick="incorrectAnswer()">${answer[0][2]}</button>
                                                    <button class="correct" onClick="correctAnswer()">${answer[1]}</button>
                                                    `
                container.innerHTML = tableRow;
        
            }
            break;

            case 2:
            if (answer[0][0] == "False" || answer[0][0] == "True") {
                tableRow = `
                <button onclick="correctAnswer()">${answer[1]}</button>
                <button onClick="incorrectAnswer()">${answer[0][0]}</button>
                `
                container.innerHTML = tableRow;
            } else {
                tableRow = `
                                                    <button onclick="correctAnswer()">${answer[1]}</button>
                                                    <button onclick="incorrectAnswer()">${answer[0][1]}</button>
                                                    <button onclick="incorrectAnswer()">${answer[0][2]}</button>
                                                    <button onClick="incorrectAnswer()">${answer[0][0]}</button>
                                                    `
                container.innerHTML = tableRow;
        
            }
            break;

            case 3:
                if (answer[0][0] == "False" || answer[0][0] == "True") {
                    tableRow = `
                    <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                    <button onClick="correctAnswer()">${answer[1]}</button>
                    `
                    container.innerHTML = tableRow;
                } else {
                    tableRow = `
                                                        <button onclick="correctAnswer()">${answer[1]}</button>
                                                        <button onclick="incorrectAnswer()">${answer[0][1]}</button>
                                                        <button onclick="incorrectAnswer()">${answer[0][2]}</button>
                                                        <button onClick="incorrectAnswer()">${answer[0][0]}</button>
                                                        `
                    container.innerHTML = tableRow;
            
                }
                break;
                case 4:
                    if (answer[0][0] == "False" || answer[0][0] == "True") {
                        tableRow = `
                        <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                        <button onClick="correctAnswer()">${answer[1]}</button>
                        `
                        container.innerHTML = tableRow;
                    } else {
                        tableRow = `
                                                            <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                                                            <button onclick="correctAnswer()">${answer[1]}</button>
                                                            <button onclick="incorrectAnswer()">${answer[0][2]}</button>
                                                            <button onClick="incorrectAnswer()">${answer[0][1]}</button>
                                                            `
                        container.innerHTML = tableRow;
                
                    }
                    break;
                    case 5:
                        if (answer[0][0] == "False" || answer[0][0] == "True") {
                            tableRow = `
                            <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                            <button onClick="correctAnswer()">${answer[1]}</button>
                            `
                            container.innerHTML = tableRow;
                        } else {
                            tableRow = `
                                                                <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                                                                <button onclick="incorrectAnswer()">${answer[0][2]}</button>
                                                                <button onclick="correctAnswer()">${answer[1]}</button>
                                                                <button onClick="incorrectAnswer()">${answer[0][1]}</button>
                                                                `
                            container.innerHTML = tableRow;
                    
                        }
                        break;
                        case 6:
                            if (answer[0][0] == "False" || answer[0][0] == "True") {
                                tableRow = `
                                <button onclick="correctAnswer()">${answer[1]}</button>
                                <button onClick="incorrectAnswer()">${answer[0][0]}</button>
                                `
                                container.innerHTML = tableRow;
                            } else {
                                tableRow = `
                                                                    <button onclick="incorrectAnswer()">${answer[0][0]}</button>
                                                                    <button onclick="incorrectAnswer()">${answer[0][2]}</button>
                                                                    <button onclick="correctAnswer()">${answer[1]}</button>
                                                                    <button onClick="incorrectAnswer()">${answer[0][1]}</button>
                                                                    `
                                container.innerHTML = tableRow;
                        
                            }
                            break;
                       
    }

  
}




function incorrectAnswer() {
    fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(data => {
            printQuestions(data.results[0], score)
        }
        )

}

function correctAnswer() {
    fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(data => {
            score++
            printQuestions(data.results[0], score)
            return score

        }
        )






}



