class Closed extends HTMLElement {
    connectedCallback() {
        const answer = this.attributes.answer.value;
        const aufgabe = this.attributes.aufgabe.value;
        this.innerHTML = `
            <input type='text' name='text' id="${answer}" class='${aufgabe}'>
`;
    }
}
customElements.define('closed-component', Closed);


function displayAnswerClosed(aufgabe) {
    const elements = document.getElementsByClassName(aufgabe);
    Array.from(elements).forEach(loopfunction);
}
function loopfunction(item){
    if (item.value.toUpperCase().valueOf() === item.id.toUpperCase().valueOf()){
        showAnswer(item.id,true);
    }
    else {
        showAnswer(item.id,false);
    }
}


function showAnswer(answer, correct){
    if (correct === false) {
        document.getElementById(answer).style.backgroundColor = '#ff9d96';
    } else {
        document.getElementById(answer).style.backgroundColor = '#94ff99';
    }
}

