class Counter extends HTMLElement{
    static get observedAttributes(){
        return ['count']
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.mount();
    } 
    connectedCallback(){
        this.mount();
    }
    dissconnectedCallback(){
        this.removeListeners();
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.increaseCount = this.increaseCount.bind(this);
    }
    mount(){
        this.render();
        this.addEventListeners();
    }
    addEventListeners(){
        this.shadowRoot
        .querySelector('button')
        .addEventListener('click', this.increaseCount)
    }
    render(){
        console.log(this.count);
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/post/style.css">
        <button class="likeButton">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png">
            ${this.count || 0}
        </button>`
    }
    removeEventListeners(){
        this.shadowRoot
        .querySelector('button')
        .removeEventListener("click", this.increaseCount);
        console.log("lo borró");
    }
    increaseCount(){
        const currentValue = Number(this.getAttribute('count')) || 0;
        this.setAttribute('count', currentValue + 1);
    }
}

customElements.define('counter-button', Counter);
export default Counter;