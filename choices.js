class Choices extends HTMLElement {
    connectedCallback() {
        var answer = this.attributes.answer.value;
        this.innerHTML = `
    <div id='block-1' style='padding: 10px;'>
        <label for='option-1' style=' padding: 5px; font-size: 2.5rem;'>
            <input type='radio' name='option' value='${answer}' id='option-11' style='transform: scale(1.6); margin-right: 10px; vertical-align: middle; margin-top: -2px;' />
            ${answer}</label>
        <span id='result-1'></span>
    </div>`;
    }
}
customElements.define('choices-component', Choices);