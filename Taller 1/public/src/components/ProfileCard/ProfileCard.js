class ProfileCard extends HTMLElement{
    static get observeAttribute(){
        return['name']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    attributeChangedCallback(prop, newValue){
        this[prop] = newValue;
        this.render();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `<h1>${this.name}</h1>`
    }
}

customElements.define('profile-card', ProfileCard)