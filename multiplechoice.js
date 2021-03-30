class Choices extends HTMLElement {
    connectedCallback() {
        var correct = this.attributes.correct.value;
        var answer = this.attributes.answer.value;
        console.log(typeof correct);

        this.innerHTML = `
    <div id='${answer}block' style='padding: 10px;'>
        <label for='option' style=' padding: 5px; font-size: 2.5rem;'>
            <input type='radio' name='option' id="${answer}" value='${correct}' class='option' style='transform: scale(1.6); margin-right: 10px; vertical-align: middle; margin-top: -2px;' />
            ${answer}</label>
        <span id='${answer}result'></span>
    </div>`;
    }
}
customElements.define('choices-component', Choices);


    function displayAnswer() {
    var elements = document.getElementsByClassName('option');
    Array.from(elements).forEach(loopfunction);
    }
    function loopfunction(item){
        if (item.checked){
            showAnswer(item.id+"block",item.id+"result",item.value)
        }
    }


function showAnswer(answer,result,correct){
    if (correct === "false") {
        document.getElementById(answer).style.border = '3px solid red';
        document.getElementById(result).style.color = 'red';
        document.getElementById(result).innerHTML = 'Incorrect!'
    } else {
        document.getElementById(answer).style.border = '3px solid green';
        document.getElementById(result).style.color = 'green';
        document.getElementById(result).innerHTML = 'Correct!'
    }
}
